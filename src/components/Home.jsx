import { useState, useEffect } from "react"
import { getUserData } from "../networking/api/api";
import { getToken } from "../networking/localStorage/localStorage";
import { useNavigate } from "react-router";

export default function Home() {
    const [username, setUsername] = useState(null);
    const token = getToken();
    const navigate = useNavigate();
    //create fetch call to get username;
    useEffect(()=> {
        
        const getData = async()=> {
            const data= await getUserData(token);
            setUsername(data.data.username);
            console.log(data.data.username);
            console.log(data)
            if (token !== null) {
                setTimeout(() => {
                    navigate("../posts",{replace:true})
                    navigate(0)
                
                }, 2000)
            }

        }
        getData();
        
    },[])

    return (
        <div className="home_page">
            <h3>Welcome to Stranger Things {username !== null && username}!</h3>

        </div>
    )
}