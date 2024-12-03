import { Children } from "react";
import Searchbar from "./Searchbar";

export default function Hero({ children, bgImage }) {
    return (
        <div className="w-full min-h-96 bg-slate-700 bg-blend-overlay flex justify-center items-center gap-8" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            {children}

        </div>
    )
}