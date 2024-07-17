import { Banner, Footer, Navbar } from "../components";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages";
import "./SMRoutes.css";

export const SMroutes = () => {
  return (
    <>
      <div className="contenedor">
        <Navbar />
        <Banner />

        <div className="container">
          <div className="d-flex justify-content-center align-items-center my-5 ">
            <HomePage />
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
          </Routes>
        </div>
        {/* aca va el footer  */}
        <Footer />
      </div>
    </>
  );
};
