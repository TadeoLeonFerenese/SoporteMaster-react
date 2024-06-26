import { Card } from "../components";

export const HomePage = () => {
  return (
    <div className="  container ">
      <div className="row my-4">
        <div className="col-md-4">
          <Card imageName="iconoWindows.png" title="Imagenes Master" />
        </div>
        <div className="col-md-4">
          <Card imageName="drivers.png" title="Drivers" />
        </div>
        <div className="col-md-4">
          <Card
            imageName="iconopendrivemaster.png"
            title="Pendrive Masterizado"
          />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-4">
          <Card imageName="iconoSoftware.png" title="Software" />
        </div>
        <div className="col-md-4">
          <Card imageName="erroresrepair.png" title="Reparción de Errores" />
        </div>
        <div className="col-md-4">
          <Card imageName="utilidades.png" title="Utilidades" />
        </div>
      </div>
    </div>
  );
};
