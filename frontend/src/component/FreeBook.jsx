import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function FreeBook() {
  let [datas, setDatas] = useState([]);
  let [loader, setLoader] = useState(false);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let filterData = datas.filter(
    (data) => data.category === "Free" || data.category === "free"
  );

  const allData = async () => {
    setLoader(true);

    const re = await fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await re.json();
    console.log(response);
    setDatas(response);

    setLoader(false);
  };
  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-2xl">Free offered course</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            quo molestiae ad similique obcaecati, necessitatibus quasi, sunt
            dolorum deleniti impedit aperiam praesentium beatae error officia
            nemo quas at ullam doloremque!
          </p>
        </div>

        <div className="p-6">
          {loader == true ? (
            <div className="flex justify-center ">
              <span className="loading loading-dots loading-lg mt-10"></span>
            </div>
          ) : (
            <Slider {...settings}>
              {filterData.map((data) => (
                <Card data={data} key={data._id} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
}

export default FreeBook;
