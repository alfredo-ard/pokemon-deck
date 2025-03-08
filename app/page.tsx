import Image from "next/image";
import Search from "./ui/search";
import Deck from "./ui/deck";
import getData from "./api/fetch";
import PagesButton from "./ui/pageButton";

interface post {
    next: string | null;
    previous: null | string;
    results: [];
}

export default async function Home(props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    console.log(query)

    let posts: post | any = await getData(
        query? `https://pokeapi.co/api/v2/pokemon/${query}` : `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${100 * (currentPage - 1)}.`
    );
    console.log(100 * currentPage)
    console.log(currentPage)

    return (    
        <div className="">
            <div className="w-full bg-purple-600 p-5 flex items-center justify-between h-25 rounded-b-4xl z-10">
                <Image src="/logo.png" alt="logo" width={250} height={160} />
                <Search placeholder="Search Pokemon by name or ID" />
            </div>

           {query ? <div className="mt-10"></div> : <PagesButton/> } 

            <div className="p-5 flex items-center justify-evenly flex-wrap gap-10 w-[90%] mx-auto">
                { query ? posts != null ?  <Deck name={posts.name} img={posts.sprites.other.home.front_default} id={Number(posts.id)} weight={Number(posts.weight)} height={Number(posts.height)}/> : <div>not found</div>
                 : posts.results.map(
                    async (data: { name: string; url: string }, index: any) => {
                        const post = await getData(
                            decodeURIComponent(data.url)
                        );
                        return <Deck name={data.name} img={post.sprites.other.home.front_default} id={Number(post.id)} weight={Number(post.weight)} height={Number(post.height)}/>;
                    }
                )}
            </div>

            {query ? "" : <PagesButton/> } 

        </div>
    );
}
