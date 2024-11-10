import { useState,useEffect  } from 'react';
import '../App.css'
const Navbar=()=>{
    const [dark,setdark]=useState(false);
    const darkMode=(event)=>{
        const isChecked = event.target.checked;
        isChecked?setdark(true):setdark(false);
    }
    useEffect(() => {
        document.body.style.backgroundColor = dark ? 'black' : 'white';
    }, [dark]);

    return(
        <nav>
            <div className="logo">
                <img src="/Images/brand_logo.png" alt="brand logo"/>
            </div>
            <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            <div style={{display:'flex',gap:'50px'}}>
            <button className='btn'>Login</button>
            <input type="checkbox" onClick={darkMode}/>
            </div>

        </nav>
    )
}
export default Navbar;