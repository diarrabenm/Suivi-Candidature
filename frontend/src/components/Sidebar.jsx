import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">
          <i className="fas fa-home"></i> Accueil
        </Link>
        <Link to="/candidatures">
          <i className="fas fa-list"></i> Candidatures
        </Link>
        <Link to="/relances">
          <i className="fas fa-bell"></i> Relances
        </Link>
        <Link to="/statistiques">
          <i className="fas fa-chart-bar"></i> Statistiques
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
