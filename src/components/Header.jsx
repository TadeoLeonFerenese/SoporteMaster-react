import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title-section">
          <h1 className="header-title">Poder Judicial de la Nación</h1>
          {/* <p className="header-subtitle">
            Pequeña introduccion de lo que trata
          </p> */}
          <nav className="header-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Soporte Master
            </NavLink>
          </nav>
        </div>
        <div className="header-logo">
          <img src={"src/images/logo_blanco_PJN.png"} alt="Logo PJN" />
        </div>
      </div>
    </header>
  );
};
