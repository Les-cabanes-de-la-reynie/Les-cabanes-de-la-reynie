export type Maybe<T> = T | null

export enum ProductCategoryEnum {
  Burger = 'burger',
  Side = 'side',
  Drink = 'drink',
  Dessert = 'dessert',
  Salad = 'salad'
}

export interface ProductEntityResponse {
  data?: Maybe<ProductEntity>
}

export interface ProductEntity {
  id?: Maybe<number>
  attributes?: Maybe<Product>
}

export interface Product {
  name?: Maybe<string>
  description?: Maybe<string>
  price?: Maybe<number>
  in_stock?: Maybe<boolean>
  new_release?: Maybe<boolean>
  allergens?: Maybe<string>
  image?: Maybe<ImageEntityResponse>
  category?: Maybe<ProductCategoryEnum>
  createdAt?: Maybe<Date>
  updatedAt?: Maybe<Date>
  publishedAt?: Maybe<Date>
}

export interface ImageEntityResponse {
  data?: Maybe<ImageEntity>
}

export interface ImageEntity {
  id?: Maybe<number>
  attributes?: Maybe<ProductImage>
}

export interface ProductImage {
  name: string
  alternativeText?: Maybe<string>
  caption?: Maybe<string>
  width?: Maybe<number>
  height?: Maybe<number>
  formats?: Maybe<string>
  hash: string
  ext?: Maybe<string>
  mime: string
  size: number
  url: string
  previewUrl?: Maybe<string>
  provider: string
  provider_metadata?: Maybe<string>
  createdAt?: Maybe<Date>
  updatedAt?: Maybe<Date>
}
