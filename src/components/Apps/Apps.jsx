import downloadIcon from "../../assets/image/icon-downloads.png";
import ratingsIcon from "../../assets/image/icon-ratings.png";
// import Image2 from "../../assets/image/demo-app (1).webp";
// import Image3 from "../../assets/image/demo-app (2).webp";
// import Image4 from "../../assets/image/demo-app (3).webp";
// import Image5 from "../../assets/image/demo-app (4).webp";
// import Image6 from "../../assets/image/demo-app (5).webp";
// import Image7 from "../../assets/image/demo-app (6).webp";

import appsData from "../../../public/data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const Apps = () => {

  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
  app.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      <h1 className="text-3xl mt-4 text-center font-bold">
        Our All Applications
      </h1>
      <p className="py-6 text-center mt-2" style={{ color: "#676282" }}>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* State and search--  */}
      <section>
        <div className="flex justify-between px-6 items-center">
          <h2 className="text-2xl mt-4 text-center font-bold">
          ({filteredApps.length}) Apps Found
          </h2>
          <fieldset className="fieldset">
            <input 
              type="email" 
              className="input" 
              placeholder="Search" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </fieldset>
        </div>

      {/* All apps */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center items-center mt-6 mx-8">
        {
          filteredApps.length === 0 ? (
            <p className="text-center text-4xl font-bold text-red-500 mt-10 col-span-full">
              No App Found
            </p>
          ) : (
            filteredApps.map((app) => (
              <Link key={app.id} to={`/apps/${app.id}`}>
                <div className="border p-4 rounded-sm shadow-md w-72 hover:shadow-xl transition cursor-pointer">
                  <img
                    className="w-full h-40 object-cover rounded-xl mb-3"
                    src={app.image}
                    alt={app.title}
                  />
                  <p className="font-bold">{app.title}</p>

                  <div className="flex mt-2 justify-between">
                    <div
                      className="h-10 px-2 rounded-sm flex items-center gap-2"
                      style={{ backgroundColor: "#F1F5E8" }}
                    >
                      <img className="w-5 h-5" src={downloadIcon} alt="" />
                      <p className="font-bold text-[#00D390]">
                        {app.downloads}
                      </p>
                    </div>

                    <div
                      className="h-10 px-2 rounded-sm flex items-center gap-2"
                      style={{ backgroundColor: "#FFF0E1" }}
                    >
                      <img className="w-5 h-5" src={ratingsIcon} alt="" />
                      <p className="font-bold text-[#FF8811]">
                        {app.ratingAvg}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )
        }
      </div>
      </section>
    </div>
  );
};

export default Apps;
