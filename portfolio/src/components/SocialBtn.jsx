import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialBtn = () => {
    return (
        <>
            <div className="w-1/6 h-full flex justify-between gap-6">
                <button className=" bg-white rounded">
                    {/* <FontAwesomeIcon icon={faGithub} /> */}
                </button>
                <button className="rounded bg-black">
                    {/* <FontAwesomeIcon icon={faGithub} /> */}
                </button>
                <button className="rounded bg-black">
                    {/* <FontAwesomeIcon icon={faGithub} /> */}
                </button>
            </div>
        </>
    );
}

export default SocialBtn;