import React from 'react'
import rendered from 'react-test-renderer'
import { product2 } from '../data/products'
import { ProductCard } from '../../src/components/ProductCard'
import { ProductImage } from '../../src/components/ProductImage'

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con una imagen personalizada', () => {
        const wrapper = rendered.create(
            <ProductImage img='https://hola.png' className='custom-class'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de mostrar el componente correctamente con la imagen del componente', () => {
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    });
})