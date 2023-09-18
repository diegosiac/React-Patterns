import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increseBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increseBy,
      product
    }}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
            {children}
        </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Img = ProductImage
// ProductCard.Buttons = ProductButtons
