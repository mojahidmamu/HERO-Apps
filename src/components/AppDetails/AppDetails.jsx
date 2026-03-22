import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"; 
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


// const reviewData = [
//   { name: "5★", value: 120 },
//   { name: "4★", value: 90 },
//   { name: "3★", value: 40 },
//   { name: "2★", value: 20 },
//   { name: "1★", value: 10 },
// ];
  

const AppDetails = () => {

   const { id } = useParams();

  const [apps, setApps] = useState([]);
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

   // 🔥 Fetch JSON from public folder
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  
  useEffect(() => {
    if (apps.length > 0) {
      const found = apps.find((item) => item.id === id);
      setApp(found);
    }
  }, [apps, id]);

  if (!app) return <p className="p-10">Loading...</p>;

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App installed successfully!");
  };

  return (
    <div>
      
      {/* App info section */}
      <div>
        {/* Left Image */}
        <img
          src="https://via.placeholder.com/200"
          alt="App"
          className="w-40 h-40 rounded-xl object-cover"
        />
        {/* Right Details */}
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold">My Awesome App</h1>

          <p className="text-gray-600">⭐ 4.5 Rating</p>
          <p className="text-gray-600">⬇️ 1M+ Downloads</p>
          <p className="text-gray-600">💬 12K Reviews</p>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-5 py-2 rounded-lg text-white transition ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>


      {/* Review section */}
      <div>

      </div>
      {/* Description section  */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
