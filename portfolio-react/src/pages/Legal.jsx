import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import Footer from "../components/Footer";

import LegalTitle from "../components/Legal/LegalTitle";
import LegalInfo from "../components/Legal/LegalTitle";
import "../assets/styles/pages.css";

function Legal() {
  return (
    <div>
      <Header />
      <LegalTitle />
      <Footer />
    </div>
  );
}

export default Legal;

<Helmet>
  <meta name="robots" content="noindex" />
</Helmet>