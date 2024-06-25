export const Card = ({ imgSrc, title }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};
