"use client"

import { Product } from "@prisma/client"
import { EmptyProduct } from "./EmptyProduct"
import { ProductItem } from "./ProductItem"
import { ProductSkeleton } from "./ProductSkeleton"
import { FC } from "react"

type ProductSection = {
  products: Product[] | undefined
}

export const ProductSection: FC<ProductSection> = ({ products }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
      {products && products.length === 0 ? (
        <EmptyProduct />
      ) : products ? (
        products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        Array(12)
          .fill(null)
          .map((_, idx) => <ProductSkeleton key={idx} />)
      )}
    </ul>
  )
}
