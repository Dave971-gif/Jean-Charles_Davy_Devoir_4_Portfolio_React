import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import PortfolioTitle from "../components/portfolio/PortfolioTitle";
import PortfolioLinks from "../components/portfolio/PortfolioLinks";

import "../assets/styles/servicesportfolio.css";
import "../assets/styles/pages.css";

function Portfolio() {
  return (
    <div>
      <Header />
      <Banner />
      <PortfolioTitle />
      <PortfolioLinks />
      <Footer />
    </div>
  );
}

export default Portfolio;
