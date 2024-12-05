
import EditUserForm from "@/components/EditUserForm";

const getUserById = async(id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${ id }`, {cache: "no-store"});

        if (!res.ok) {
            throw new Error("Failed to fetch user");
        }
        return res.json();

    } catch (error) {
        console.log(error);
    }
};

export default async function EditUser({ params })
{
    const {id} = await params;
    const { user } = await getUserById(id);
    const { name, email } = user;
    return <EditUserForm name={name} email={email} />;
}