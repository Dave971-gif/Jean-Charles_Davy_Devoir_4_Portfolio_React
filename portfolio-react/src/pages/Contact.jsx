import Header from "../components/Header";
import Footer from "../components/Footer";

import ContactTitle from "../components/contact/ContactTitle";
import ContactObject from "../components/contact/ContactObject";

import "../assets/styles/Contact.css";
import "../assets/styles/pages.css";

function Contact() {
  return (
    <div>
      <Header />
      <ContactTitle />
      <ContactObject />
      <Footer />
    </div>
  );
}

export default Contact;
