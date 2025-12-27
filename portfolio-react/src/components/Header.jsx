import { Link } from "react-router-dom";

function Header() {
  return (
    <>
        <div>
            <nav>
                <p>JOHN DOE</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/legal">Legal</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  );
}

export default Header;
