import { Route, Routes } from "react-router-dom";
import { SMroutes } from "../routes/SMRoutes";

export const SMRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SMroutes />} />
      </Routes>
    </>
  );
};
