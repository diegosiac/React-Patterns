import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard
            product={product}
            className='bg-dark text-white'
            initialValues={{
              count: 4,
              maxCount: 10
            }}
          >
            {
              ({ reset, count, increseBy }) => (
                <>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons
                    className='custom-buttons'
                    />
                  <button onClick={reset}>Reset</button>
                  <button disabled={count <= 1} onClick={() => increseBy(-2)}>-2</button>
                  <button disabled={count >= 9} onClick={() => increseBy(+2)}>+2</button>
                  <span>{count}</span>
                </>
              )
            }
          </ProductCard>
        </div>
    </div>
  )
}
