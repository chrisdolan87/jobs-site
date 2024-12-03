import AppliedForTable from "@/components/AppliedForTable";
import UploadCV from "@/components/UploadCV";
import UserInfo from "@/components/UserInfo";


export default async function Dashboard() {

  return (
    <>
      <div className="max-w-7xl mx-auto my-8 py-8 flex flex-col justify-center items-center gap-8">
        <UserInfo />
        <UploadCV />
        <AppliedForTable />
      </div>
    </>
  );
}
