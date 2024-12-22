import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SocialBtn = () => {
    return (
        <>
            <div className="w-1/5 h-full flex justify-between gap-6 xl:text-3xl lg:xl:text-3xl md:text-2xl sm:text-xl text-xl">
                <button className="rounded">
                    <Link to="https://github.com/zahraRostami1999">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </button>
                <button className="rounded">
                    <Link to="https://telegram.me/zahra_rtm">
                        <FontAwesomeIcon icon={faTelegram} />
                    </Link>
                </button>
                <button className="rounded">
                    <Link to="https://www.linkedin.com/in/zahra-rostami-4049b2327">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </button>
            </div>
        </>
    );
}

export default SocialBtn;