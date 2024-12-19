import NavBar from "./NavBar";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="flex justify-center w-full">
                <div className="flex justify-between w-full container">
                    <div className="">
                        <Link to="/">logo</Link>
                    </div>
                    <div className="w-1/3"><NavBar /></div>
                    <div className="">Resume</div>
                </div>
            </div>
        </>
    );
}

export default Header;