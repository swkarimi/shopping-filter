'use client'

import { size_details } from "@/lib/details"
import { SIZE_TYPE } from "@prisma/client"
import { FC } from "react"

type SizeTagProps = {
  sizeName: SIZE_TYPE
}

export const SizeTag: FC<SizeTagProps> = ({ sizeName }) => {
  const s = size_details[sizeName]
  return <div className="text-xs">{s.nameFa}</div>
}
