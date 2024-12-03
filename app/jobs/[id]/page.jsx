import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";

const getJobById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch job");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Jobs({ params }) {
  const { id } = params;
  const { job } = await getJobById(id);

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto my-8">
        <p className="text-center text-red-500">Job not found. Please try again later.</p>
      </div>
    );
  }
  
  const { title, description } = job;

  return (
    <>
      <Searchbar />
      <Hero bgImage="/3227303_43540.jpg">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-xl text-white">Company Name</p>
        </div>
      </Hero>

      <div className="max-w-7xl mx-auto my-8 flex flex-col gap-8">
        <div className="flex justify-around">
          <div className="">Full Time</div>
          <div className="">Location</div>
          <div className="">Salary</div>
          <div className="">Date Posted</div>
        </div>

        <div className="">
          <h2 className="text-xl font-bold mb-2">The Company</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            dolore amet voluptate eum hic enim maxime, veniam quam voluptatum,
            provident commodi ut quo earum unde molestias aliquam perspiciatis
            delectus, deleniti omnis suscipit impedit atque sunt? Nemo eos
            asperiores, modi ducimus provident sequi doloremque praesentium eum
            magni repudiandae mollitia totam, cumque, deleniti reprehenderit
            alias voluptatum hic corporis rerum temporibus harum laudantium. Sit
            in unde laudantium debitis facilis blanditiis quibusdam magni, sequi
            doloremque nostrum rerum nam esse corrupti eveniet nemo voluptate
            cum architecto. Quo rerum modi ipsam commodi a, sed voluptatum
            aperiam eligendi ut possimus quaerat, distinctio perspiciatis quia
            voluptas, nesciunt soluta?
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-bold mb-2">The Role</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus et aperiam voluptate totam impedit distinctio minus
            dolores eos quae assumenda, consequuntur cumque veritatis itaque
            natus sequi. At repellat earum voluptates similique vitae voluptas
            architecto eligendi maiores, eius omnis ad voluptatem modi maxime
            laborum officia eum et voluptatum magni sunt. Quos asperiores
            repellendus voluptatibus facilis eveniet ipsa amet tenetur fugiat
            natus repudiandae, at repellat. Sunt a eius repellat cupiditate
            aspernatur repellendus natus modi aliquid sed nam, sit quae nulla
            molestias iste officia hic mollitia quas voluptatum laboriosam, vel,
            officiis eligendi? Temporibus maxime eaque explicabo mollitia omnis
            sint iste id sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quos dolorum porro iste. Similique vel vero deserunt laborum
            molestiae rem nulla laudantium architecto nemo. Doloribus mollitia
            eligendi deserunt, nemo minima laboriosam. Voluptate temporibus sint
            dolorum atque incidunt ducimus reiciendis. Molestiae alias
            distinctio nam similique maxime eum hic vero! Consectetur explicabo,
            nemo nobis corrupti sint laboriosam accusantium dolorem animi cumque
            alias ullam minus culpa iusto eligendi laborum! Officiis nostrum
            dolor, cum quia, perferendis reiciendis quaerat reprehenderit,
            sapiente sunt accusantium temporibus deserunt corporis voluptatibus
            laudantium odio. Asperiores, quibusdam. Beatae repudiandae quidem
            sequi reprehenderit! Possimus facere perferendis ipsum doloremque
            aliquam velit cum totam.
          </p>
        </div>

        <p className="text-red-500">Closing Date: xx/xx/xx</p>

        <div className="flex justify-end gap-6">
          <button className="px-6 py-2 rounded-2xl hover:bg-yellow-400 border border-yellow-400 shadow">
            Save
          </button>
          <button className="px-6 py-2 rounded-2xl bg-yellow-300 hover:bg-yellow-400 border border-yellow-400 shadow">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
