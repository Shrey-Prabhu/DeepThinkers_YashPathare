import React from "react";
import StockChart from "./StockChart";
import NewsFeed from "./NewsFeed";
import Recommendations from "./Recommendations";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Stock Market Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StockChart />
        <NewsFeed />
        <Recommendations />
      </div>
    </div>
  );
};

export default Dashboard;
