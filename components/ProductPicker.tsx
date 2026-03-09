'use client'

import { useState, ReactNode } from 'react'

type Product = 'Chat' | 'CoWork' | 'Code'

const productColors: Record<Product, string> = {
  Chat: 'bg-product-chat/15 text-product-chat border-product-chat/30',
  CoWork: 'bg-product-cowork/15 text-product-cowork border-product-cowork/30',
  Code: 'bg-product-code/15 text-product-code border-product-code/30',
}

const productActiveColors: Record<Product, string> = {
  Chat: 'bg-product-chat text-white',
  CoWork: 'bg-product-cowork text-white',
  Code: 'bg-product-code text-white',
}

interface ProductPickerProps {
  products: Product[]
  children: Record<Product, ReactNode>
}

export default function ProductPicker({ products, children }: ProductPickerProps) {
  const [active, setActive] = useState<Product>(products[0])

  return (
    <div className="my-6">
      <div className="flex gap-2 mb-4">
        {products.map((product) => (
          <button
            key={product}
            onClick={() => setActive(product)}
            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
              active === product
                ? productActiveColors[product]
                : `${productColors[product]} hover:opacity-80`
            }`}
          >
            {product}
          </button>
        ))}
      </div>
      <div className="animate-fade-in" key={active}>
        {children[active]}
      </div>
    </div>
  )
}
