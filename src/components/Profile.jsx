import { getUserData } from "../networking/api/api";
import { getToken } from "../networking/localStorage/localStorage"
import {useState, useEffect, useRef} from 'react'
import SingleProfileCard from "./SingleProfileCard";
import MessageCard from "./MessageCard";

const token = getToken();
console.log(token);

export default function Profile({toast, setToast, setToastMessage}) {
    const [user, setUser] = useState("");
    const [userPosts, setUserPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [clickEffectToggle, setClickEffectToggle] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            const data = await getUserData(token);
            console.log("Data: " + data);
            setUserPosts(data.data.posts);
            setUser(data.data.username);
            setMessages(data.data.messages);

        }
        getData();
    },[clickEffectToggle])

    
    return (
        //implement all users current posts to view / edit / delete
        <div>

            <h3>{`${user}'s Messages`}</h3>
            {messages.map((message)=> {
                return <MessageCard key={message._id} message={message}></MessageCard>
            })}

            <h3>{`${user}'s Posts`}</h3>
            {userPosts.map((post)=>{
                
                return <SingleProfileCard key={post.id} post={post} token={token} setToast={setToast} toast={toast}
                setClickEffectToggle={setClickEffectToggle} clickEffectToggle={clickEffectToggle} setToastMessage={setToastMessage}></SingleProfileCard>
            })}
        </div>
    )
}