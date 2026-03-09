type Product = 'Chat' | 'CoWork' | 'Code'

const badgeColors: Record<Product, string> = {
  Chat: 'bg-product-chat/15 text-product-chat border-product-chat/30',
  CoWork: 'bg-product-cowork/15 text-product-cowork border-product-cowork/30',
  Code: 'bg-product-code/15 text-product-code border-product-code/30',
}

interface ProductBadgeProps {
  product: Product
}

export default function ProductBadge({ product }: ProductBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${badgeColors[product]}`}>
      {product}
    </span>
  )
}
