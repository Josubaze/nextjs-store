import { ProductsWrapper } from "src/components/Store/ProductsWrapper";
import { getProducts } from "src/services/shopify/products";


export default async function Category(props: CategoriesProps) {

    const products = await getProducts();
    //const collections = await getCollections();  // secuencial

    // const [products, collections] = await Promise.all([ // ejecucion paralela
    //     getProducts(),
    //     getCollections()
    // ]);
    
    return (
        <ProductsWrapper products={products}/>
    )
}