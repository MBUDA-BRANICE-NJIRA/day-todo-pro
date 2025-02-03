import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-section">
            <div className="links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/AddList" className="nav-link">Add-Task</Link>
                <Link to="/History" className="nav-link">History</Link>
            </div>
        </nav>
    );
}

export default Navbar;