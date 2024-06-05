import { PRODUCT_SORT } from "@/types/types"
import { Prisma } from "@prisma/client"

export function getOrderBy(
  sort: PRODUCT_SORT
):
  | Prisma.ProductOrderByWithRelationInput
  | Prisma.ProductOrderByWithRelationInput[]
  | undefined {
  switch (sort) {
    case PRODUCT_SORT.New:
      return {
        [Prisma.ProductScalarFieldEnum.createdAt]: Prisma.SortOrder.desc,
      }
    case PRODUCT_SORT.Old:
      return { [Prisma.ProductScalarFieldEnum.createdAt]: Prisma.SortOrder.asc }
    case PRODUCT_SORT.Expensive:
      return { [Prisma.ProductScalarFieldEnum.price]: Prisma.SortOrder.desc }
    case PRODUCT_SORT.Cheap:
      return { [Prisma.ProductScalarFieldEnum.price]: Prisma.SortOrder.asc }
    default:
      return undefined
  }
}
