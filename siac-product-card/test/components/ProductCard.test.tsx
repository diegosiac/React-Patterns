import React from 'react'
import rendered, { act } from 'react-test-renderer'
import { product2 } from '../data/products'
import { ProductCard } from '../../src/components/ProductCard'

describe('ProductCard', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = rendered.create(            
        <ProductCard product={product2}>
            {
                () => (
                    <h1>product Card</h1>
                )
            }
        </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de incrementar el contador', () => {
        const wrapper = rendered.create(            
            <ProductCard product={product2}>
                {
                    ({ count, increseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={() => increseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON()

        expect(tree).toMatchSnapshot()

        act(() => {
            (tree as any).children[2].props.onClick()
        })
        
        tree = wrapper.toJSON()

        expect((tree as any).children[1].children[0]).toBe('1')
    });
})