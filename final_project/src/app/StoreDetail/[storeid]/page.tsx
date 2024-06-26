"use client";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface pageProps {
  params: any;
}
const StoreItem: React.FC<pageProps> = ({ params }) => {
  const id = params.storeid;

  const { storeList } = useSelector((state: RootState) => state.storeList);

  const storeDetail = storeList?.find(store => store.id == id) ?? null;

  const router = useRouter();
  const handleRoute = () => {
    router.push("/StoreDetail");
  };
  if (!storeDetail) {
    return <div>Loading store details...</div>;
  }

  return (
    <div className="wrapper1">
    <button className="button" onClick={handleRoute}>
      Store Detail
    </button>
    <h2>Store Detail based on Id</h2>
    <p>Partner Name: {storeDetail.partner}</p>
    <p>Store Location: {storeDetail.name}</p>
    <p>Store Admin: {storeDetail.contactPerson}</p>
    <p>Agents: {storeDetail.agentCount}</p>
    <p>Status: {storeDetail.statusId === 1 ? "Active" : "Inactive"}</p>
  </div>
  );
};

export default StoreItem;
