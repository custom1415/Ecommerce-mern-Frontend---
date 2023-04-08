type Product = {
  _id: string
  id: string | number
  title: string
  image: string
  price: number
  description: string
  category: Category
  rating: {
    rate: number
    count: number
  }
  updatedAt?: Date
  createdAt?: Date
}

type Category =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing"
