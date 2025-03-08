"use client";
import { Tomorrow } from "next/font/google";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from "next/navigation";


const tomorrow = Tomorrow({
    variable: "--font-tomorrow",
    weight: ["400"],
    subsets: ["latin"],
});

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`);
        }, 300);

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
                defaultValue={searchParams.get('query')?.toString()}
            />
            <IoSearchSharp className="w-[30px] h-[30px]" />
        </div>
    );
}
