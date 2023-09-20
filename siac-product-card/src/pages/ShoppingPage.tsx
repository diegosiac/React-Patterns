import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'

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
                    />
                </>
              )
            }
          </ProductCard>
        </div>
    </div>
  )
}
