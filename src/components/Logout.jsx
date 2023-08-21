import { deleteToken } from "../networking/localStorage/localStorage"
import Login from "./Login";
import { useNavigate } from "react-router";


export default function Logout() {
    const navigate = useNavigate();
    deleteToken();
    return (
        <div>
            {navigate("/login")}
            
        </div>
    )
}