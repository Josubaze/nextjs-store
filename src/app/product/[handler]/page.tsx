"use client"

import { useParams, useSearchParams } from "next/navigation";

export default function ProductPage(){
    const searchParams = useSearchParams(); 
    const id = searchParams.get('id');
    console.log(`searchparams: ${searchParams}`);
    return(
        <div>
            <h1>Product Page</h1>
        </div>
    )
}