
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const[posts,setPosts]=useState([]);
  const[loading,setLoading]=useState(false);
  const [currentPage,setCurrentpage]=useState(1);
  const [postsperpage,setPostsperpage]=useState();


  useEffect(()=>{
    const fetchPosts= async()=>{
    setLoading(true);
    const res=await axios.post(' http://192.168.1.10:80/api/products', {
    "skip": 0,
    "limit": 20,
    "category": "",
    "size":"",
    "selection":"",
    "vintage":"",
    "min_score":"",
    "max_score":"",
    "min_price":"",
    "max_price":""
      });
    setPosts(res.data.result)
    setLoading(false);
    }
    fetchPosts();
  },
[]);
  console.log(posts)



 const loadmore=()=>{
   
 }

  return (
    <div className="App">
{posts.map((e) => <div>{e.name}</div>)}

<button onClick={loadmore}>load more</button>

    </div>
  );
}

export default App;
