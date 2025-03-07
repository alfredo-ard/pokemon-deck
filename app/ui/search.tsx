"use client";

import { Tomorrow } from "next/font/google";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const tomorrow = Tomorrow({
    variable: "--font-tomorrow",
    weight: ["400"],
    subsets: ["latin"],
});

export default function Search({ placeholder }: { placeholder: string }) {
    const [input, setInput] = useState("")
    function handleSearch(term: string) {
        setInput(term)
        console.log(term)
    }
    function handleClick() {
        // onEnter(input)
        setInput("")
    }

    return (
        <div
            className={`flex  rounded-full items-center bg-white p-2 gap-3 ${tomorrow.className} focus-within:ring-2 focus-within:ring-amber-400 rounded-full`}
        >
            <Image src="/ball.png" alt="logo" width={40} height={40} />
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="outline-none w-[270px]"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                
            />
            <IoSearchSharp className="w-[30px] h-[30px] " onClick={handleClick}/>
        </div>
    );
}
