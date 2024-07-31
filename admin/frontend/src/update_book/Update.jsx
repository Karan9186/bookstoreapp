import React from "react";
import Dashboard from "../component/Dashboard";
import Footer from "../component/Footer";
import MainUpdateFun from "../component/MainUpdateFun";
function Update() {
  return (
    <>
      <Dashboard />
      <div className="min-h-screen">
        <MainUpdateFun />
      </div>
      <Footer />
    </>
  );
}

export default Update;
