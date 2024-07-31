import React from "react";
import DashboradAll from "./dashboard/DashboradAll";
import { Route, Routes } from "react-router";
import Update from "./update_book/Update";
import Create from "./create/Create";
import AdminLogin from "./component/AdminLogin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboradAll />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
