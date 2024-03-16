
// redirect para server component
import { redirect } from "next/navigation"; // se importa redirect de next 
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

    // if(!id){
    //     redirect('/store');  // si no hay id en la url especificado redirije a store
    // }
    return(
        <ProductView product={product}/>
    )
}