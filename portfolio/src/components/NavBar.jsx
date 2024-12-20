import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <div className='flex justify-between'>
                <ul className="flex justify-between list-none text-right mx-auto">
                    <li className='px-5 cursor-pointer'><Link to="/about">About Me</Link></li>
                    <li className='px-5 cursor-pointer'><Link to="/skill">Skills</Link></li>
                    <li className='px-5 cursor-pointer'><Link to="/project">Projects</Link></li>
                    <li className='px-5 cursor-pointer'><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;