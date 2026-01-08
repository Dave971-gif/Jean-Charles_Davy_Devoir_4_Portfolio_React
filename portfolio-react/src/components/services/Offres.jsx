function Offres() {
    return (
        <section className="offer-box container-fluid d-flex py-5 gap-3 text-center justify-content-center align-items-center flex-wrap">
          <div className="offers offers-large">
            <div className="justify-content-center align-items-center m-5">
              <i className="bi bi-brush fs-1 bi-offers"></i>
            </div>
            <div className="px-3 pb-3">
              <h2>UX Design</h2>
              <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
            </div>
          </div>

          <div className="offers offers-large">
            <div className="justify-content-center align-items-center m-5">
              <i className="bi bi-code-slash fs-1 bi-offers"></i>
            </div>
            <div className="px-3 pb-3">
              <h2>Développement Web</h2>
              <p>Le développement web consiste à créer des sites web en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, Python, etc.) et des frameworks (Bootstrap, React, Angular, etc.)</p>
            </div>
          </div>
          
          <div className="offers offers-large">
            <div className="justify-content-center align-items-center m-5">
              <i className="bi bi-search fs-1 bi-offers"></i>
            </div>
            <div className="px-3 pb-3">
              <h2>Référencement</h2>
              <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
            </div>
          </div>
        </section>
    );
}

export default Offres;