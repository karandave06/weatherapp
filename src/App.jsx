import React, { useState } from "react";
import serch from "./assets/icons/search.svg";
import { useStateContext } from "./context";
import BackgroundLayout from "./Components/BackgroundLayout";
import Weathercard from "./Components/Weathercard";
import Minicard from "./Components/Minicard";

import { SwiperSlide, Swiper } from "swiper/react";

function App() {
  const [input, setinput] = useState("");
  const { weather, newlocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setinput("");
  };

  return (
    <>
      <div className="w-full h-screen px-8 text-white">
        <nav className="w-full p-3 flex justify-between md:items-center flex-col md:gap-0 gap-4 md:flex-row">
          <h1 className="font-bold tracking-wide text-2xl">KD'S Weather App</h1>

          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
            <img src={serch} alt={"search"} className="w-[1.5rem] h-[1.5rem]" />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submitCity();
                }
              }}
              type="text"
              className="focus:outline-none w-full text-[#212121] text-lg"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
        </nav>
        <BackgroundLayout></BackgroundLayout>

        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
          <Weathercard
            place={newlocation}
            temperature={weather.temp}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          {/* <div
   
            className="hidden  md:flex items-center justify-center gap-3 min-h-[20rem] md:flex-wrap    w-[100%]  md:w-[60%]"
          >
            {values?.slice(1, 7).map((curr) => {
              return (
                <Minicard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              );
            })}
          </div> */}

          {/* swiper starts */}

          
        </main>
      </div>
    </>
  );
}

export default App;
