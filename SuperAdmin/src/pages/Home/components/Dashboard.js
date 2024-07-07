import React from "react";



import LeftNavbar from "./LeftNavbar";
import Middle from "./Middle";

const Dashboard = () => {
  return (
    <>
      <div className="bg-black">
        <LeftNavbar/>
        <Middle/>
      </div>
    </>
  );
};

export default Dashboard;
