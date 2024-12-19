import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <div className='flex w-11/12 justify-between'>
                <Link to="/about">About Me</Link>
                <Link to="/skill">Skills</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </>
    );
}

export default NavBar;