import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { SpeechContextProvider } from '../hooks/SpeechContext'
import { InteractionSuppressor } from '../components/layout/InteractionSuppressor'

function ProjectApp({ Component, pageProps }: AppProps) {
  return (
    <SpeechContextProvider>
      <InteractionSuppressor>
        <Component {...pageProps} />
      </InteractionSuppressor>
    </SpeechContextProvider>
  )
}

export default ProjectApp
