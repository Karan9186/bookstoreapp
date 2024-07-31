import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function CourseTitle() {
  let [datas, setDatas] = useState([]);
  let [loader, setLoader] = useState(false);
  const allData = async () => {
    setLoader(true);
    const data = await fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const dataJson = await data.json();
    setDatas(dataJson);
    setLoader(false);
  };
  useEffect(() => {
    allData();
  }, []);
  return (
    <>
      <div className="m-[20px] flex align-cener justify-center max-w-screen-2xl container mx-auto md:px-20 px-4 flex-row">
        <div>
          <h1 className="mt-[100px] text-center font-semibold text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-600">Here! :)</span>
          </h1>
          <p className="text-center pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dicta architecto in facilis exercitationem accusamus magnam. Itaque
            error saepe autemti nemo eum, quam sequi hic autem sit adipisci
            corrupti? Optio quasi enim laborum recusandae in autem debitis quis
            suscipit neque amet quo, tempora corporis ex. Incidunt, nostrum
            inventore dolorum ratione nulla corporis ex facere porro itaque
            suscipit modi amet quo nisi officia dolore eos commodi natus.
          </p>
          <div className="flex align-center justify-center">
            <Link to="/" className="btn btn-secondary mt-12 ">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="m-[20px] flex align-cener justify-center max-w-screen-2xl container mx-auto md:px-20 px-4 flex-wrap gap-10 ">
        {loader == true ? (
          <span className="loading loading-dots loading-lg mt-10"></span>
        ) : (
          datas.map((v, i) => <Card key={i} data={v} />)
        )}
      </div>
    </>
  );
}

export default CourseTitle;
