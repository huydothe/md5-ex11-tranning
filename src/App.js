import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import SpreadArticles from "./pages/SpreadArticles";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path={"/users/add"} element={<UserDetails />} />
        <Route path={"/"} element={<SpreadArticles />} />
        <Route path={`/users/:userId`} element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

