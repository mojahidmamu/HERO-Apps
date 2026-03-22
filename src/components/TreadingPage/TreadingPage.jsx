import downloadIcon from "../../assets/image/icon-downloads.png";
import ratingsIcon from "../../assets/image/icon-ratings.png";
// import Image2 from "../../assets/image/demo-app (1).webp";
// import Image3 from "../../assets/image/demo-app (2).webp";
// import Image4 from "../../assets/image/demo-app (3).webp";
// import Image5 from "../../assets/image/demo-app (4).webp";
// import Image6 from "../../assets/image/demo-app (5).webp";
// import Image7 from "../../assets/image/demo-app (6).webp";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

import appsData from "../../../public/data.json";


const TreadingPage = () => {

   const apps = appsData.slice(0, 8);

  return (
    <div>
      <h2 className="text-3xl mt-8 font-bold text-center">Trending Apps</h2>
      <p className="py-2  text-center" style={{ color: "#676282" }}>
        Explore All Trending Apps on the Market developed by us
      </p>
      {/* All apps */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center items-center mt-6 mx-8">
        {
          apps.map( (app) => (
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
        }
      </div>

      {/* Last button  */}
      <div className="flex mt-5 justify-center ">
        <Link to="/apps">
          <button className="btn btn-dash btn-primary">Show More </button>
        </Link>
      </div>
    </div>
  );
};

export default TreadingPage;
