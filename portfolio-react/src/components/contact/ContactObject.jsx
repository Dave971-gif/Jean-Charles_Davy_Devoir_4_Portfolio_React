function ContactObject() {
    return (
        <section className="container container-fluid d-flex flex-wrap p-5 gap-3 justify-content-center align-items-center">
            <div className="contact-zone d-flex p-4 gap-3 shadow">
                <div className="contact-object justify-content-start align-items-start">
                    <div className="box-title mb-5">
                        <h2>Formulaire de contact</h2>
                    </div>
                    <div>
                        <form action="Contact" method="post" className="contact-form d-flex flex-column flex-wrap gap-1">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Votre nom" required />

                            <label htmlFor="mail"></label>
                            <input type="email" id="mail" name="mail" placeholder="Votre adresse email" required />

                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Votre numéro de téléphone" required />

                            <label htmlFor="subject"></label>
                            <input type="text" id="subject" name="subject" placeholder="Sujet" required />

                            <label htmlFor="message"></label>
                            <textarea id="message" name="name" placeholder="Votre message" required></textarea>
                            
                            <div className="btn-box d-flex justify-content-center py-2 px-5">
                                <label htmlFor="sub"></label>
                                <input type="submit" id="sub" name="sub" className="submit btn btn-primary" value="Envoyer"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="contact-object">
                    <div className="box-title mb-5">
                       <h2>Mes coordonnées</h2>
                    </div>
                    <div className="contact-links d-flex flex-column">
                        <h3>John Doe</h3>
                        <a href="https://maps.app.goo.gl/71CemaFywf3d8itc9" target="_blank"><i class="bi bi-map"> </i>60 rue Laure Diebold <br />
                        <i class="bi bi-geo-alt"> </i>69009 Lyon, France</a>
                        <a href="tel:10 20 30 40 50"><i class="bi bi-phone"> </i>10 20 30 40 50</a>
                        <a href="mailto:johndoe@gmail.com"><i class="bi bi-envelope-at"> </i>john.doe@gmail.com</a>
                        <div className="ratio ratio-4x3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.306627387423!2d4.79350091200656!3d45.778711570960304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb64473f8fcb%3A0xf04b7437ef5aff37!2s60%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1767808941831!5m2!1sfr!2sfr" className="img-fluid" width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactObject;