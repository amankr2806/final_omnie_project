"use client";

import { logout } from "@/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/");
  }

  const handleLogOut = () => {
    dispatch(logout());
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
