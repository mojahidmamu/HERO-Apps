import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import downloadIcon from "../../assets/image/icon-downloads.png";
import ratingsIcon from "../../assets/image/icon-ratings.png";
import reviewIcon from "../../assets/image/reviews.png";
// import { getStoreApps, saveApp } from "../../components/utils/LocalStorage";

  

const AppDetails = () => {

  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        setApp(found);
      });
  }, [id]);

  if (!app) return <p className="p-10">Loading...</p>;

  const chartData = app.ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));


  const handleInstall = () => {
    if (installed) {
    setMessage("⚠️ Already Installed!");
  } else {
    setInstalled(true);
    setMessage("✅ App installed successfully!");
  }

  setTimeout(() => {
    setMessage("");
  }, 2000);  
  };


  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div className="flex gap-6 border-b pb-6">
        <img src={app.image} className="w-60 h-60 rounded" />
        <div>
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-500">Developed by <span className="text-[#632EE3] font-semibold">{app.companyName}</span></p>
          <div className="flex gap-8 mt-4">
            <div>
              <img className="w-8 h-8" src={downloadIcon} alt="Downloads" />
              <p className="font-semibold">Downloads</p>
              <h3 className="font-extrabold text-5xl">{app.downloads}</h3>
            </div>
            <div>
              <img className="w-8 h-8"  src={ratingsIcon} alt="Ratings" />
              <p  className="font-semibold">Average Rating</p>
              <h3 className="font-extrabold text-5xl">{app.ratingAvg}</h3>
            </div>
            <div>
              <img className="w-8 h-8" src={reviewIcon} alt="Reviews" />
              <p className="font-semibold">Total Reviews</p>
              <h3 className="font-extrabold text-5xl">{app.reviews}</h3>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-5 py-2 text-white rounded ${
              installed ? "bg-gray-400" : "bg-green-500"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button> 
          {message && (
            <p
              className={`mt-3 text-center font-semibold ${
                message.includes("Already") ? "text-red-500" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-bold text-2xl">Ratings</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="value" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
 
      <div className="border-t pt-6">
        <h2 className="font-bold mb-2 text-2xl">Description</h2>
        <p className="text-gray-600">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
