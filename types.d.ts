interface ErrorPageProps {
    error: Error;
    
    reset: () => void;

}

interface ProductType {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
}

interface CategoriesProps{
    params: {
        categories: string[],
        searchParams?: string, //el ? indica que opcional en ts
    }
}

interface CartItem {
    title: string;
    price: number;
    quantity: number;
    id: string;
}