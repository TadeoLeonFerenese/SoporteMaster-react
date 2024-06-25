import { Card } from "../components";

export const HomePage = () => {
  return (
    <div className="  container ">
      <div className="row my-4">
        <div className="col-md-4">
          <Card imageName="otros.png" title="Card 1" />
        </div>
        <div className="col-md-4">
          <Card imageName="tutosydocs.png" title="Card Title" />
        </div>
        <div className="col-md-4">
          <Card imageimageNameSrc="otros.png" title="Card Title" />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-4">
          <Card imageName="some-image.png" title="Card Title" />
        </div>
        <div className="col-md-4">
          <Card imageName="some-image.png" title="Card Title" />
        </div>
        <div className="col-md-4">
          <Card imageName="some-image.png" title="Card Title" />
        </div>
      </div>
    </div>
  );
};
