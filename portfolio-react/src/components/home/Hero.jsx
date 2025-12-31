function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-white ">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>

        <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          En savoir plus
        </button>
      </div>
    </div>
  );
}

export default Hero;
