import { useState } from 'react'

interface useProduct {
    counter: number;
    increseBy(value: number): void;
}

export const useProduct = (): useProduct => {
  const [counter, setCounter] = useState<number>(0)

  const increseBy = (value: number): void => {
    setCounter(prev => Math.max(prev + value, 0))
  }
  return {
    counter,
    increseBy
  }
}
