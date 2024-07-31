import React from "react";
import Dashboard from "../component/Dashboard";
import Footer from "../component/Footer";
import CreateBook from "../component/CreateBook";

function Create() {
  return (
    <>
      <Dashboard />
      <div className="min-h-screen">
        <CreateBook />
      </div>
      <Footer />
    </>
  );
}

export default Create;
