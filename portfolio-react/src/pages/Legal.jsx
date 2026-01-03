import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Legal() {
  return (
    <div>
      <Header />
      <div>
        <h1>Mentions légales</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Legal;

<Helmet>
  <meta name="robots" content="noindex" />
</Helmet>