"use client"

import { Descrition } from "src/components/Home/Description";
import { Hero } from "src/components/Home/Hero";
import { ChatLink } from "src/components/Store/ChatLink";

export default function HomeLayout( {children} : {children: React.ReactNode}) {
    return (
        <div>
            <Hero/>
            <Descrition/>
            {children}
            <ChatLink/>
        </div>

    );
}