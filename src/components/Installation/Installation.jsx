import React from "react";

const Installation = () => {
  return (
    <div>
      <h2 className="text-3xl mt-8 font-bold text-center">
        Your Installed Apps
      </h2>
      <p className="py-2  text-center" style={{ color: "#676282" }}>
        Explore All Trending Apps on the Market developed by us
      </p>
      {/*  */}
      <div className="flex justify-between px-6 items-center">
        <h2 className="text-2xl mt-4 text-center font-bold">1 Apps Found</h2>
        <fieldset className="fieldset">
          <input type="email" className="input" placeholder="Sort By Size" />
        </fieldset>
      </div>
    </div>
  );
};

export default Installation;
