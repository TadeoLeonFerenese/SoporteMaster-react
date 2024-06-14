<<<<<<< HEAD
import { Navbar, Route, Navigate } from "../components";
=======
import { Banner, Navbar } from "../components";
>>>>>>> 8d4f50e6a046749acefe9fe6557dceebbd51287e
// import { Routes, Route } from "react-router-dom";
// import { SoporteMasterApp } from "../SoporteMasterApp";

export const SMroutes = () => {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      {/* aca va el banner */}

      <div className="container">
        {/* aca va subroutes que va la card reutilizable */}

        <Route path="/" element={<Navigate to="/Home" />} />
      </div>
      {/* aca va el footer  */}
=======
      <Banner />
      <div className="container"></div>
>>>>>>> 8d4f50e6a046749acefe9fe6557dceebbd51287e
    </>
  );
};
