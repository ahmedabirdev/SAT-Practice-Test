import React, { useEffect, useState } from "react";
import { englishscore, getScore } from "./SAT_Score_Table";
import { mathscore } from "./SAT_Score_Table";
import { RiLoginCircleLine } from "@remixicon/react";
import Link from "next/link";

export default function Component11({ Component, setComponent }) {
  const [section1Data, setSection1Data] = useState({});
  const [section2Data, setSection2Data] = useState({});
  const [section3Data, setSection3Data] = useState({});
  const [section4Data, setSection4Data] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSection1Data(JSON.parse(localStorage.getItem("section1")) || {});
      setSection2Data(JSON.parse(localStorage.getItem("section2")) || {});
      setSection3Data(JSON.parse(localStorage.getItem("section3")) || {});
      setSection4Data(JSON.parse(localStorage.getItem("section4")) || {});
    }
  }, []);


  const handleHomeClick = (e) => {
    e.preventDefault();
    const confirmRedirect = window.confirm(
      "Your all changes will be Discarded if redirected to the home page. Do you want to continue?"
    );
    if (confirmRedirect) {
      navigate("/");
    }
  };

  const userenglishmarks = section1Data.marks + section2Data.marks;
  const usermathsmarks = section3Data.marks + section4Data.marks;

  const englishScore = getScore(userenglishmarks, englishscore);
  const mathScore = getScore(usermathsmarks, mathscore);

  const today = new Date();
  const formattedDate = formatDate(today);

  return (
    <div>
      <div className="w-full h-screen ">
        <div className="w-full h-[30%] bg-[#0077C8] px-32 py-10">
          <div className="w-full flex justify-between">
            <p className="text-5xl text-white">My Practice</p>
            <Link href="/" onClick={handleHomeClick}>
              <div className="text-white font-semibold cursor-pointer">
                <p className="text-white">
                  <RiLoginCircleLine />{" "}
                </p>
                <p>Exit </p>
              </div>
            </Link>
          </div>
          <br />
          <p className="text-xl text-white">
            Review your practice test scores, dig deeper into your performance,
            and learn your strengths <br /> before test day
          </p>
        </div>
        <div className="w-full h-[70%] px-32 py-14">
          <p className="text-3xl font-semibold">SAT Practice Test</p>
          <div className="w-full center ">
            <div className="h-[55vh] w-[35vh] overflow-hidden rounded-2xl shadow-lg pb-5 ">
              <div className="w-full h-[20%] bg-[#003B64]  p-5  rounded-t-2xl">
                <p className="text-white text-3xl font-semibold">SAT</p>
              </div>
              <div className="w-full h-[8%] text-white font-medium px-5 bg-[#005FA0] flex items-center justify-between">
                <p className="text-xs">Practice Test</p>
                <p className="text-xs">{formattedDate}</p>
              </div>
              <div className="w-full bg-[#F2F8FC] h-[30%]  center flex-col">
                <p className="text-xs font-bold">Your Total Score</p>
                <p className="text-7xl  font-semibold">
                  {englishScore + mathScore}
                </p>
                <p className=" text-xs font-medium opacity-50">400-1600</p>
              </div>
              <div className="flex items-center justify-center w-full h-[25%] px-5  flex-col">
                <div className="w-full h-[40%] border-b-2 flex items-center justify-between">
                  <div className="">
                    <p className="text-xs font-bold">Reading and Writing</p>
                    <p className="text-xs font-medium opacity-50">200-800</p>
                  </div>
                  <p className="text-2xl font-semibold">{englishScore}</p>
                </div>
                <div className="w-full h-[40%]  flex items-center justify-between">
                  <div className="">
                    <p className="text-xs font-bold">Math</p>
                    <p className="text-xs font-medium opacity-50">200-800</p>
                  </div>
                  <p className="text-2xl font-semibold">{mathScore}</p>
                </div>
              </div>

              <div className="w-full center p-5">
                <button
                  onClick={() => setComponent("component12")}
                  className="py-2 cursor-pointer w-full border-2 border-black bg-yellow-300 rounded-full font-bold text-base"
                >
                  Review Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const formatDate = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
