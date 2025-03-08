"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {useState} from "react" 

export default function PagesButton ({sync} : {sync:number}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [pages, setPages] = useState<number>(1)
    sync && sync !== pages ? setPages(sync) : null

    function handleNext() {

        setPages(prevPages => {
            const newPages = prevPages + 1;
            
            setTimeout(() => {
                const params = new URLSearchParams(searchParams);
                params.set('page', newPages.toString()); 
                replace(`${pathname}?${params.toString()}`);
            }, 100);
    
            return newPages;
        });
        
    }
    function handlePrev() {
        setPages(prevPages => {
            const newPages = prevPages - 1;
            
            setTimeout(() => {
                const params = new URLSearchParams(searchParams);
                params.set('page', newPages.toString()); 
                replace(`${pathname}?${params.toString()}`);
            }, 100);
    
            return newPages;
        });
        
    }


    return <div className="py-10 flex justify-center items-center gap-5">
        {pages === 1 ? "" : <button className={`px-6 py-3  rounded-lg font-bold bg-purple-600 text-white hover:bg-amber-400`} onClick={handlePrev}>Prev</button> }
        <p className="text-xl">{pages}/10</p>
        <button className="px-6 py-3 bg-purple-600 rounded-lg font-bold text-white hover:bg-amber-400" onClick={handleNext}>Next</button>
    </div>
}