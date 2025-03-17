import { Footer } from "../components";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages";
import { Header } from "../components/Header";
import "../Styles/SMRoutes.css";

export const SMroutes = () => {
  return (
    <>
      <div className="contenedor">
        <Header />

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
