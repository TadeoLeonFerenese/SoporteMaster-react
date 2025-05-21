import { Card } from "../components";
import "../Styles/HomePage.css";

export const HomePage = () => {
  const items = [
    { title: "Imagenes Master", img: "iconoWindows.png" },
    { title: "Drivers", img: "drivers.png" },
    { title: "Pendrive Masterizado", img: "iconopendrivemaster.png" },
    { title: "Software", img: "iconoSoftware.png" },
    { title: "Reparación de Errores", img: "erroresrepair.png" },
    { title: "Utilidades", img: "utilidades.png" },
  ];
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map((item, index) => (
          <div className="col" key={index}>
            <Card imageName={item.img} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
