import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">JOHN DOE</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")}>HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")}>
              SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")}>
              PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")}>
              CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/legal" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")}>
              MENTION LEGALES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
