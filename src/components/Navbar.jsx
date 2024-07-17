import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark p-2  fixed-top bg-light"
      style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}
    >
      <div className="navbar-collapse">
        <div className="navbar-nav ">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "active" : ""
              } text-dark fw-bold mx-2 fs-4`
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto ">
          <span className="nav-item nav-link text-secondary fw-bold mx-2">
            Soporte Master
          </span>
        </ul>
      </div>
    </nav>
  );
};
