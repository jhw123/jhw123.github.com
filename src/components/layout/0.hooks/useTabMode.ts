import { useWindowSize } from '../../../hooks/useWindowSize'
import { MOBILE_MODE_WIDTH } from '../../../constants/constants'

export function useTabMode() {
  const { windowWidth } = useWindowSize()
  const isTabMode = windowWidth <= MOBILE_MODE_WIDTH
  return { isTabMode }
}
