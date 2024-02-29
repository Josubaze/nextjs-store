import Link from "next/link";
import { getCollections } from "src/services/shopify/collections";

export default async function Layout( {children}: {children: React.ReactNode[]} ){ // layout local, depende de anidación y nivel
    
    const collections = await getCollections(); 

    return (
        <main>
            <nav>
                {
                    collections.map((collection: any) => (
                        <Link key={collection.id} href={'/store/' + collection.handle}>
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>

            { children }

        </main>
    )
}
