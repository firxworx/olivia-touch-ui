import React from 'react'
import { SpeechContext } from './SpeechContext'

/**
 * React hook that provides an interface to the HTML5 text-to-speech API.
 * Components that use this hook must be wrapped in the corresponding context provider.
 *
 * @see SpeechContextProvider
 */
export const useSpeech = () => {
  const context = React.useContext(SpeechContext)

  if (context === undefined) {
    throw new Error('useSpeech() requires context: this hook can only be used within a child of SpeechContextProvider')
  }

  return context
}
