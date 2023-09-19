import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                className='bg-dark text-white'
                onChange={onProductCountChange}
                value={shoppingCart[product.id]?.count || 0}
              >
                <ProductImage />
                <ProductTitle />
                <ProductButtons
                  className='custom-buttons'
                />
              </ProductCard>
            ))
          }
        </div>

        <div className='shopping-cart'>
          {
            Object.values(shoppingCart).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                className='bg-dark text-white'
                style={{ width: '100px' }}
                onChange={onProductCountChange}
                value={product.count}
              >
                <ProductImage />
                <ProductButtons
                  className='custom-buttons'
                  style={{ display: 'flex', justifyContent: 'center' }}
                />
              </ProductCard>
            ))
          }
        </div>

    </div>
  )
}
