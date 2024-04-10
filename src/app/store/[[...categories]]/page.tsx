import { ProductsWrapper } from "src/components/Store/ProductsWrapper";
import { getCollections, getCollectionsProducts } from "src/services/shopify/collections";
import { getProducts } from "src/services/shopify/products";

export default async function Category(props: CategoriesProps) {

    const { categories } = props.params;
    let products = [];
    const collections = await getCollections();
    
    if (categories?.length > 0) {
        const selectCollectionsId = collections.find((collection: any) => collection.handle === categories[0]).id
        products = await getCollectionsProducts(selectCollectionsId);
    }else {
        products = await getProducts();
    }

    //const collections = await getCollections();  // secuencial

    // const [products, collections] = await Promise.all([ // ejecucion paralela
    //     getProducts(),
    //     getCollections()
    // ]);

    return (
        <ProductsWrapper products={products}/>
    )
}