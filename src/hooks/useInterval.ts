import { useEffect, useRef } from 'react'

/**
 * React hook that calls the given callback after the specified delay.
 * Disable by setting the delay to a falsey value.
 */
export function useInterval(callback: () => void, delay?: number) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay) {
      return
    }

    const interval = setInterval(() => callbackRef.current(), delay)

    return () => clearInterval(interval)
  }, [delay])
}
