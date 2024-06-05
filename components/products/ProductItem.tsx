/* eslint-disable @next/next/no-img-element */
"use client"

import type { Product as ProductType } from "@prisma/client"
import type { FC } from "react"
import { Currency } from "../common/Currency"
import { ColorTag } from "../common/ColorTag"
import { SizeTag } from "../common/SizeTag"

type ProducItemProps = {
  product: ProductType
}

export const ProductItem: FC<ProducItemProps> = ({ product }) => {
  return (
    <div className="group relative border p-2 rounded-md">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={`/images/${product.imageSrc}`}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <div className="mt-1 text-sm text-gray-500 flex flex-row items-center justify-start">
            <ColorTag colorName={product.color} />،
            <SizeTag sizeName={product.size} />
          </div>
        </div>
        <div className="text-sm font-medium text-gray-900">
          <Currency amount={product.price} />
        </div>
      </div>
    </div>
  )
}
