interface CategoriesProps{
    params: {
        categories: string[],
        searchParams?: string, //el ? indica que opcional en ts
    }
}

export default function Category(props: CategoriesProps) {

    const { categories } = props.params;

    console.log(props)
    
    return (
        <h1>Categoria dinámica {categories} </h1>
    )
}