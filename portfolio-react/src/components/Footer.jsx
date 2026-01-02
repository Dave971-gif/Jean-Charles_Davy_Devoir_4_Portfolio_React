import {Link} from 'react-router-dom';

function Footer() {
  return (
    <section className="footer d-flex container-fluid justify-content-around align-items-start bg-dark text-white py-5">
      <article className="article1 d-flex flex-column">
        <h3>John Doe</h3>
        <a href="https://maps.app.goo.gl/ZE4baGW2oziqhfAD9">60 rue Laure Diebold <br />
        69009 Lyon, France</a>
        <a href="tel:10 20 30 40 50">10 20 30 40 50</a>
        <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
        <div className="d-flex gap-3 fs-4 mt-3">
          <i class="bi bi-github" href="icons/github.svg"></i>
          <i class="bi bi-twitter" href="icons/twitter.svg"></i>
          <i class="bi bi-linkedin" href="icons/linkedin.svg"></i>
        </div>
      </article>
      <article>
        <h3>Liens utiles</h3>
        <ul className="list-unstyled">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Me contacter</Link>
            </li>
            <li>
              <Link to="/legal">Mention légales</Link>
            </li>
          </ul>
      </article>
      <article className="d-flex flex-column">
        <h3>Mes dernières réalisations</h3>
        <a href="/" target="_blank" rel="noopener noreferrer">Fresh Food</a>
        <a href="/" target="_blank" rel="noopener noreferrer">Restaurant Akira</a>
        <a href="/" target="_blank" rel="noopener noreferrer">Espace bien-être</a>
        <a href="/" target="_blank" rel="noopener noreferrer">SEO</a>
        <a href="/" target="_blank" rel="noopener noreferrer">Création d'une API</a>
        <a href="/" target="_blank" rel="noopener noreferrer">Maquette d'un site</a>
      </article>
    </section>
  );
}

export default Footer;
