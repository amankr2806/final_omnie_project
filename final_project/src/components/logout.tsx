'use client'
import { logout } from "@/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';


const LogOut = () => {

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
  
    return <div>
        <LogoutIcon onClick={handleLogOut}/>
    </div>
}

export default LogOut;