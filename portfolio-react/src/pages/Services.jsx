import Header from "../components/Header";
import Footer from "../components/Footer";
import Offres from "../components/services/Offres";
import OffreTitle from "../components/services/OffreTitle";
import Banner from "../components/services/Banner";
import "../assets/styles/services.css";

function Services() {
  return (
    <>
      <div className='services-page'>
        <Header />
        <Banner />
        <OffreTitle />
        <Offres />
        <Footer />
      </div>
    </>
    );
}

export default Services;
