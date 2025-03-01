import React from "react";

const Recommendations = () => {
  const recommendations = [
    { stock: "AAPL", suggestion: "Buy" },
    { stock: "TSLA", suggestion: "Hold" },
    { stock: "GOOGL", suggestion: "Sell" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Stock Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index} className="mb-2">
            <strong>{rec.stock}</strong>: <span className="text-green-500">{rec.suggestion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
