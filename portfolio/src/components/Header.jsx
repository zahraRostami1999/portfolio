import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import BurgerBar from "./BurgerBar";
import { Link } from "react-router-dom";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    return (
        <>
            <div className="flex justify-between items-center text-black py-3 px-8 md:px-20 lg:px-8 w-full xl:w-2/3 lg:w-5/6 md:w-5/6 drop-shadow-md">
                <div>
                    <Link to="/">Logo</Link>
                </div>
                <div className="hidden xl:flex lg:flex md:flex items-center gap-12 font-semibold text-base">
                    <NavBar />
                </div>
                <div onClick={toggleMenu} className="xl:hidden lg:hidden md:hidden block text-xl">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`xl:hidden top-12 left-0 w-full absolute flex flex-col items-center gap-7 text-base font-semibold transform transition-transform ${isMenuOpen ? "block" : "hidden"} md:hidden lg:hidden xl:hidden list-none bg-white`}>
                    <BurgerBar />
                </div>

            </div>
        </>
    );
}

export default Header;