import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="flex w-11/12 justify-between">
                    <div className="w-2/3 flex justify-between">
                        <div className="w-1/12 ">
                            <Link to="/">logo</Link>
                        </div>
                        <div className="w-1/2">
                            <NavBar />
                        </div>
                    </div>

                    <div className="w-1/12 flex justify-end xl:hidden" onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faBars} /></div>
                    <div>
                        <div className={`w-full ${isMenuOpen? "block" : "hidden"} flex justify-center items-center py-5`}>
                            <div className="w-1/3">
                                <Link to="/about">About Me</Link>
                            </div>
                            <div className="w-1/3">
                                <Link to="/skill">Skills</Link>
                            </div>
                            <div className="w-1/3">
                                <Link to="/project">Projects</Link>
                            </div>
                            <div className="w-1/3">
                                <Link to="/contact">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;