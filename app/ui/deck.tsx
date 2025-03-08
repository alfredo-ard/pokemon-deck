import Link from "next/link";
import Image from "next/image";

export default async function Deck({
    name,
    img,
    id,
    weight,
    height,
}: {
    img: string;
    name: string;
    id: number;
    weight: number;
    height: number;
}) {
    function formatNumber(num: number) {
        return num.toString().padStart(4, "0");
    }

    return (
        <Link
            href={`/pokemon/${name}`}
            className="hover:-translate-y-2 transition-all duration-300"
        >
            <div className="w-[200px] shadow drop-shadow-lg p-3 rounded-xl bg-slate-100">
                <Image
                    src={img}
                    width={144}
                    height={144}
                    alt="pokemon"
                    className="mx-auto"
                />
                <p>#{formatNumber(Number(id))}</p>
                <div className="h-1.5"></div>
                <h1 className="font-bold text-lg">{name}</h1>
                <div className="flex justify-between">
                    <p className="text-sm text-purple-700">
                        Weight: {weight}
                    </p>
                    <p className="text-sm text-amber-700">
                        Height: {height}
                    </p>
                </div>
            </div>
        </Link>
    );
}
