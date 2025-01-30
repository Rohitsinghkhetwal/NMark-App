import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesChart = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const salesData = response.data.products.slice(0, 12);

      const labels = [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const dataset1 = salesData.map(() => Math.random() * 500);
      const dataset2 = salesData.map(() => Math.random() * 400);

      setChartData({
        labels,
        datasets: [
          {
            label: "2021 Sales",
            data: dataset1,
            borderColor: "#d63384",
            backgroundColor: "rgba(214, 51, 132, 0.3)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "2020 Sales",
            data: dataset2,
            borderColor: "#343a40",
            backgroundColor: "rgba(52, 58, 64, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching sales data", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded w-full">
      <h2 className="text-xl font-bold">Charts</h2>
      <div className="w-full">
        {chartData ? (
          <Line data={chartData} />
        ) : (
          <p className="text-lg">Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default SalesChart;
