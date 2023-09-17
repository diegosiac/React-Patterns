import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increseBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increseBy,
      product
    }}>
        <div className={styles.productCard}>
            {children}
        </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Img = ProductImage
// ProductCard.Buttons = ProductButtons
