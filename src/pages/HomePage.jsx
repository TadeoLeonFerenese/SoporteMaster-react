import { Card } from "../components";
import "../Styles/HomePage.css";

export const HomePage = () => {
  //! Funcione que desglosa el contenido de las cards
  const items = [
    { title: "Imagenes Master", img: "iconoWindows.png" },
    { title: "Drivers", img: "drivers.png" },
    { title: "Pendrive Masterizado", img: "iconopendrivemaster.png" },
    { title: "Software", img: "iconoSoftware.png" },
    { title: "Reparción de Errores", img: "erroresrepair.png" },
    { title: "Utilidades", img: "utilidades.png" },
  ];
  return (
    <div className="container">
      {items.map((item, index) => (
        //!aca con el map itineramos lo que se degloso antes
        <Card key={index} imageName={item.img} title={item.title} />
      ))}
    </div>
  );
};
