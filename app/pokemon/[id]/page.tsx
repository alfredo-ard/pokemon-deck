import { Tomorrow } from "next/font/google";
import Image from "next/image";
import getData from "../../api/fetch";

const tomorrow = Tomorrow({
    variable: "--font-tomorrow",
    weight: ["400"],
    subsets: ["latin"],
});

export default async function Detail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    
    const { id } = await params;
    console.log(id)

        const post: any = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return (
        <div
            className={`${tomorrow.className} flex h-[100vh] items-center justify-center bg-slate-400 `}
        >
            <div className=" p-15 bg-slate-200 rounded-xl shadow-lg text-2xl text-purple-800">
                <h1 className="font-extrabold text-4xl text-center text-black">
                    {post.name}{" "}
                    <span className="text-2xl relative bottom-2">#0003</span>
                </h1>
                <div className="flex mt-5 gap-10">
                    <Image
                        src={post.sprites.other.home.front_default}
                        width={270}
                        height={270}
                        alt="picture"
                    />
                    <div className="flex bg-white rounded-lg p-10 gap-10">
                        <div className="flex flex-col justify-between">
                            <div className=" ">
                                <p>Weight:</p>
                                <p className="text-amber-600">{post.weight}</p>
                            </div>
                            <div className=" ">
                                <p>Height:</p>
                                <p className="text-amber-600">{post.height}</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="">Ability:</h2>
                            <ol className="text-amber-600">
                                {post.abilities.map((data : any, index : number) => {
                                    return <li key={index}>{data.ability.name}</li>
                                })}

                            </ol>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2>Type</h2>
                    <ol className="flex items-center gap-5 mt-3">
                    {post.types.map((data : any, index : number) => {
                                    return  <li key={index} className="bg-orange-400 p-10 py-2 rounded-full text-slate-900 text-base">
                                    {data.type.name}
                                </li>
                                })}
                    </ol>
                </div>

                <div className="w-full flex">
                    <button className="mt-8 text-base text-amber-400 bg-purple-800 px-5 py-3 rounded-full mx-auto">
                        Visit {post.name}'s wiki!
                    </button>
                </div>
            </div>
        </div>
    );
}
