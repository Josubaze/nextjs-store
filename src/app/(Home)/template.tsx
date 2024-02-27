"use client"

import { Descrition } from "app/components/Home/Description";
import { Hero } from "app/components/Home/Hero";
import { useEffect } from "react";

export default function HomeLayout( {children} : {children: React.ReactNode}) {
    useEffect(() => {
        console.log('enviando metricas...');
    }, [])
    return (
        <div>
            <Hero/>
            <Descrition/>
            {children}
        </div>

    );
}