import React from "react";

// components
import SearchBar from "./components/SearchBar";
import SideInfo from "./components/SideInfo";
import MainInfo from "./components/MainInfo";
import DailyInfo from "./components/DailyInfo";

function App() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('./image/bg.jpg')] w-[100vw] h-[100vh] ">
      <div className="w-full h-full bg-overlay opacity-[60%]">
        <div className="bg-none w-[90%] pt-6 mx-auto text-primaryColor">
          <SearchBar />
          <div className="sm: flex flex-row justify-between items-start">
            <MainInfo/> 
            <SideInfo />
          </div>
          <DailyInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
