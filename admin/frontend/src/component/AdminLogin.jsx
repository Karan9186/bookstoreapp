import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Admin from "./Admin";

function AdminLogin() {
  return (
    <>
      <Dashboard />
      <div className="min-h-screen">
        <Admin/>
      </div>
      <Footer />
    </>
  );
}

export default AdminLogin;
