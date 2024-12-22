import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    return (
        <>
            <div className="flex fixed justify-between items-center text-black py-3 px-8 md:px-20 lg:px-8 w-full xl:w-1/6 lg:w-1/3 md:w-5/6 drop-shadow-md">
                <div className="text-2xl text-yellow-300">
                    <Link to="/">
                    <FontAwesomeIcon icon={faMoon}/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;