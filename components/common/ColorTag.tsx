'use client'

import { color_details } from "@/lib/details"
import { COLOR_TYPE } from "@prisma/client"
import type { FC } from "react"

type ColorTagProps = {
  colorName: COLOR_TYPE
}

export const ColorTag: FC<ColorTagProps> = ({ colorName }) => {
  const c = color_details[colorName]
  return (
    <div className="flex items-center justify-start gap-1">
      <div
        className="size-4 rounded border border-gray-400"
        style={{
          backgroundImage: `linear-gradient(to right,${c.color},${c.color}70)`,
        }}
      ></div>
      <div className="text-xs">{c.nameFa}</div>
    </div>
  )
}
