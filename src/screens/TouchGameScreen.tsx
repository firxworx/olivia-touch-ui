import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import color from 'nice-color-palettes'
// import Confetti from 'react-confetti'

// const palettes = [54, 89, 67, 96, 43, 23, 21] // a few nice ones
const getRandomPalette = () => color[Math.floor(Math.random() * 10)]

const NUM_BOXES = 9

const CLASSNAMES = {
  TARGET:
    'transition duration-300 ease-in-out opacity-100 bg-red-300 border-8 border-red-400 active:bg-red-400 active:border-red-600 transform active:scale-105',
  DEFAULT: 'opacity-25 border-8 border-transparent',
}

export const TouchGameScreen: React.FC = () => {
  const [target, setTarget] = useState<number | undefined>(undefined)
  const [palette, setPalette] = useState<Array<string> | undefined>(undefined)

  // <Confetti active={true} config={confettiConfig} />

  useEffect(() => {
    setTarget(Math.floor(Math.random() * NUM_BOXES))
    setPalette(getRandomPalette())
  }, [target])

  console.log(palette)
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
              'flex justify-center items-center p-8 rounded-md',
              'text-gray-800 font-bold text-2xl text-opacity-50',
              'transition duration-300 ease-in-out',
              target === n ? CLASSNAMES.TARGET : CLASSNAMES.DEFAULT,
            )}
            onClick={() => {
              console.log(`${n} clicked... ${target === n ? 'winner' : 'loser'} ... target is ${target}`)
              if (target === n) {
                setTarget(Math.floor(Math.random() * NUM_BOXES))
                setPalette(getRandomPalette())
              }
            }}
          >
            {n + 1}
          </button>
        ))}
    </div>
  )
}
