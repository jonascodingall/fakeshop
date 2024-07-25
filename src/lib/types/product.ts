export interface ProductList{
    products: Array<Product>
}

export interface ProductListSorted{
    productsByCategory: Array<ProductList>
}

export interface Product{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating,
}

export interface Rating{
    rate: number,
    count: number,
}