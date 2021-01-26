import { useLayoutEffect, useState } from 'react'

export function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return { windowWidth, windowHeight }
}
