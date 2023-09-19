import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const { counter, increseBy } = useProduct({ onChange, product, value })

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
