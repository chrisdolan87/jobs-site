import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";

export default function Home() {
    return (
        <>
            <Hero />

            <div className="max-w-6xl mx-auto py-16 flex flex-col gap-8">
                <div className="text-2xl font-bold">
                    Connecting Talented Developers with Top Clients
                </div>

                <div className="flex justify-between gap-8">
                    <div className="min-h-96 min-w-80 w-1/3 p-8 text-center content-end bg-slate-400 rounded-xl">
                        Freelance Opportunities 
                    </div> 
                    <div className="min-h-96 min-w-80 w-1/3 p-8 text-center bg-slate-400 rounded-xl">
                        <p className="text-lg font-bold mb-2">Expand Your Small Business</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste modi aliquid doloremque, necessitatibus voluptatem voluptate iure ducimus asperiores eaque optio blanditiis animi corporis incidunt distinctio dolorem et fugit veritatis maiores, ipsa aut? Officiis, omnis! Ut placeat inventore, reiciendis modi ipsam tempore obcaecati temporibus consequatur dolor eos veniam assumenda expedita.</p>
                    </div> 
                    <div className="min-h-96 min-w-80 w-1/3 p-8 text-center content-end bg-slate-400 rounded-xl">
                        Find a Corporate Role
                    </div>
                </div>
            </div>

            <Newsletter />

            <WhatOurClientsSay />
        </>
    );
}
