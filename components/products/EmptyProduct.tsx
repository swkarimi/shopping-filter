'use client'

import { XCircle } from "lucide-react"

export const EmptyProduct = () => {
  return (
    <div className="relative col-span-full bg-gray-100 w-full p-12 flex flex-col items-center justify-center">
      <XCircle className="size-12 text-red-500" />
      <h3 className="text-zinc-500 text-base pt-3">
        هیچ محصولی برای جستجوی مورد نظر یافت نشد.
      </h3>
    </div>
  )
}
