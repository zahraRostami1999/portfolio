import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCloud, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex fixed justify-between items-center text-black py-3 px-4 md:px-20 lg:px-8 w-full drop-shadow-md">
                <div className="lg:text-3xl md:text-2xl sm:text-2xl text-xl w-full flex justify-between items-center">
                    <div>
                        <FontAwesomeIcon className='text-neutral-300 text-2xl' icon={faCloud} />
                        <FontAwesomeIcon className='text-yellow-300' icon={faMoon} />
                        <FontAwesomeIcon className='text-neutral-400 text-lg' icon={faCloud} />
                    </div>
                    <Link to="/">
                        <div>
                            <FontAwesomeIcon className='text-red-300 hover:text-red-400 text-2xl' icon={faHome} />
                        </div>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Header;