import Hero from "@/components/Hero";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";

export default function aboutUs() {
  return (
    <>
      <Hero bgImage="/3227303_43540.jpg">
        <h2 className="text-5xl font-bold text-white">About Us</h2>
      </Hero>

      <div className="max-w-6xl mx-auto py-16 flex flex-col gap-8">
        <div className="text-2xl font-bold">
          Connecting Talented Developers with Top Clients
        </div>

        <div className="flex justify-between gap-8">
          <div className="min-h-96 min-w-80 w-1/3 p-8 text-center content-end bg-[url('/computer-sitting-office-by-window.jpg')] bg-blend-overlay bg-center bg-cover rounded-2xl text-2xl text-white font-bold" style={{ backgroundColor: "#00242Aaa" }}>
            Freelance Opportunities
          </div>
          <div className="min-h-96 min-w-80 w-1/3 p-8 text-center bg-[url('/mechanic-using-laptop.jpg')] bg-blend-overlay bg-center bg-cover rounded-2xl" style={{ backgroundColor: "#00242Aaa" }}>
            <p className="text-2xl text-white font-bold mb-2">
              Expand Your Small Business
            </p>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              iste modi aliquid doloremque, necessitatibus voluptatem voluptate
              iure ducimus asperiores eaque optio blanditiis animi corporis
              incidunt distinctio dolorem et fugit veritatis maiores, ipsa aut?
              Officiis, omnis!
            </p>
          </div>
          <div className="min-h-96 min-w-80 w-1/3 p-8 text-center content-end bg-[url('/business-people-office.jpg')] bg-blend-overlay bg-center bg-cover rounded-2xl  text-2xl text-white font-bold font" style={{ backgroundColor: "#00242Aaa" }}>
            Find a Corporate Role
          </div>
        </div>

        <WhatOurClientsSay />
      </div>
    </>
  );
}
