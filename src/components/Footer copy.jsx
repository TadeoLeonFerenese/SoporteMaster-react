// import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="flex-container">
          <div className="row">
            <div className="col text-cetner">
              <a className="link-dark col" href="Imagen de usb">
                <img
                  src={"src/images/usb.png"}
                  className="image-fluid"
                  alt="Imagen de USB"
                />
              </a>
              <p className="my-1 text-light">© 2024</p>
            </div>
            <div className="col">
              <p className="text-light">Soporte Master</p>
            </div>
          </div>
        </div>

        <div className="flex-container">
          <ul className="list-unstyled">
            <li className="text-light">
              <a href="Sobre Nosotros" className="text-decoration-none">
                <p className="text-light">Sobre Nosotros</p>
              </a>
            </li>
            <li className="text-light">
              <a href="Home" className="text-decoration-none">
                <p className="text-light">Home</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-container">
          <ul className="list-unstyled">
            <li className="text-light">
              <a
                href="mailto: dgt.soporte-master@pjn.gov.ar"
                className="text-decoration-none button"
              >
                <p className="text-light fs-5">dgt.soporte-master@pjn.gov.ar</p>
              </a>
            </li>
            <li className="text-light">
              <p className="text-light fs-5">
                Telefono: 4124-4568 / Int: 32681
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
