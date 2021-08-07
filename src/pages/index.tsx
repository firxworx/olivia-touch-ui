import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { useSpeech } from '../hooks/useSpeech'

import { GridLayout } from '../components/layout/GridLayout'
import { SpeechScreen } from '../screens/SpeechScreen'

const screens = [{ name: 'Three Fly Mode', component: SpeechScreen }]

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
    // delay...
    // onRest: () => ...
  })

  return (
    <GridLayout>
      {transitions((styles, modeIndex) => (
        <animated.div className="w-full h-full" style={{ ...styles }}>
          <Mode index={modeIndex} />
        </animated.div>
      ))}
    </GridLayout>
  )
}
