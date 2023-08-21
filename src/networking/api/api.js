const BASEURL = 'https://strangers-things.herokuapp.com/api';
const COHORT = "2302-acc-pt-web-pt-e";
const URL = `${BASEURL}/${COHORT}`;


//get
const getAllPosts = async ()=> {
    const GETPOSTS = `${URL}/posts`;
    const response = await fetch(GETPOSTS);
    const data = await response.json();
    console.log(data);
    return data
}

//post
async function sendPost(token, post) {
    try{
        if (token !== null && post != {}) {
            //if data is here, and token is here, submit the post
            const response = await fetch(`${URL}/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(post)
            });
            const data = await response.json();
            console.log(data);
            
        }
    }catch(error){
        console.log(error);
    }
}



//get all user data (messages and posts);
const getUserData = async (token)=> {
    try {
        const response = await fetch(`${URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data);
        return data; 

    }catch(error){console.log(error)}
}



//put

const updatePost = async ( post_id, token, title, description, price) => {
    try {
      // You will need to insert a variable into the fetch template literal 
      // in order to make the POST_ID dynamic. 
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
      const response = await fetch(`${URL}/posts/${post_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,

          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }



//delete

const deletePost = async (postId, token) => {
    try {
      const response = await fetch(`${URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

//message
const sendMessage = async (id, token, message) => {
    try{
        const response = await fetch (`${URL}/posts/${id}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                {message: {content: message}}
            )
        });
        const result = await response.json();
        console.log(result);



    }catch(error){
        console.log(error)
    }
}

//reply

export {getAllPosts, getUserData, sendPost, sendMessage, deletePost, updatePost}