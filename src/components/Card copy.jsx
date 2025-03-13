import PropTypes from "prop-types";
// import "../Styles/Card.css";

export const Card = ({ imageName, title }) => {
  const imagePath = (imageName) => {
    return `src/images/${imageName}`;
  };
  return (
    <div className="card">
      <img
        src={imagePath(imageName)}
        className="card-img-top p-5"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title
        </p>
        <a href="#" className="btn btn-primary">
          Click Aqui
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
