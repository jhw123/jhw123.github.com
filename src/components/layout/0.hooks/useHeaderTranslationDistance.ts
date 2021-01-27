import { useLayoutEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { MOBILE_HEADER_BAR_HEIGHT } from '../../../constants/constants'

export function useHeaderTranslationDistance() {
  const { windowWidth } = useWindowSize()
  const headerRef = useRef<HTMLHeadElement>(null)
  const [translationDistance, setTranslationDistance] = useState(0)

  useLayoutEffect(() => {
    if (headerRef.current != null) {
      setTranslationDistance(headerRef.current.getBoundingClientRect().height - MOBILE_HEADER_BAR_HEIGHT)
    }
  }, [windowWidth])

  return { headerRef, translationDistance }
}
