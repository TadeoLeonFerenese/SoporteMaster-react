import { Card } from "../components";

export const HomePage = () => {
  return (
    <div className="  container ">
      <div className="row my">
        <div className="col-md-4">
          <Card imageName="iconocorreo.png" />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
};
