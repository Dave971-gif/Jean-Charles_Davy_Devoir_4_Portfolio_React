function LegalInfo() {
    return (
        <section className="legalinfo justify-content-center align-items-center p-5">
            <div class="accordion section-accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="legal-links accordion-body d-flex flex-column">
                            <h3>John Doe</h3>
                            <a href="https://maps.app.goo.gl/3XmkwrxJuBUvDpvu7" target="_blank"><i class="bi bi-map"> </i>40 rue Laure Diebold <br />
                            <i class="bi bi-geo-alt"> </i>69009 Lyon, France</a>
                            <a href="tel:10 20 30 40 50"><i class="bi bi-phone"> </i>10 20 30 40 50</a>
                            <a href="mailto:johndoe@gmail.com"><i class="bi bi-envelope-at"> </i>john.doe@gmail.com</a>                        
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body d-flex flex-column">
                            <h2>alwaysdata</h2>
                            <div className="legal-links">
                                <a href="https://maps.app.goo.gl/WrzQEr8hbYusdLZ5A" target="_blank">91 Rue du Faubourg Saint-Honoré, 75008 Paris</a>                        
                            </div>
                            <div className="d-flex py-3">
                                <i class="bi bi-globe2"></i>
                                <a href="https://www.alwaysdata.com/fr" className="mx-2">www.alwaysdata.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h2>Crédits</h2>
                            <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr">Centre Européen de Formation</a>.</p>
                            <p class="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                            <p class="fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons ErsteIIT von Freepik - Flaticon</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LegalInfo;