import React, { useRef, useEffect, useCallback } from 'react'

/**
 * Context to provide a shared reference to the HTML5 text-to-speech API.
 *
 * @see useSpeech hook to use the text-to-speech function provided by this context
 */
export const SpeechContext = React.createContext<((phrase: string) => void) | undefined>(undefined)

// return an array of available speech synthesis voices
const getVoices = () => {
  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    const vs = window.speechSynthesis.getVoices()

    // general case
    if (vs?.length) {
      resolve(vs)
      return
    }

    // chrome fires an event when voices ready
    window.speechSynthesis.onvoiceschanged = (event) => {
      const vsc = (event.target as SpeechSynthesis).getVoices()
      resolve(vsc)
    }
  })
}

// choose iOS voice samantha or win10 voice zira if available, otherwise default to first en-US voice
const chooseVoice = async () => {
  const voices = (await getVoices()).filter((voice) => voice.lang === 'en-US')

  const samantha = voices.filter((voice) => voice.name === 'Samantha')
  const zira = voices.filter((voice) => voice.name === 'Microsoft Zira Desktop - English (United States)')

  return new Promise<SpeechSynthesisVoice>((resolve) => {
    if (samantha.length) {
      resolve(samantha[0])
    }

    if (zira.length) {
      resolve(zira[0])
    }

    resolve(voices[0])
  })
}

export const SpeechContextProvider: React.FC = ({ children }) => {
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const setVoiceRef = async () => {
      voiceRef.current = await chooseVoice()
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setVoiceRef()
    } else {
      console.warn('text-to-speech not supported')
    }
  }, [])

  const speak = useCallback((phrase: string) => {
    if (!voiceRef.current) {
      return
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel()
    }

    // create a new instance each time or else firefox won't repeat
    const utterance = new SpeechSynthesisUtterance(phrase)
    utterance.voice = voiceRef.current
    window.speechSynthesis.speak(utterance)
  }, [])

  return <SpeechContext.Provider value={speak}>{children}</SpeechContext.Provider>
}
