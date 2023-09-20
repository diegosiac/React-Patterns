import React, { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

  return (
    <Provider value={{
      counter,
      increseBy,
      maxCount,
      product
    }}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
            {children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increseBy,
              reset
            })}
        </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Img = ProductImage
// ProductCard.Buttons = ProductButtons
