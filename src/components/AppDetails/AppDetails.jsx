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
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

   useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        setApp(found);
      });
  }, [id]);

   // 🔥 Convert ratings → chart format
  const chartData = app.ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));


  const handleInstall = () => {
    setInstalled(true);
    toast.success("App installed successfully!");
  };


  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">

      {/* ===== Top Section ===== */}
      <div className="flex gap-6 border-b pb-6">

        <img src={app.image} className="w-40 h-40 rounded" />

        <div>
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-gray-500">by {app.companyName}</p>

          <div className="flex gap-8 mt-4">
            <div>
              <p>Downloads</p>
              <h3>{app.downloads}</h3>
            </div>
            <div>
              <p>Rating</p>
              <h3>{app.ratingAvg}</h3>
            </div>
            <div>
              <p>Reviews</p>
              <h3>{app.reviews}</h3>
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
        </div>
      </div>

      {/* ===== Chart ===== */}
      <div>
        <h2 className="mb-4 font-semibold">Ratings</h2>

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

      {/* ===== Description ===== */}
      <div className="border-t pt-6">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-600">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
