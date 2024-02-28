import { ProductsWrapper } from "src/components/Store/ProductsWrapper";
import { getProducts } from "src/services/shopify";


export default async function Category(props: CategoriesProps) {


    const products = await getProducts();
    const { categories } = props.params;
    
    
    return (
        <ProductsWrapper products={products}/>
    )
}