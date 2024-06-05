"use client"

import { getProducts } from "@/action/product.action"
import { ProductFilter } from "@/components/products/ProductFilter"
import { ProductHeader } from "@/components/products/ProductHeader"
import { ProductSection } from "@/components/products/ProductSection"
import { MAX_PRICE_DEFAULT, MIN_PRICE_DEFAULT } from "@/lib/constant"
import { color_details, size_details } from "@/lib/details"
import { Filter_Type, PRODUCT_SORT } from "@/types/types"
import { COLOR_TYPE, Product, SIZE_TYPE } from "@prisma/client"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

export default function HomePage() {
  const [products, setProducts] = useState<Product[] | undefined>(undefined)

  const [filter, setFilter] = useState<Filter_Type>({
    sort: PRODUCT_SORT.New,
    color: Object.keys(color_details) as COLOR_TYPE[],
    size: Object.keys(size_details) as SIZE_TYPE[],
    price: [MIN_PRICE_DEFAULT, MAX_PRICE_DEFAULT],
  })

  const [debouncedFilter] = useDebounce(filter, 1000)

  useEffect(() => {
    setProducts(undefined)
    getProducts(debouncedFilter).then((data) => setProducts(data))
  }, [debouncedFilter])

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ProductHeader filter={filter} setFilter={setFilter} />
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="hidden lg:block">
            <ProductFilter filter={filter} setFilter={setFilter} />
          </div>

          <div className="lg:col-span-3">
            <ProductSection products={products} />
          </div>
        </div>
      </section>
    </main>
  )
}
