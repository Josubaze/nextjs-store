import { getProducts } from "src/services/shopify/products";


export async function GET(){
    const products = await getProducts();

    return Response.json({ products });
}