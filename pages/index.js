import React, { useState } from "react";
import Home from "./home";
import PinInput from "./pinInput";

const Index = () => {
  // 0: index(default)
  // 1: pinInput
  // 2: gameInfo
  // 3: game
  // 4: gameResult
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <>
      {pageIndex === 0 && <Home setPageIndex={setPageIndex} />}
      {pageIndex === 1 && <PinInput setPageIndex={setPageIndex} />}
      {pageIndex === 2 && <Home setPageIndex={setPageIndex} />}
      {pageIndex === 3 && <Home setPageIndex={setPageIndex} />}
      {pageIndex === 4 && <Home setPageIndex={setPageIndex} />}
    </>
  );
};

export default Index;
