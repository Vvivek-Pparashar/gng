import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const [navBg, setNavBg] = useState(false);
    const changeNavBg = () => {
        window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
    }

    window.addEventListener('scroll', changeNavBg);
    return (
        <nav className={`${navBg ? "nav-active" : ""}`}>
            {/* <div className="logo"></div> */}
            <h1>NavBar</h1>
            <ul >
                <Link to="/" className='Link'><p>Home</p></Link>
                <Link to="/AboutUs" className='Link'><p>About Us</p></Link>
                <Link to="/ContactUs" className='Link'><p>Contact Us</p></Link>
                <Link to="/OurProjects" className='Link'><p>Our Projects</p></Link>
            </ul>
        </nav>
    )
}

export default Navbar