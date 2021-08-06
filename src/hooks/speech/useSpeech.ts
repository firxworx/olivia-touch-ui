import React from 'react'
import { SpeechContext } from './SpeechContext'

export const useSpeech = () => {
  const context = React.useContext(SpeechContext)

  if (context === undefined) {
    throw new Error('useSpeech() requires context: this hook can only be used within a child of SpeechContextProvider')
  }

  return context
}
