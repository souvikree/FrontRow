//Chandan Dynamic component
import React from "react";
const Stats = () => {
  return (
    <div>
      <div className="bg-slate-800 px-3 pt-5 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 text-slate-50">Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <div className="p-4 bg-orange-300 rounded-xl mb-4">
              <div className="font-bold text-xl text-gray-800 leading-none">
                Total Movies <br />
                <p className="mt-1">{/* Dynamic content */}</p>
              </div>
              <div className="mt-3">
                <div className="inline-flex items-center justify-center py-2 px-7 rounded-xl bg-white text-gray-800 hover:text-green-500 text-xl font-semibold transition">
                  200
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-100 rounded-xl">
              <div className="font-bold text-xl text-gray-800 leading-none">
                Earned Money <br />
                <p className="mt-1">{/* Dynamic content */}</p>
              </div>
              <div className="mt-3">
                <div className="inline-flex items-center justify-center py-2 px-7 rounded-xl bg-white text-gray-800 hover:text-green-500 text-xl font-semibold transition">
                  300k
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
            <div className="font-bold text-2xl leading-none">
              {/* Dynamic content */}
            </div>
            <div className="mt-1 font-bold">Weekly Earn</div>
            <div className="mt-3">
              <div className="inline-flex items-center justify-center py-2 px-7 rounded-xl bg-white text-gray-800 hover:text-green-500 text-xl font-semibold transition">
                100$
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
            <div className="font-bold text-2xl leading-none">
              {/* Dynamic content */}
            </div>
            <div className="mt-1 font-bold">Uploaded Movies</div>
            <div className="mt-3">
              <div className="inline-flex items-center justify-center py-2 px-7 rounded-xl bg-white text-gray-800 hover:text-green-500 text-xl font-semibold transition">
                100
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
