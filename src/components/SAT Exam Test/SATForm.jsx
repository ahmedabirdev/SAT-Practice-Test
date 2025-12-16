"use client";

import { RiCloseFill } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SATForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const handleReload = () => {
      localStorage.removeItem("SAT_user_detail");
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("SAT_user_detail");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setName(parsed.name || "");
      setEmail(parsed.email || "");
      setSaved(true);
    }
  }, []);

  const handleSubmit = () => {
    if (!name || !email) return;

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "SAT_user_detail",
        JSON.stringify({ name, email })
      );

      setLoading(false);
      setSaved(true);
    }, 800);
  };

  const handleStartTest = () => {
    localStorage.removeItem("LunchBreakStartTime");
    localStorage.removeItem("component");
    localStorage.removeItem("component1startTime");
    localStorage.removeItem("component3startTime");
    localStorage.removeItem("component6startTime");
    localStorage.removeItem("component8startTime");
    localStorage.removeItem("section1");
    localStorage.removeItem("section2");
    localStorage.removeItem("section3");
    localStorage.removeItem("section4");
    router.push("/exam");
  };

  return (
    <div className="top-0 relative w-full h-screen flex items-center justify-center bg-[#74747443]">
      <img
        className="w-full h-full absolute z-[-1] object-cover"
        src="https://img.freepik.com/free-vector/hand-drawn-school-supplies-pattern-background_23-2150855728.jpg"
        alt=""
      />

      <div className="w-[30%] md:w-[50%]  lg:w-[30%] py-5 bg-white drop-shadow-2xl max-[600px]:w-full relative">
        <div className="cursor-pointer absolute right-5 top-5">
          <RiCloseFill />
        </div>

        <div className="w-full flex flex-col items-center">
          <p className="font-medium text-xl p-5 text-center">
            Fill the form below to start <br /> your SAT Practice Test
          </p>

          <div className="flex flex-col gap-5 w-[80%] mt-5">
            <div>
              <h2 className="font-medium text-sm">Your Full Name</h2>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={saved}
                placeholder="Enter your Name"
                type="text"
                className="w-full h-10 text-lg border border-black/20 pl-5 rounded-sm mt-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <h2 className="font-medium text-sm">Your Email Address</h2>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={saved}
                placeholder="Enter your Email"
                type="email"
                className="w-full h-10 text-lg border border-black/20 pl-5 rounded-sm mt-2 disabled:bg-gray-100"
              />
            </div>
          </div>

          <p className="mt-5 text-sm text-red-500 lg:hidden">Please use laptop to start exam</p>
          <button
            onClick={saved ? handleStartTest : handleSubmit}
            disabled={loading}
            className=" hidden  lg:block bg-[#008BDC] cursor-pointer text-sm font-medium text-white py-2 px-6 rounded-md mt-10 shadow-lg disabled:opacity-70"
          >
            {loading
              ? "Saving..."
              : saved
                ? "Start Test"
                : "Submit Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SATForm;
