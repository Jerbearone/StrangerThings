import { useState, useEffect } from "react"
import { getUserData } from "../networking/api/api";
import { getToken } from "../networking/localStorage/localStorage";

export default function Home() {
    const [username, setUsername] = useState(null);
    const token = getToken();
    //create fetch call to get username;
    useEffect(()=> {
        
        const getData = async()=> {
            const data= await getUserData(token);
            setUsername(data.data.username);
            console.log(data.data.username);
            console.log(data)

        }
        getData();
        
    },[])

    return (
        <div className="home_page">
            <h3>Welcome to Stranger Things {username !== null && username}!</h3>

        </div>
    )
}