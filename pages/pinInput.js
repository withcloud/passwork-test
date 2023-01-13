import React, { useRef } from "react";

const PinInput = ({ setPageIndex }) => {
  const pinKeyboardRef = useRef();

  function inputHandle() {
    console.log(pinKeyboardRef.current.className);
  }

  return (
    <section
      id="pinInputPage"
      className="w-screen h-screen overflow-hidden relative"
    >
      <div className="w-full h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <div className="flex justify-center">
                <label
                  className="block text-gray-700 font-medium mb-2 text-lg"
                  htmlFor="pinInput"
                >
                  輸入你的PIN碼
                </label>
              </div>
              <input
                id="pinInput"
                className="h-16 text-5xl text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 disabled:cursor-not-allowed"
                type="text"
                defaultValue=""
                placeholder=""
                onFocus={inputHandle}
              />
              <div
                id="pinKeyboard"
                ref={pinKeyboardRef}
                className="mt-3 grid grid-cols-3 gap-1 hidden"
              >
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  1
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  2
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  3
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  4
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  5
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  6
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  7
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  8
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  9
                </button>
                <button className="bg-rose-500 h-10 hover:bg-rose-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  重置
                </button>
                <button className="bg-teal-500 h-10 hover:bg-teal-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  0
                </button>
                <button className="bg-sky-500 h-10 hover:bg-sky-800 rounded-md m-0.5 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  關閉
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                id="pinStartBtn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12 text-xl disabled:bg-blue-300 disabled:cursor-not-allowed"
                type="button"
              >
                開始遊戲
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-center">
              <label
                className="block text-gray-700 font-medium mb-2 text-lg"
                htmlFor="username"
              >
                請選擇該方式
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                id="startDirectlyBtn"
                className="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12 text-xl"
                type="button"
              >
                開始遊戲
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinInput;
