export type BasketProductType = {
  id: string
  title: string
  description: string
  price: number
  popular: number
  urlPng: string
  urlWebp: string
  count: number
  sumProduct: number

}

export type ProductsType = {
  itemPizza: ProductType[],
  itemCoffee: ProductType[],
  itemCocktail: ProductType[]
}

export type ProductType = {
  id: string,
  title: string,
  description: string,
  price: number
  popular: number
  urlPng: string
  urlWebp: string
}


export type ProductSortType = 'popular' | 'price' | null

export type SelectListType = {
  title: string,
  value: string | null
}
