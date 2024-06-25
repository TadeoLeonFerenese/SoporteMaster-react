import { Banner, Navbar } from "../components";
import { HomePage } from "../pages";
// import { Routes, Route } from "react-router-dom";
// import { SoporteMasterApp } from "../SoporteMasterApp";

export const SMroutes = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="d-flex justify-content-center align-items-center my-5 ">
        <HomePage />
      </div>
    </>
  );
};
