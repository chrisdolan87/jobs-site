import EditTopicForm from "@/components/EditTopicForm";

const getJobById = async(id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${ id }`, {cache: "no-store"});

        if (!res.ok) {
            throw new Error("Failed to fetch job");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function EditTopic({ params })
{
    const { id } = params;
    const { job } = await getJobById(id);
    const { title, description } = job;

    return <EditTopicForm id={id} title={title} description={description} />;
}