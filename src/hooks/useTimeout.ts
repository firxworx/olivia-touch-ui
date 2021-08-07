import { useEffect, useRef } from 'react'

/**
 * React hook that calls the given callback once after the specified delay.
 * Disable by setting the delay to a falsey value.
 */
export function useTimeout(callback: () => void, delay?: number) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay) {
      return
    }

    const id = setTimeout(() => callbackRef.current(), delay)

    return () => clearTimeout(id)
  }, [delay])
}
