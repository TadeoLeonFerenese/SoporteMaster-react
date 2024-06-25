import { Banner, Navbar } from "../components";
import { Routes, Route, Navigate } from "react-router-dom";
// import { SoporteMasterApp } from "../SoporteMasterApp";

export const SMroutes = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <div className="container">
        {/* aca va subroutes que va la card reutilizable */}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {/* aca va el footer  */}

      <div className="container"></div>
    </>
  );
};
