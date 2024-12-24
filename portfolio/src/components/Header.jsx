import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex fixed justify-between items-center text-black py-3 px-4 md:px-20 lg:px-8 w-full xl:w-1/6 lg:w-1/3 md:w-5/6 drop-shadow-md">
                <div className="lg:text-3xl md:text-2xl sm:text-2xl text-xl">
                    <Link to="/">
                        <FontAwesomeIcon className='text-neutral-300' icon={faCloud} />
                        <FontAwesomeIcon className='text-yellow-300' icon={faMoon} />
                        <FontAwesomeIcon className='text-neutral-400' icon={faCloud} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;