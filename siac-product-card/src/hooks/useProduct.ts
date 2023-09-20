import { useState, useEffect, useRef } from 'react'
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces'

interface useProduct {
    counter: number;
    maxCount?: number;
    isMaxCountReached: boolean;
    increseBy: (value: number) => void;
    reset: () => void
}

interface Props {
  value?: number;
  initialValues?: InitialValues;
  maxCount?: number;
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: Props): useProduct => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)

  const increseBy = (value: number): void => {
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increseBy,
    reset
  }
}
