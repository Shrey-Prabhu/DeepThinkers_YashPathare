import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { fetchMarketData } from "../api/marketData";

const StockChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMarketData().then(setData);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Stock Price Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
