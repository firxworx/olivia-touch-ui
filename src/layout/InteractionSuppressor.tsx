import React from 'react'

import { useSuppressContextMenu } from '@/hooks/useSuppressContextMenu'
import { useSuppressMultiTouch } from '@/hooks/useSuppressMultiTouch'

/**
 * Utility component for suppressing the right-click/long-press context menu,
 * multi-touch gesures, and touch actions (specifically pinch zoom on touch screens).
 */
export const InteractionSuppressor: React.FC<{ suppressScrolling?: boolean }> = ({
  children,
  suppressScrolling = false,
}) => {
  // useSuppressContextMenu()
  useSuppressMultiTouch()

  return <div style={{ touchAction: suppressScrolling ? 'none' : 'pan-x pan-y' }}>{children}</div>
}
