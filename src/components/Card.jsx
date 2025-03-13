import PropTypes from "prop-types";
import { useState } from "react";
import "../Styles/Card.css";

export const Card = ({ imageName, title }) => {
  const [showModal, setShowModal] = useState(false);

  const imagePath = (imageName) => {
    return `src/images/${imageName}`;
  };

  return (
    <>
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
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Click Aqui
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              {/* Add your modal content here */}
              <p>Content for {title}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={() => setShowModal(false)}
        ></div>
      )}
    </>
  );
};

Card.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
