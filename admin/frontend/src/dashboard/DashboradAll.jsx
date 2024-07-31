import React, { useEffect, useState } from "react";
import Dashboard from "../component/Dashboard";
import AllBooks from "../component/AllBooks";
import Footer from "../component/Footer";
import { useNavigate } from "react-router";

function DashboradAll() {
  let [loader, setLoader] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();
  const allData = async () => {
    setLoader(true);
    const response = await fetch("http://localhost:3000/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("a_token"),
      },
    });
    const result = await response.json();
    if (result.message) {
      navigate("/login");
    } else {
      setAllBooks(result);
    }
    setLoader(false);
  };
  useEffect(() => {
    allData();
  }, []);
  return (
    <div>
      <Dashboard />
      <div className="min-h-screen mt-12 mb-10">
        <div className="flex align-center justify-center flex-wrap gap-12">
          {loader == true ? (
            <div className="flex align-center justify-center">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          ) : (
            allBooks.map((v, i) => <AllBooks key={i} data={v} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboradAll;
