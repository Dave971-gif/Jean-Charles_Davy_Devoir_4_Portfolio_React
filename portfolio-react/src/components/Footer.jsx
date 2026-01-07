import {Link} from 'react-router-dom';

function Footer() {
  return (
    <section className="footer d-flex container-fluid flex-column flex-lg-row justify-content-around align-items-start bg-dark text-white p-5 gap-5">
      <article className="article1 d-flex flex-column">
        <h3 className="foot-subtitle">John Doe</h3>
        <a href="https://maps.app.goo.gl/71CemaFywf3d8itc9" target="_blank">60 rue Laure Diebold <br />
        69009 Lyon, France</a>
        <a href="tel:10 20 30 40 50">10 20 30 40 50</a>
        <a href="mailto:johndoe@gmail.com">john.doe@gmail.com</a>
        <div className="d-flex gap-3 fs-4 mt-3">
          <a href="https://github.com" target="_blank"><i className="bi bi-github bi-links"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="bi bi-twitter bi-links"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="bi bi-linkedin bi-links"></i></a>
        </div>
      </article>
      <article>
        <h3 className="foot-subtitle">Liens utiles</h3>
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
        <h3 className="foot-subtitle">Mes dernières réalisations</h3>
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
