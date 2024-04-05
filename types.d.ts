interface ErrorPageProps {
    error: Error;
    
    reset: () => void;

}

interface CategoriesProps{
    params: {
        categories: string[],
        searchParams?: string, //el ? indica que opcional en ts
    }
}

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    gql_id: string;
};

type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
    image: string;
    merchandiseId: string;
}