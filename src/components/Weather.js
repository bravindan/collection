import React, { useEffect, useState } from "react";
import { FaRegEye, FaWind, FaTemperatureLow, FaTint } from "react-icons/fa";

export default function Weather() {
  const [search, setSearch] = useState("Nairobi");
  const [weather, setWeather] = useState({});

  const date = new Date();

  // function searchTerm(e) {
  //   setSearch(e.target.value);
  // }

  useEffect(() => {
    fetchWeather(search);
  }, [search]);
  
  function fetchWeather(search) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=912e07c29b91a059015d9d6a9970fc43&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }

  function onSearch(e) {
    e.preventDefault();
    if (search === "") {
      alert("Input cannot be empty");
    } else {
      fetchWeather();

      setSearch("");
    }
  }

  return (
    <div className="w-full items-center justify-center flex flex-col px-4 lg:px-0 ">
      <h1 className="text-xl underline font-semibold">Weather Forecast</h1>
      <form
        onSubmit={onSearch}
        className="mt-1 h-16 w-full max-w-[450px] rounded-full mb-2"
      >
        <div className="h-full relative flex items-center justify-between p-2">
          <input
            type="text"
            placeholder="Type City/Location..."
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            className="text-sky-600 flex-1 bg-slate-100 outline-none placeholder:text-sky-500 text-[20px] font-light pl-6 h-full rounded-full  "
          />
          {/* <button type="submit"
         
          className=" w-20 h-12 rounded-full flex justify-center items-center bg-sky-500 hover:bg-sky-700 transition text-white text-xl "
        >
          Search
        </button> */}
        </div>
      </form>

      {typeof weather.main !== "undefined" ? (
        <>
          {/* card style */}
          <div className="w-full max-w-[450px] bg-slate-300 min-h-[484px] text-sky-600  rounded-[32px] py-6 px-6">
            <div>
              {/* top */}
              <div className="flex items-center gap-x-5">
                <div className="text-[87px]">
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="weather icon"
                  />
                </div>

                <div>
                  <div className="text-2xl font-semibold">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div>
                    {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                    {date.getUTCFullYear()}
                  </div>
                </div>
              </div>
              {/* body */}
              <div className="my-20">
                {/* temp */}
                <div className="flex items-center justify-center">
                  <div className="text-[124px] leading-none font-light">
                    {weather.main.temp}
                  </div>
                  <div className="text-4xl">&deg;C</div>
                </div>
                {/* description */}
                <div className="capitalize text-center">
                  {weather.weather[0].description}
                </div>
              </div>
              {/* card bottom */}
              <div className="max-w-[378px] mx-auto flex flex-col gap-y-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <FaRegEye />
                    </div>
                    <div>
                      Visibility
                      <span className="ml-2">
                        {weather.visibility / 1000}km
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <FaTemperatureLow />
                    </div>
                    <div className="flex">
                      Feels like
                      <span className="flex ml-2">
                        {weather.main.feels_like}&deg;C
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <FaTint />
                    </div>
                    <div>
                      Humidity
                      <span className="ml-2">{weather.main.humidity}%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <FaWind />
                    </div>
                    <div className="flex">
                      Wind
                      <span className="flex ml-2">
                        {weather.wind.speed} m/s
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
