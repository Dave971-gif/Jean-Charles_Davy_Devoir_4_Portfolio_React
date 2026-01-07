import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);
  const closeNavbar = () => setOpen(false);

  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand brand" to="/">JOHN DOE</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")} onClick={closeNavbar}>
              HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")} onClick={closeNavbar}>
              SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")} onClick={closeNavbar}>
              PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")} onClick={closeNavbar}>
              CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/legal" className={({ isActive, isPending }) => "nav-link" + (isPending ? " pending" : isActive ? " active" : "")} onClick={closeNavbar}>
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
