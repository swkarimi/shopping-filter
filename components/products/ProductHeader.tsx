"use client"

import { FC, useState } from "react"
import { ChevronDown, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { product_sort_details } from "@/lib/details"
import { cn } from "@/lib/utils"
import { Filter_Type } from "@/types/types"

type ProductHeaderProps = {
  filter: Filter_Type
  setFilter: (v: Filter_Type) => void
}

export const ProductHeader: FC<ProductHeaderProps> = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        تی شرت
      </h1>
      <div className="flex items-center">
        <DropdownMenu open={isOpen}>
          <DropdownMenuTrigger
            className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            مرتب سازی
            <ChevronDown className="-me-1 ms-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.values(product_sort_details).map((option) => (
              <button
                key={option.id}
                className={cn(
                  "text-left w-full block px-4 py-2 text-sm",
                  {
                    "text-gray-900 bg-gray-100": option.id === filter.sort,
                  },
                  { "text-gray-500": option.id !== filter.sort }
                )}
                onClick={() => {
                  const newFilter = { ...filter, sort: option.id }
                  setFilter(newFilter)
                  setIsOpen(false)
                }}
              >
                {option.nameFa}
              </button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="-m-2 ms-4 p-2 text-gray-400 hover:text-gray-500 sm:ms-6 lg:hidden">
          <Filter className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
