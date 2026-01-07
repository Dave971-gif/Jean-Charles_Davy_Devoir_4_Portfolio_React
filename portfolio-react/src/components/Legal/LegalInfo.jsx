function LegalInfo() {
    return (
        <div>
            <div>
                <label htmlFor="subject"></label>
                <select id="subject" name="subject" required>
                  <option value="">Sujet</option>
                  <option value="contact">Contact</option>
                  <option value="devis">Devis</option>
                  <option value="autre">Autre</option>
                </select>
            </div>
        </div>
    )
}

export default LegalInfo;