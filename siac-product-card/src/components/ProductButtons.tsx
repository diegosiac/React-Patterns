import React, { useCallback, useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className }: Props) => {
  const { increseBy, counter, maxCount } = useContext(ProductContext)

  const isMaxReach = useCallback(
    () => !!maxCount && maxCount === counter,
    [counter, maxCount]
  )

  return (
      <div className={`${styles.buttonsContainer} ${className}`}>
          <button onClick={() => increseBy(-1)} className={styles.buttonMinus}>-</button>
          <div className={styles.countLabel}>{counter}</div>
          <button onClick={() => increseBy(+1)} className={`${styles.buttonAdd} ${isMaxReach() && styles.disable}`}>+</button>
      </div>
  )
}
