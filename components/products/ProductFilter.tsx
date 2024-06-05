'use client'

import { categories_details, color_details, size_details } from "@/lib/details"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from "../ui/slider"
import { Filter_Type } from "@/types/types"
import { MAX_PRICE_DEFAULT, MIN_PRICE_DEFAULT } from "@/lib/constant"
import type { FC } from "react"

type ProductFilterProps = {
  filter: Filter_Type
  setFilter: (v: Filter_Type) => void
}

export const ProductFilter: FC<ProductFilterProps> = ({
  filter,
  setFilter,
}) => {
  const minPrice = Math.min(filter.price[0], filter.price[1])
  const maxPrice = Math.max(filter.price[0], filter.price[1])
  return (
    <div>
      <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
        {Object.values(categories_details).map((category) => (
          <li key={category.id}>
            <button
              disabled={!category.selected}
              className="disabled:cursor-not-allowed disabled:opacity-60"
            >
              {category.nameFa}
            </button>
          </li>
        ))}
      </ul>

      <Accordion type="multiple" className="animate-none">
        {/* Color */}
        <AccordionItem value="color">
          <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">انتخاب رنگ</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 animate-none">
            <ul className="space-y-4">
              {Object.values(color_details).map((option, optionIdx) => (
                <li key={option.id} className="flex items-center">
                  <label
                    htmlFor={`color-${optionIdx}`}
                    className="text-sm text-gray-600 pe-4 cursor-pointer flex items-center justify-start"
                  >
                    <input
                      type="checkbox"
                      id={`color-${optionIdx}`}
                      onChange={() => {
                        const isInFilter = filter["color"].includes(option.id)
                        const newFilter = isInFilter
                          ? {
                              ...filter,
                              color: filter.color.filter(
                                (v) => v !== option.id
                              ),
                            }
                          : {
                              ...filter,
                              color: [...filter.color, option.id],
                            }
                        setFilter(newFilter)
                      }}
                      checked={filter.color.includes(option.id)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <span className="ms-3">{option.nameFa}</span>
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Size */}
        <AccordionItem value="size">
          <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">انتخاب اندازه</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 animate-none">
            <ul className="space-y-4">
              {Object.values(size_details).map((option, optionIdx) => (
                <li key={option.id} className="flex items-center">
                  <label
                    htmlFor={`size-${optionIdx}`}
                    className="text-sm text-gray-600 pe-4 cursor-pointer flex items-center justify-start"
                  >
                    <input
                      type="checkbox"
                      id={`size-${optionIdx}`}
                      onChange={() => {
                        const isInFilter = filter["size"].includes(option.id)
                        const newFilter = isInFilter
                          ? {
                              ...filter,
                              size: filter.size.filter((v) => v !== option.id),
                            }
                          : {
                              ...filter,
                              size: [...filter.size, option.id],
                            }
                        setFilter(newFilter)
                      }}
                      checked={filter.size.includes(option.id)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <span className="ms-3">{option.nameFa}</span>
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Price */}
        <AccordionItem value="price">
          <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">قیمت</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 animate-none">
            <div className="space-y-4">
              <div className="flex flex-row justify-between items-center">
                <span>{maxPrice.toFixed(0)} تومان</span>
                <span>{minPrice.toFixed(0)} تومان </span>
              </div>
              <Slider
                onValueChange={(range) => {
                  const [min, max] = range
                  const newFilter: Filter_Type = {
                    ...filter,
                    price: [min, max],
                  }
                  setFilter(newFilter)
                }}
                value={filter.price}
                min={MIN_PRICE_DEFAULT}
                max={MAX_PRICE_DEFAULT}
                defaultValue={filter.price}
                step={1000}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
