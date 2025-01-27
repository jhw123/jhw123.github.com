import { useCallback, useState } from 'react'

export function useInventory<U, T extends Array<U>>(inventory: { item: U; rating: number }[]) {
  const [values, setValue] = useState(inventory)

  const onSetValue = useCallback(
    (i: number) => (value: number) => {
      setValue(values => values.map(({ item, rating }, j) => (i === j ? { item, rating: value } : { item, rating })))
    },
    []
  )

  const onClear = useCallback(() => {
    setValue(inventory)
  }, [inventory])

  return [values, onSetValue, onClear] as const
}
