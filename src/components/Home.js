import React, {} from "react";


export default function Home() {

  return (
    <main className= "">
      <div className="flex flex-col items-center ">
        <header className="">
          <h1 className="text-3xl">Collections</h1>
        </header>
        <div class="flex flex-wrap -mx-4">
  <div class="w-full md:w-1/3 px-4 py-6">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-4 text-center">Weather Forecast</h3>
        <p class="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-full">View More</button>
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/3 px-4 py-6">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-4 text-center">Movies</h3>
        <p class="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-full">View More</button>
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/3 px-4 py-6">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-4 text-center">News</h3>
        <p class="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-full">View More</button>
      </div>
    </div>
  </div>
</div>
 
      </div>
    </main>
  );
}

