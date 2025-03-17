import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <a href="/" className="logo-link">
                <img
                  src={"src/images/usb.png"}
                  className="footer-logo-img"
                  alt="Imagen de USB"
                  style={{ background: 'transparent' }}
                />
              </a>
              <p className="copyright text-light">© 2024 Soporte Master</p>
            </div>
          </div>

          <div className="footer-section">
            <nav className="footer-nav">
              <ul className="list-unstyled">
                <li>
                  <a href="/sobre-nosotros" className="text-decoration-none">
                    <span className="text-light">Sobre Nosotros</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    <span className="text-light">Home</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-section">
            <div className="footer-contact">
              <ul className="list-unstyled">
                <li>
                  <a
                    href="mailto:dgt.soporte-master@pjn.gov.ar"
                    className="text-decoration-none"
                  >
                    <span className="text-light fs-5">
                      dgt.soporte-master@pjn.gov.ar
                    </span>
                  </a>
                </li>
                <li>
                  <span className="text-light fs-5">
                    Telefono: 4124-4568 / Int: 32681
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
