import { Navbar, Route, Navigate } from "../components";
// import { Routes, Route } from "react-router-dom";
// import { SoporteMasterApp } from "../SoporteMasterApp";

export const SMroutes = () => {
  return (
    <>
      <Navbar />
      {/* aca va el banner */}

      <div className="container">
        {/* aca va subroutes que va la card reutilizable */}

        <Route path="/" element={<Navigate to="/Home" />} />
      </div>
      {/* aca va el footer  */}
    </>
  );
};
