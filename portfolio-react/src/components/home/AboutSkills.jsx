function AboutSkills() {
  return (
    <section className="aboutskills d-flex flex-wrap shadow mb-5 mt-5">
      <div className="about container-fluid py-5 col-lg-6 col-md-12 mb-4">
        <h2 className="mb-4">A propos</h2>

        <img src="images/john-doe-about.jpg" alt="A propos de moi" className="about-image mb-3 mx-auto d-block img-fluid" />
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>      

      <div className="skills container-fluid py-5 col-lg-4 col-md-12 mb-4">
        <h2 className="mb-4">Mes compétences</h2>

        <div className="skill-item mb-3">
          <p>HTML5</p>
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar"></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <p>CSS3</p>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar"></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <p>JavaScript</p>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar"></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <p>PHP</p>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar"></div>
          </div>
        </div>

        <div className="skill-item mb-3">
          <p>React</p>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar"></div>
          </div>
        </div>
      </div>
        
    </section>
  );
}

export default AboutSkills;