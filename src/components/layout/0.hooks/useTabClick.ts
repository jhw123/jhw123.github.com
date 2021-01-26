import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { useState } from 'react'

export function useTabClick() {
  const { getItem, setItem } = useLocalStorage('blog-tab-open-state')
  const [tabOpened, setTabOpened] = useState((getItem() ?? 'true') === 'true')

  const tabClickHandler = () => {
    setTabOpened(!tabOpened)
    setItem((!tabOpened).toString())
  }

  return { tabOpened, tabClickHandler }
}
