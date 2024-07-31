import React, { useState } from "react";
import { useNavigate } from "react-router";

function CreateBook() {
  let [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  let [allData, setAllData] = useState({
    category: "",
    image: "",
    name: "",
    price: "",
    title: "",
  });

  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAllData({ ...allData, [name]: value });
  };
  const submitData = async (e) => {
    setLoader(true);
    e.preventDefault();
    const currentData = allData;
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentData),
    });
    const result = await response.json();

    setLoader(false);
    setAllData({
      category: "",
      image: "",
      name: "",
      price: "",
      title: "",
    });
    navigate("/");
  };
  const allForm = (
    <>
      <div className="flex align-center justify-center mt-10 w-full">
        <form className="w-80 p-5" onSubmit={(e) => submitData(e)}>
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
              onChange={(e) => handledata(e)}
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
              onChange={(e) => handledata(e)}
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
              onChange={(e) => handledata(e)}
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
              onChange={(e) => handledata(e)}
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
              onChange={(e) => handledata(e)}
            />
          </div>
          <div className="flex align-center justify-between flex-col gap-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
            <button
              type="submit"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        allForm
      )}
    </>
  );
}

export default CreateBook;
