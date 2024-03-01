import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <h1>navbar</h1>
            <ul>
                <li><Link to="/" className='Link'>Home</Link>  </li>
                <li><Link to="/AboutUs" className='Link'>About Us</Link></li>
                <li><Link to="/ContactUs" className='Link'>Contact Us</Link></li>
                <li><Link to="/OurProjects" className='Link'>Our Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar