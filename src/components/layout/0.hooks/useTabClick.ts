import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

export function useTabClick() {
  const { getItem, setItem } = useLocalStorage('blog-tab-open-state')
  const [tabOpened, setTabOpened] = useState(false)

  const tabClickHandler = () => {
    setTabOpened(!tabOpened)
    setItem((!tabOpened).toString())
  }

  useEffect(() => {
    setTabOpened((getItem() ?? 'true') === 'true')
  }, [getItem])

  return { tabOpened, tabClickHandler }
}
