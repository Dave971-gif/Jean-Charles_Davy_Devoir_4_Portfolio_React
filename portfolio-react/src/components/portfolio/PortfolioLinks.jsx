function PortfolioLinks() {
    return (
        <section className="d-flex flex-wrap p-5 gap-3 text-center justify-content-center align-items-center">
            <div className="portfolio-box mb-3">
                <div className="img-box">
                    <img src="images/portfolio/fresh-food.jpg" alt="Fresh Food" className="img-fluid mb-3" />
                </div>
                <div className="portfolio-text px-3">
                    <h2>Fresh Food</h2>
                    <p>Site de vente de produits frais en ligne</p>
                </div>

                <button type="button" className="portfolio-btn btn btn-primary mb-3">
                    <a href="/" className="text-decoration-none text-white">Voir le site</a>
                </button>

                <div className="realized p-2">
                    <p className="mb-0">Site réalisé avec PHP et MySQL</p>
                </div>
            </div>
            
            <div className="portfolio-box mb-3">
                <div className="img-box">
                    <img src="images/portfolio/restaurant-japonais.jpg" alt="Aliments d'un restaurant japonais" className="img-fluid mb-3" />
                </div>
                <div className="portfolio-text px-3">
                    <h2>Restaurant Akira</h2>
                    <p>Site de vente de produits frais en ligne</p>
                </div>

                <button type="button" className="portfolio-btn btn btn-primary mb-3">
                    <a href="/" className="text-decoration-none text-white">Voir le site</a>
                </button>

                <div className="realized p-2">
                    <p className="mb-0">Site réalisé avec WordPress</p>
                </div>
            </div>

            <div className="portfolio-box mb-3">
                <div className="img-box">
                    <img src="images/portfolio/espace-bien-etre.jpg" alt="Espace bien-être" className="img-fluid mb-3" />
                </div>
                <div className="portfolio-text px-3">
                    <h2>Espace bien-être</h2>
                    <p>Site de vente de produits frais en ligne</p>
                </div>

                <button type="button" className="portfolio-btn btn btn-primary mb-3">
                    <a href="/" className="text-decoration-none text-white">Voir le site</a>
                </button>

                <div className="realized p-2">
                    <p className="mb-0">Site réalisé avec LARAVEL</p>
                </div>
            </div>

            <div className="portfolio-box mb-3">
                <div className="img-box">
                    <img src="images/portfolio/seo.jpg" alt="Strategy SEO" className="img-fluid mb-3" />
                </div>
                <div className="portfolio-text px-3">
                    <h2>SEO</h2>
                    <p>Amélioration du référencement d'un site e-commerce</p>
                </div>

                <button type="button" className="portfolio-btn btn btn-primary mb-3">
                    <a href="/" className="text-decoration-none text-white">Voir le site</a>
                </button>

                <div className="realized p-2">
                    <p className="mb-0">Utilisation des outils SEO</p>
                </div>
            </div>

            <div className="portfolio-box mb-3">
                <div className="img-box">
                    <img src="images/portfolio/coder.jpg" alt="Code API" className="img-fluid mb-3" />
                </div>
                <div className="portfolio-text px-3">
                    <h2>Création d'une API</h2>
                    <p>Création d'une API RESTFULL publique</p>
                </div>

                <button type="button" className="portfolio-btn btn btn-primary mb-3">
                    <a href="/" className="text-decoration-none text-white">Voir le site</a>
                </button>

                <div className="realized p-2">
                    <p className="mb-0">PHP - SYMFONY</p>
                </div>
            </div>

            <div className="portfolio-box mb-3">
                <div className="img-box">
                    <img src="images/portfolio/screens.jpg" alt="WebSites on computers" className="img-fluid mb-3" />
                </div>
                <div className="portfolio-text px-3">
                    <h2>Maquette d'un site web</h2>
                    <p>Création du prototype d'un site</p>
                </div>

                <button type="button" className="portfolio-btn btn btn-primary mb-3">
                    <a href="/" className="text-decoration-none text-white">Voir le site</a>
                </button>

                <div className="realized p-2">
                    <p className="mb-0">Réalisé avec FIGMA</p>
                </div>
            </div>
        </section>
    );
}

export default PortfolioLinks;