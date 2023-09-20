# Siac-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Diego Cruz 

```javaScript
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'siac-product-card'
```

###ejemplo

```javaScript
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
```