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
  const { title, description } = job;

  return (
    <>
      <Searchbar />
      <Hero>
        <h2 className="text-5xl font-bold text-white">{title}</h2>
      </Hero>

      <div className="max-w-7xl mx-auto my-8 flex flex-col gap-8">
        <div className="flex justify-around">
          <div className="">10000+ Employees</div>
          <div className="">Location</div>
          <div className="">LinkedIn</div>
          <div className="">CEO: John Doe</div>
        </div>

        <div className="">
          <h2 className="text-xl font-bold mb-2">Our Story</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            dolore amet voluptate eum hic enim maxime, veniam quam voluptatum,
            provident commodi ut quo earum unde molestias aliquam perspiciatis
            delectus, deleniti omnis suscipit impedit atque sunt? Nemo eos
            asperiores, modi ducimus provident sequi doloremque praesentium eum
            magni repudiandae mollitia totam, cumque, deleniti reprehenderit
            alias voluptatum hic corporis rerum temporibus harum laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quam vitae numquam eos quos. Explicabo ullam exercitationem, totam,
            suscipit porro velit facere ab sit iste, accusamus perspiciatis sed!
            Consectetur, maiores. Et iusto, amet temporibus consequatur
            voluptatibus ad, numquam dolorum ex explicabo perspiciatis labore
            laudantium adipisci hic delectus dolor, quae aperiam?
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-bold mb-2">What We Do</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            cumque, rerum facere eius quibusdam nesciunt, magnam voluptates sunt
            ratione praesentium iste accusamus, aliquam repellendus odio quos
            omnis eveniet beatae minima! Enim, iste earum corporis libero
            obcaecati, ipsa asperiores quasi illo assumenda quidem labore
            aliquid eligendi a? Voluptas in quae maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reprehenderit optio et doloribus ipsa, voluptatum, hic totam,
            deserunt consequatur fuga dolorum magni quibusdam. Ut id quos quae
            cum nihil labore? Tempore nisi culpa ipsam? Praesentium rerum non
            dolorum distinctio, beatae quaerat eveniet, neque rem perferendis
            ratione nobis voluptates quam aliquid.
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odit
            nostrum reprehenderit, labore mollitia rem repellat atque odio quae
            voluptas saepe asperiores ducimus tempore a, veniam fugiat. Modi est
            ipsa, a sapiente nulla omnis, dicta, debitis autem molestiae
            voluptatibus enim?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae vero exercitationem minus maxime, perspiciatis quod
            voluptas laudantium minima enim hic.
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
