import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import Offres from "../components/services/Offres";
import OffreTitle from "../components/services/OffreTitle";
import "../assets/styles/servicesportfolio.css";
import "../assets/styles/pages.css";


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
