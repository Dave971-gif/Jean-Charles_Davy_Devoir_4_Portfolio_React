import { useState, useEffect } from "react";

function Modal() {
    const [githubData, setGithubData] = useState(null);
    
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/github-johndoe");
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error("Erreur lors du fetch GitHub :", error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div className="modal" id="JohnDoeModal" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-down">
            <h5 className="modal-title">Mon profil Github</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column flex-md-row align-items-start gap-4">
            <img src="images/Github_John_Doe.png" className="img-johndoe img-fluid" alt="Icone de John Doe" />
            {githubData ? (
              <div className="p-4">
                <p className="border-down py-1"><i className="bi bi-person"></i> <a href={githubData.html_url || "#"}>{githubData.name || "John Doe"}</a></p>
                <p className="border-down py-1"><i className="bi bi-geo-alt"></i> {githubData.location}</p>
                <p className="border-down py-1"><i className="bi bi-card-text"></i> {githubData.bio || "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}</p>
                <p className="border-down py-1"><i className="bi bi-box"></i> Repositories : {githubData.public_repos || 1}</p>
                <p className="border-down py-1"><i className="bi bi-people"></i> Followers : {githubData.followers || 16}</p>
                <p><i className="bi bi-people"></i> Following : {githubData.following}</p>
              </div>
            ) : (
              <p>Chargement...</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

