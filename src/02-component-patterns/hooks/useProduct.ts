import { useState, useEffect, useRef } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces'

interface useProduct {
    counter: number;
    increseBy(value: number): void;
}

interface Props {
  value?: number
  product: Product
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({ onChange, product, value = 0 }: Props): useProduct => {
  const [counter, setCounter] = useState<number>(value)

  const isControlled = useRef(!!onChange)

  const increseBy = (value: number): void => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }

    const newValue = Math.max(counter + value, 0)

    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increseBy
  }
}
