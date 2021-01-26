import { useEffect, useRef, useState } from 'react'

export function useAfterLoad() {
  const mainRef = useRef<HTMLElement>(null)
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
    } else {
      mainRef.current?.classList?.add('animate')
    }
  }, [isFirstRender])

  return { mainRef }
}
