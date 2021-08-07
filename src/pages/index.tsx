import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { useSpeech } from '@/hooks/useSpeech'

import { GridLayout } from '@/layout/GridLayout'
import { SpeechScreen } from '@/screens/SpeechScreen'
import { TouchGameScreen } from '@/screens/TouchGameScreen'
import { ControlsLayout } from '@/layout/ControlsLayout'

const screens = [
  { name: 'Button Game', component: TouchGameScreen },
  { name: 'Speech Screen', component: SpeechScreen },
]

const Mode: React.FC<{ index: number }> = ({ index }) => {
  return screens[index].component({})
}

export default function IndexPage() {
  const [currentMode, setCurrentMode] = useState(0)

  const speak = useSpeech()

  const handleNextMode = () => {
    const nextModeIndex = (currentMode + 1) % screens.length

    speak(`SWITCH, ${screens[nextModeIndex].name}`)
    setCurrentMode(nextModeIndex)
  }

  const transitions = useTransition(currentMode, {
    config: { duration: 500 }, // config.molasses
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0px, 0px)',
    },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    leave: { opacity: 0, position: 'absolute', transform: 'translate3d(100%, 0px, 0px)' },
    // onRest: () => ...
  })

  return (
    <GridLayout>
      <ControlsLayout>
        {transitions((styles, modeIndex) => (
          <animated.div className="w-full h-full" style={{ ...styles }}>
            <Mode index={modeIndex} />
          </animated.div>
        ))}
      </ControlsLayout>
    </GridLayout>
  )
}
