import '../App.css'
const Navbar=()=>{
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
            <button className='btn'>Login</button>
        </nav>
    )
}
export default Navbar;