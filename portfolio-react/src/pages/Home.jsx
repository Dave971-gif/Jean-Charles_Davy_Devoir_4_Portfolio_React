import Header from '../components/Header';
import Hero from '../components/home/Hero';
import AboutSkills from '../components/home/AboutSkills';
import Modal from '../components/home/Modal';
import Footer from '../components/Footer';
import "../assets/styles/home.css";
import "../assets/styles/headerfooter.css";


function Home() {
  return (
    <>
      <div className='home-page'>
        <Header />
        <Hero />
        <AboutSkills />
        <Modal />
        <Footer />
      </div>
    </>
  );
}

export default Home;
