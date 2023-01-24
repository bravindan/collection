import React from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import Movies from "./Movies";
import News from "./News";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center ">
        <header className="">
          <h1 className="text-3xl">Collections</h1>
        </header>
        <div class="flex flex-wrap mx-4">
          <div class="w-full md:w-1/3 px-4 py-6">
            <div class="bg-slate-100 rounded-lg shadow-lg overflow-hidden">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 text-center">
                  Weather Forecast
                </h3>
                <p class="text-gray-700 mb-4">
                  Our weather app is a comprehensive and user-friendly tool that
                  provides accurate and up-to-date weather information to users.
                  The app features a clean and intuitive interface that makes it
                  easy to access the information you need.With our app, you can
                  view the current weather conditions, including temperature,
                  humidity, wind speed, and more, for your current location or
                  any other location of your choice. Here, you'll always be in the know when it comes to the weather.
                </p>
                {/* <button class="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={window.href=}>Open</button> */}
                <p className="text-gray-600  text-center bg-sky-500 py-3 rounded-lg ">
                  <Link to="/weather" element={<Weather />}>
                    Open
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 py-6">
            <div class="bg-slate-100 rounded-lg shadow-lg overflow-hidden">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 text-center">Movies</h3>
                <p class="text-gray-700 mb-4">
                  Our movie app is designed to provide users with an enjoyable
                  and seamless streaming experience. The app offers a vast
                  collection of films from various genres, making it easy for
                  users to find the perfect movie to watch.Users can browse
                  through the collection by searching for specific titles,
                  filtering by genre, or browsing through the app's recommended
                  movies. With our app, you'll have access to a vast collection
                  of movies that you can stream anytime, anywhere. 
                </p>
                <p className="text-gray-600 text-center bg-sky-500 py-3 rounded-lg">
                  <Link to="/movies" element={<Movies />}>
                    Open
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 py-6">
            <div class="bg-slate-100 rounded-lg shadow-lg overflow-hidden">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 text-center">News</h3>
                <p class="text-gray-700 mb-4">
                  Our news app is designed to provide users with the latest news
                  and information from around the world. The app features a wide
                  range of news sources, including major newspapers, television
                  networks, and online publications, ensuring that users have
                  access to a diverse range of perspectives and opinions. With our app, you'll have access to a wide range of news sources, and you'll be able to customize your news feed to suit your interests and preferences.
                </p>
                <p className="text-gray-600 text-center bg-sky-500 py-3 rounded-lg">
                  <Link to="/news" element={<News />}>
                    Open
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
