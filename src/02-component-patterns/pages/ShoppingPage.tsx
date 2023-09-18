import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

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
            <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </ProductCard>

            <ProductCard
              product={product}
              style={{
                backgroundColor: 'red'
              }}
            >
              <ProductImage className='custom-image' style={{ backgroundColor: 'red' }} />
              <ProductTitle className='text-white' style={{ backgroundColor: 'red' }} />
              <ProductButtons className='custom-buttons' style={{ backgroundColor: 'red' }} />
            </ProductCard>
        </div>
    </div>
  )
}
