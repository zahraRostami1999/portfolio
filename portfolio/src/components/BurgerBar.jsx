import { Link } from 'react-router-dom';


const BurgerBar = () => {
    return (
        <>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skill">Skills</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
        </>
    );
}

export default BurgerBar;