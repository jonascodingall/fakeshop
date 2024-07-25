import type { Product, ProductList, ProductListSorted} from "../lib/types/product"

export async function load({params}): Promise<ProductListSorted>{
    const categoriesResponse = await fetch("https://fakestoreapi.com/products/categories")
    const categories = await categoriesResponse.json()

    const productListSorted: Array<ProductList> = [] 

    for (const category of categories){
        const productsPresonse = await fetch("https://fakestoreapi.com/products/category/" + category)
        const products: Array<Product> = await productsPresonse.json()
        const productList: ProductList = {} as ProductList
        productList.products = products
        productListSorted.push(productList)
    }


    return {
        productsByCategory: productListSorted,
    }
}