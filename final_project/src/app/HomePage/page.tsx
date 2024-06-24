"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleLogOut = () => {
    // if (localStorage.getItem("token")) {
    //   localStorage.removeItem("token");
    // }
    localStorage.removeItem("token");

    router.push("/");
  };

  return (
    <>
      <p>Heloo</p>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Home;
