import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
function MainUpdateFun() {
  let [currentData, setCurrentData] = useState({
    category: "",
    image: "",
    name: "",
    price: "",
    title: "",
  });
  let [loader, setLoader] = useState(false);
  let navigete = useNavigate();
  let handling = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCurrentData({ ...currentData, [name]: value });
  };
  const formSubmit = async (e) => {
    setLoader(true);
    let url = window.location.href;
    const id = url.split("/")[4];
    e.preventDefault();
    const storeIntoDatabase = currentData;

    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "PATCH",
      body: JSON.stringify(storeIntoDatabase),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("a_token"),
      },
    });
    const result = await response.json();
    console.log(result);
    setLoader(false);
    setTimeout(() => navigete("/"), 2000);
  };
  useEffect(() => {
    setLoader(true);
    const response = async () => {
      let url = window.location.href;
      const id = url.split("/")[4];
      const response = await fetch(`http://localhost:3000/${id}`, {
        method: "GET",
      });
      const result = await response.json();
      setCurrentData(result);
      // console.log(result);
      setLoader(false);
    };
    response();
  }, []);

  let frontEndUpd = (
    <>
      <div className="flex align-center justify-center mt-10 w-full">
        <form className="w-80 p-5 " onSubmit={(e) => formSubmit(e)}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              category
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="free or paid"
              required
              name="category"
              value={currentData.category}
              onChange={(e) => handling(e)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              image url
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="image"
              value={currentData.image}
              onChange={(e) => handling(e)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              name
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="sifi book"
              required
              name="name"
              value={currentData.name}
              onChange={(e) => handling(e)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              price
            </label>
            <input
              type="number"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="21"
              name="price"
              required
              value={currentData.price}
              onChange={(e) => handling(e)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              title
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="title"
              placeholder="this is the demo name of book"
              value={currentData.title}
              onChange={(e) => handling(e)}
            />
          </div>
          <div className="flex align-center justify-between flex-col gap-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              update
            </button>
            <button
              type="submit"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => navigete("/")}
            >
              cancle
            </button>
          </div>
        </form>
      </div>
    </>
  );
  return (
    <>
      {loader == true ? (
        <div className="flex align-center justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        frontEndUpd
      )}
    </>
  );
}

export default MainUpdateFun;
