import { useEffect } from 'react'

/**
 * React hook to prevent the default right-click/long-press context menu behaviour.
 */
export function useSuppressContextMenu() {
  useEffect(() => {
    const pd = (event: MouseEvent) => {
      event.preventDefault()
    }

    document.body.addEventListener('contextmenu', pd)

    return () => {
      window.removeEventListener('contextmenu', pd)
    }
  }, [])
}
