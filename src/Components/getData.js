import { useEffect, useState } from 'react';
import '../App.css'
const GetData=()=>{
    const [post,setpost]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            return response.json();
        }).then((data)=>{
            setpost(data);
        })
    },[]);
    return(
        <>
            <h1>Post Data</h1>
            {
                post.map((res)=>{
                    return (
                    <div key={res.id}>
                        <h3>{res.title}</h3>
                        <p>{res.body}</p>
                    </div>
                    )
                })
            }
        </>
        
    )
}
export default GetData;