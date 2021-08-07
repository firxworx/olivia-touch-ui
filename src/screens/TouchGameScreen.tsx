import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import color from 'nice-color-palettes'
// import Confetti from 'react-confetti'
import useSound from 'use-sound'

// use-sound simply wont play... the wav seems to load fine and data shows in console log
// no errors or nothing, no audiocontext warnings from chrome (ensured interaction first), etc.
// webpack? nextjs?... maybe needs that nextjs dynamic import?
// import cheer from '@/assets/sfx/cheers/cheer-1.wav'

// const palettes = [54, 89, 67, 96, 43, 23, 21] // a few nice ones
const getRandomPalette = () => color[Math.floor(Math.random() * 10)]

const NUM_BOXES = 9

const CLASSNAMES = {
  TARGET:
    'transition duration-300 ease-in-out opacity-100 bg-red-300 border-8 border-red-400 active:bg-red-400 active:border-red-600 transform active:scale-105',
  DEFAULT: 'opacity-25 border-8 border-transparent',
}

// https://github.com/joshwcomeau/use-sound/issues/22
// https://github.com/goldfire/howler.js#ctx-boolean-web-audio-only
// https://github.com/goldfire/howler.js#ctx-boolean-web-audio-only

/*
// may want to consider e.g. `import useWindowSize from 'react-use/lib/useWindowSize'`
<Confetti
  width={windowSize.width}
  height={windowSize.height}
  numberOfPieces={numPieces}
/>
*/

export const TouchGameScreen: React.FC = () => {
  const [target, setTarget] = useState<number | undefined>(undefined)
  const [palette, setPalette] = useState<Array<string> | undefined>(undefined)

  useEffect(() => {
    setTarget(Math.floor(Math.random() * NUM_BOXES))
    setPalette(getRandomPalette())
  }, [target])

  const [p1] = useSound(`./assets/cheers/cheer-1.wav`, { volume: 0.5 })
  const [p2] = useSound(`./assets/cheers/cheer-2.wav`, { volume: 0.5 })
  const [p3] = useSound(`./assets/cheers/woo-1.wav`, { volume: 0.5 })
  const [p4] = useSound(`./assets/cheers/woo-2.wav`, { volume: 0.5 })

  const cheers = [p1, p2, p3, p4]

  const handleClick = (n: number) => (event: React.MouseEvent) => {
    console.log(`${n} clicked... ${target === n ? 'winner' : 'loser'} ... target is ${target}`)
    if (target === n) {
      cheers[Math.floor(Math.random() * cheers.length)]()

      setTarget(Math.floor(Math.random() * NUM_BOXES))
      setPalette(getRandomPalette())
    }
  }

  // console.log('palette', palette) // @todo cut down on the re-renders
  return (
    <div
      className={clsx('grid grid-cols-3 gap-4 h-full p-4', 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600')}
    >
      {Array(NUM_BOXES)
        .fill(undefined)
        .map((_v, n) => (
          <button
            key={n}
            type="button"
            style={{ backgroundColor: (target ?? -1) === n ? undefined : palette?.[n % 4] ?? undefined }}
            className={clsx(
              'flex justify-center items-center p-8 rounded-md outline-none',
              'text-gray-800 font-bold text-2xl text-opacity-50',
              'transition duration-300 ease-in-out',
              target === n ? CLASSNAMES.TARGET : CLASSNAMES.DEFAULT,
            )}
            onClick={handleClick(n)}
          >
            {n + 1}
          </button>
        ))}
    </div>
  )
}
