import React from "react";

const ManageADD = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-20">
        <button className="hover:bg-red-300 group p-4 bg-green-400 rounded-xl mb-4 font-bold text-xl text-gray-800 leading-none flex justify-end align-middle">
          <h1 className="mx-20 mt-2">Add movies</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            class=" animate-bounce group cursor-pointer outline-none group-hover:rotate-90 stroke-neutral-950 fill-none group-hover:fill-green-400 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button>
        <button className=" group p-4 bg-orange-400 rounded-xl mb-4 font-bold text-xl text-gray-800 leading-none flex justify-end align-middle">
          <h1 className="mx-20 mt-2">Manage movies</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-8 animate-bounce mt-2"
          >
            <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ManageADD;
