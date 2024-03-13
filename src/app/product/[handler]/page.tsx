import { ProductView } from "src/components/Product/ProductgView";
import { getProducts } from "src/services/shopify/products";

interface ProductPageProps{
    searchParams: {
        id: string,
    }
}
export default async function ProductPage({ searchParams } : ProductPageProps){ 
    const id = searchParams.id;
    const products = await getProducts(id);

    
    const product = products[0];
    return(
        <ProductView product={product}/>
    )
}