import { getOrderBy } from "@/lib/utilsdb"
import prisma from "@/prisma/db"
import { Filter_Type, PRODUCT_SORT } from "@/types/types"
import { Prisma } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body: Filter_Type = await req.json()
  const { color, price, size, sort } = body

  const where: Prisma.ProductWhereInput | undefined = {
    AND: [
      { color: { in: color } },
      { size: { in: size } },
      { price: { gte: price[0] } },
      { price: { lte: price[1] } },
    ],
  }

  const orderBy = getOrderBy(sort)

  const products = await prisma.product.findMany({
    where,
    orderBy,
  })
  return NextResponse.json(products)
}
