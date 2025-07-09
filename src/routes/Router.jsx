import { Route, Routes } from "react-router";
import App from "../App";
import { Layout } from "../components/Layout/Layout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/wishlist" element={<App />} />
      </Route>
    </Routes>
  );
};
