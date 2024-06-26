//Chandan  There is no dynamic component
import React from "react";
import Stats from "./Stats";
import RecentMovies from "./RecentMovies";
import ManageADD from "./ManageADD";
import Movies from "../../Data/Movielist"
const Middle = () => {
  return (
    <div>
      <main className="ml-28 pt-5 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-3xl p-8 mb-5">
            <div className="flex items-center justify-center bg-slate-800 py-3 px-5 rounded-2xl mb-5">
                <div className="flex items-stretch">
                  <h1 className="text-3xl font-bold text-orange-400 py-2">
                    Manage Movies and Their Duration
                  </h1>
                </div>
              </div>
              <ManageADD/>
              <div className="grid grid-cols-2 gap-x-20">
                <Stats />
                <RecentMovies movies={Movies}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Middle;
