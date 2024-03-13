interface ProductPageProps{
    searchParams: {
        id: string
    }
}

export default async function ProductPage(props: ProductPageProps){
    console.log(props.searchParams.id);
    return(
        <div>
            <h1>Product Page</h1>
        </div>
    )
}