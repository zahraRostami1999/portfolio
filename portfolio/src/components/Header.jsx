import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
                <div>
                    <Link to="/">Logo</Link>
                </div>
                <div className="font-semibold text-base">
                    <NavBar />
                </div>
            </div>
        </>
    );
}

export default Header;