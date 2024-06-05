"use server"

import { Filter_Type } from "@/types/types"

export async function getProducts(data: Filter_Type) {
  // console.log("data", data)
  const url = "http://localhost:3000/api/products"
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return response.json()
  } catch (error) {
    console.log("error", error)
  }
}
