  import React, { useEffect, useState } from "react";
  import downloadIcon from "../../assets/image/icon-downloads.png";
  import ratingsIcon from "../../assets/image/icon-ratings.png";
  import { getStoreApps, removeFromStore } from "../../components/utils/LocalStorage";
  import { toast } from "react-toastify";

  const Installation = () => {

    const [apps, setApps] = useState([]);

   useEffect(() => {
  const loadApps = () => {
    const storedApps = getStoreApps();
    setApps(Array.isArray(storedApps) ? storedApps : []);
  };

  loadApps();  

  window.addEventListener("storageUpdated", loadApps);

  return () => {
    window.removeEventListener("storageUpdated", loadApps);
  };
}, []);

    const handleRemove = (id) => {
      removeFromStore(id);

          
        // const updatedApps = apps.filter((app) => app.id !== id);
        // setApps(updatedApps);

        toast.success("App Uninstalled Successfully!");
        };

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
          <h2 className="text-2xl mt-4 text-center font-bold">{apps.length} Apps Found</h2>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Sort By Size"
          />
        </div>
 
        {apps.length === 0 && (
          <p className="text-center mt-10 text-red-400">
            No apps installed yet  
          </p>
        )}  

        {/* Apps list */}
        <div>
          {Array.isArray(apps) &&
            apps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
            >
            <h3 className="font-bold">{app.title}</h3>
            <div className="flex gap-4"> 
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
                                  <div>
                                    <p className="text-sm text-gray-500"> {app.size} MB </p>
                                  </div>
          </div>
              <button
                onClick={() => handleRemove(app.id)}
                className="btn btn-success"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Installation;
