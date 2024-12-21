import banner from '../assets/aboutBanner.jpg'
const AboutMe = () => {
    return (
        <>
            <div className='flex justify-center px-20 py-10 min-h-screen'>
                <div className='w-1/4 px-10'>
                    <img src={banner}/>
                </div>
                <div className='w-1/2 px-10'>
                    <h1>About <span className="font-bold">Me</span></h1>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;