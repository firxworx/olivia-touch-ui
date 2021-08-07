import { useEffect } from 'react'

/**
 * React hook to suppress multi-touch gestures - events with >1 touch events
 * are ignored.
 */
export function useSuppressMultiTouch() {
  useEffect(() => {
    const suppress = (event: any) => {
      if (event.touchevents?.length > 1) {
        event.preventDefault()
      }
    }

    document.addEventListener('touchmove', suppress, { passive: false })

    return () => {
      document.removeEventListener('touchmove', suppress)
    }
  }, [])
}
