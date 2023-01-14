import React from "react";

const GameResult = () => {
  return (
    <div id="game_result" className="w-screen h-screen">
      <div
        id="home-container"
        className="relative w-full h-full flex flex-col justify-center items-center space-y-4"
      >
        <h1 className="text-[96px]">謎</h1>
        <h2 className="text-[72px]">
          得數：<span id="score"></span>
        </h2>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          結束
        </button>
      </div>
    </div>
  );
};

export default GameResult;
