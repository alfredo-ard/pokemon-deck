
import getData from "../api/fetch";
import Link from "next/link";
import Image from "next/image";

interface post {
    next: string | null;
    previous: null | string;
    results: [];
    
}

export default async function Deck() {
    function formatNumber(num: number) {
        return num.toString().padStart(4, "0");
    }

    const posts: post = await getData(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0."
    );


    return (
        <div className="p-5 flex items-center justify-evenly flex-wrap gap-10 w-[90%] mx-auto mt-10">
            {posts.results.map(
                async (data: { name: string; url: string }, index:any) => {
                    const post = await getData(decodeURIComponent(data.url));

                    return (
                        <Link key={index} href={`/pokemon/${data.name}`} className="hover:-translate-y-2 transition-all duration-300">
                        <div className="w-[200px] shadow drop-shadow-lg p-3 rounded-xl bg-slate-100">
                            <Image
                                src={post.sprites.other.home.front_default}
                                width={144}
                                height={144}
                                alt="pokemon"
                                className="mx-auto"
                            />
                            <p>#{formatNumber(Number(post.id))}</p>
                            <div className="h-1.5"></div>
                            <h1 className="font-bold text-lg">{data.name}</h1>
                            <div className="flex justify-between">
                                <p className="text-sm text-purple-700">
                                    Weight: {post.weight}
                                </p>
                                <p className="text-sm text-amber-700">
                                    Height: {post.height}{" "}
                                </p>
                            </div>
                        </div>
                        </Link>
                    );
                }
            )}
        </div>
    );
}
