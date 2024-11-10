import { useEffect } from 'react';
import '../App.css'
const HeroSecton=()=>{
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log("response is:",data);
        })
    },[]);
    return(
        <main className='hero-section'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='hero-buttons'>
                    <button className='btn'>Shop Now</button>
                    <button className='btn' style={{ background: 'white',border:'1px solid gray',color:'gray' }}>Category</button>
                </div>
                <div className="shooping">
                    <p>Also Available On</p>
                    <div className="brand-icon">
                            <img src='/Images/flipkart.png' alt='flipkart' />
                            <img src='/Images/amazon.png' alt='amazon' />

                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/Images/shoe_image.png" alt="brand logo"/>
            </div>
        </main>
    )
}
export default HeroSecton;