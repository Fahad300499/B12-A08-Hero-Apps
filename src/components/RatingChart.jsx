import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RatingChart = () => {
  const data = [
    { name: "5 star", counts: 11500 },
    { name: "4 star", counts: 7000 },
    { name: "3 star", counts: 4000 },
    { name: "2 star", counts: 2500 },
    { name: "1 star", counts: 1500 },
  ];

  return (
    <div className="md:w-full h-[400px] bg-gray-50 p-4 rounded-xl shadow m-5">
      <h2 className="text-xl font-bold mb-4">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: "Counts", position: "insideBottomRight", offset: -5 }} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="counts" fill="#ff8c00" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
