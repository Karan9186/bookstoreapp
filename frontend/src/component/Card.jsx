import React from "react";

function Card({ data }) {
  return (
    <div className="mt-4 my-5 ">
      <div className="card bg-base-100 dark:bg-slate-900 dark:text-white dark:border w-96 shadow-xl hover:scale-105 duration-300">
        <figure>
          <img src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-secondary">
              {data.category == "Free"
                ? "Free"
                : "paid" || data.category == "free"
                ? "Free"
                : "paid"}
            </div>
          </h2>
          <p>{data.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Rs{data.price}</div>
            <div className="badge badge-outline hover:text-white  hover:bg-pink-500 px-3 py-3 duration-200 cursor-pointer ">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
