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
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">About</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div className="modal-body">
            {githubData ? (
              <div>
                <p><strong>Nom :</strong> {githubData.name || "John Doe"}</p>
                <p><strong>Bio :</strong> {githubData.bio || "Développeur Web Full Stack"}</p>
                <p><strong>Followers :</strong> {githubData.followers}</p>
                <p><strong>Repos :</strong> {githubData.public_repos}</p>
              </div>
            ) : (
              <p>Chargement...</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;