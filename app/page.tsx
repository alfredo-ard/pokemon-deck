import Image from "next/image";
import { Tomorrow } from "next/font/google";
import Search from "./ui/search";
import Deck from "./ui/deck";

const tomorrow = Tomorrow({
    variable: "--font-tomorrow",
    weight: ["400"],
    subsets: ["latin"],
});


export default function Home() {


    return (
        <div className={`${tomorrow.className}`}>
            <div className="w-full bg-[purple] p-5 flex items-center justify-between h-25 rounded-b-4xl z-10">
                <Image src="/logo.png" alt="logo" width={250} height={160} />
                <Search placeholder="Search Pokemon by name or ID" />
            </div>

            <Deck />
        </div>
    );
}
