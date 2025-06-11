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
                  alt="Soporte Master"
                  style={{ background: "transparent" }}
                />
              </a>
              <p className="copyright">© 2024 Soporte Master</p>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-contact">
              <h5 className="contact-title">Contacto</h5>
              <ul className="list-unstyled contact-list">
                <li>
                  <a
                    href="mailto:dgt.soporte-master@pjn.gov.ar"
                    className="contact-link"
                  >
                    <i className="bi bi-envelope-fill"></i>
                    <span>dgt.soporte-master@pjn.gov.ar</span>
                  </a>
                </li>
                <li className="contact-phone">
                  <i className="bi bi-telephone-fill"></i>
                  <span>4124-4568 / Int: 32681</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
