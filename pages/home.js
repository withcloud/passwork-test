import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const Home = ({ setPageIndex }) => {
  useEffect(() => {
    toast("建議使用 google chrome 瀏覽器。", {
      duration: Infinity,
      position: "top-right",
      icon: " 🔷 ",
    });
  }, []);

  function buttonHandle() {
    toast.remove();
    setPageIndex(1);
  }

  return (
    <>
      <div id="home" className="w-screen h-screen">
        <div
          id="home-container"
          className="relative w-full h-full flex flex-col justify-center items-center space-y-4"
        >
          <h1 className="text-[96px]">謎</h1>

          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={buttonHandle}
          >
            開始
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Home;
