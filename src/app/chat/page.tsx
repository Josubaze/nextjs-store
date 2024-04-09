import { Chat } from "src/components/chat/chat"
import { getProducts } from "src/services/shopify/products"
import { createAgent } from "src/utils/openIA/createAgent";

export default async function ChatPage(){
    const products = await getProducts();
    const productTitles = products.map((product) => product.title);
    const flagProductTitles = productTitles.join("\n");
    const agent = createAgent(flagProductTitles);

    return <Chat agent= { agent }/>     
}