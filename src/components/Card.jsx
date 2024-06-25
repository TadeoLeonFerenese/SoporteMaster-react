import PropTypes from "prop-types";

export const Card = ({ imageName, title }) => {
  const imagePath = (imageName) => {
    return `src/images/${imageName}`;
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagePath(imageName)} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
