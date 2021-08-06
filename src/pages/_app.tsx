import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { SpeechContextProvider } from '../hooks/speech/SpeechContext'

function ProjectApp({ Component, pageProps }: AppProps) {
  return (
    <SpeechContextProvider>
      <Component {...pageProps} />
    </SpeechContextProvider>
  )
}

export default ProjectApp
