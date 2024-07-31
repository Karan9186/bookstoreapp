import React from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
function AllBooks({ data }) {
  let navigate = useNavigate();
  const updateBook = (id) => {
    navigate(`/update/${id}`);
    // window.location.href = `/update/${id}`;
  };
  let deleteBook = async (id) => {
    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("a_token"),
      },
    });
    const result = await response.json();
    console.log(result);
    toast.success("Book delete");
    setTimeout(() => window.location.reload(), 1000);
  };
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={data.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-secondary w-[103px]">
              {data.category == "Free" ? "Free" : "Rs " + data.price}
            </div>
          </h2>
          <p>{data.title}</p>
          <div className="card-actions justify-between mt-3">
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-12 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => deleteBook(data._id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-12 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => updateBook(data._id)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default AllBooks;
