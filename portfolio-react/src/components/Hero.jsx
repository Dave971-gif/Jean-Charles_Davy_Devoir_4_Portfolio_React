import Herobg from 'src/assets/images/hero-bg.jpg';

function Hero() {
  return (
    <>
        <div>
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur Web full stack</h2>
        </div>
        <img src={Herobg} alt="Développeur Web full stack" />
    </>
  );
}

export default Hero;
