export const Banner = () => {
  return (
    <div className="container-fluid p-0 " style={{ marginTop: 60 }}>
      <div className="row no-gutters p-0 m-0 position-relative">
        <img
          src={"src/images/Banner-pjn.jpg"}
          alt="Banner Immage"
          className="img-fluid w-100  p-0"
        />
        <h1 className="position-absolute text-white p-0 my-3 mx-3 text-start">
          <p className="fs-1 ">Poder Judicial de la Nación</p>
          <p className="fs-3">Soporte Master</p>
        </h1>
      </div>
    </div>
  );
};
