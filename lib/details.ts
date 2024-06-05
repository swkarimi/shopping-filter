import { PRODUCT_SORT } from "@/types/types"
import { COLOR_TYPE, SIZE_TYPE } from "@prisma/client"

export const product_sort_details = {
  [PRODUCT_SORT.New]: { id: PRODUCT_SORT.New, nameFa: "جدیدترین" },
  [PRODUCT_SORT.Old]: { id: PRODUCT_SORT.Old, nameFa: "قدیمی ترین" },
  [PRODUCT_SORT.Expensive]: { id: PRODUCT_SORT.Expensive, nameFa: "گران ترین" },
  [PRODUCT_SORT.Cheap]: { id: PRODUCT_SORT.Cheap, nameFa: "ارزان ترین" },
} as const

export const color_details = {
  [COLOR_TYPE.BLACK]: {
    id: COLOR_TYPE.BLACK,
    nameFa: "سیاه",
    color: "#000000",
  },
  [COLOR_TYPE.BLUE]: { id: COLOR_TYPE.BLUE, nameFa: "آبی", color: "#0000ff" },
  [COLOR_TYPE.GREEN]: { id: COLOR_TYPE.GREEN, nameFa: "سبز", color: "#008000" },
  [COLOR_TYPE.RED]: { id: COLOR_TYPE.RED, nameFa: "قرمز", color: "#ff0000" },
  [COLOR_TYPE.WHITE]: {
    id: COLOR_TYPE.WHITE,
    nameFa: "سفید",
    color: "#ffffff",
  },
} as const

export const size_details = {
  [SIZE_TYPE.LARGE]: { id: SIZE_TYPE.LARGE, nameFa: "بزرگ" },
  [SIZE_TYPE.MEDIUM]: { id: SIZE_TYPE.MEDIUM, nameFa: "متوسط" },
  [SIZE_TYPE.SMALL]: { id: SIZE_TYPE.SMALL, nameFa: "کوچک" },
} as const

export const categories_details = {
  "T-shirts": { id: "T-shirts", nameFa: "تی شرت", selected: true, href: "#" },
  shirt: { id: "shirt", nameFa: "پیراهن", selected: false, href: "#" },
  Hoodie: { id: "Hoodie", nameFa: "هودی", selected: false, href: "#" },
  pullover: { id: "pullover", nameFa: "پلیور", selected: false, href: "#" },
} as const
