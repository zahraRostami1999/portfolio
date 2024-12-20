import LinkedIn from '../assets/LinkedIn.png';
import Telegram from '../assets/telegram.jpg'

const SocialBtn = () => {
    return (
        <>
            <div className="w-1/6 h-full flex justify-between gap-6">
                <button className=" bg-white border border-black rounded">
                    <img src={LinkedIn} className='w-10 h-10' />
                </button>
                <button className="border border-black rounded bg-black">
                    <img src={Telegram} className='w-10 h-10 rounded' />
                </button>
            </div>
        </>
    );
}

export default SocialBtn;