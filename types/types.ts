import { COLOR_TYPE, SIZE_TYPE } from "@prisma/client"

export enum PRODUCT_SORT {
  New = "New",
  Old = "Old",
  Expensive = "Expensive",
  Cheap = "Cheap",
}

export type Filter_Type = {
  sort: PRODUCT_SORT
  color: COLOR_TYPE[]
  size: SIZE_TYPE[]
  price: [number, number]
}
