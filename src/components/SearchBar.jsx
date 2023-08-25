import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBar({posts, filteredPosts, setFilteredPosts}) {

    //set filtered posts as displayed post cards
  



    return (<div className='posts_search_bar'>
        
      <InputGroup size="sm">
        <InputGroup.Text id="inputGroup-sizing-lg">Find Post</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event)=>{
            //filter posts
            const userInput = event.target.value;
            const tempPosts = [...posts]
            //make sure that the api has been called, and rendered before filtering data..
            if (posts != []){
                const newFilteredList = tempPosts.filter((postData)=> {
            
                    const user = postData.author.username + postData.description + postData.title + postData.price ;
                    const userLowercase = user.toLowerCase();
                    console.log("user" + user);
                    if (userLowercase.includes(userInput.toLowerCase())){
                        return postData
                    }
                    
                    
                });
                //setSearchedFilteredPosts(tempPosts);
                setFilteredPosts(newFilteredList);
                console.log(newFilteredList);
    
                console.log("Filtered" + tempPosts[0])
                
            }
            
          }}
        />
      </InputGroup>

    </div>)
}