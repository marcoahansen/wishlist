import { useCallback, useState } from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import { Layout } from "../components/Layout/Layout";
import { WishDetail } from "../components/WishDetail/WishDetail";

export const Router = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });
  const onClear = useCallback(() => {
    setSearch("");
  });
  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch} />}>
        <Route path="/wishlist" element={<App search={search} />} />
        <Route path="/wishlist/wish/:id" element={<WishDetail />} />
        <Route path="/*" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
