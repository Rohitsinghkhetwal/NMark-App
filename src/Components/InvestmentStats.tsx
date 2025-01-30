import { Calendar, TrendingUp, CreditCard } from "lucide-react";

const InvestmentStats = () => {
  const stats = [
    {
      icon: <TrendingUp className="text-white-500" size={24} />,
      title: "Total Investment",
      amount: "0.56 Ether",
      color: "text-orange-500",
      backgroundColor: "bg-orange-500",

    },
    {
      icon: <Calendar className="text-white-500" size={24} />,
      title: "Weekly Returns",
      amount: "0.005 Ether",
      color: "text-green-500",
      backgroundColor: "bg-green-500",
    },
    {
      icon: <CreditCard className="text-white-500" size={24} />,
      title: "Expenses",
      amount: "0.005 Ether",
      color: "text-pink-500",
      backgroundColor: "bg-red-500",
    },
  ];

  return (
    <div className="p-2 mt-4 rounded-xl flex flex-col w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Investment Stats</h2>
        <button className="text-black-400 hover:text-gray-600">...</button>
      </div>

      <div className="flex gap-6 bg-white p-6 rounded-xl">
        {/* Stats List */}
        <div className="flex flex-col gap-5 w-1/2">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className={`rounded-lg mx-2 p-2 ${stat.backgroundColor}`}>{stat.icon}</div>
              <div>
                <p className="text-gray-700">{stat.title}</p>
                <p className={`text-x font-semibold ${stat.color}`}>
                  {stat.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bar Graph */}
        <div className="relative">
          <div className="h-full rounded-md flex items-end relative">
            <div
              className="bg-orange-500 w-2 mx-2 rounded transition-all"
              style={{ height: "75%" }}
            ></div>
            <div
              className="bg-green-500 w-2 mx-2 rounded transition-all"
              style={{ height: "50%" }}
            ></div>
            <div
              className="bg-red-500 w-2 mx-2 rounded transition-all"
              style={{ height: "30%" }}
            ></div>

            {/* Max & Min Labels */}
            <div className="absolute inset-y-0 right-[-4rem] flex flex-col justify-between text-gray-400">
              <span className="text-sm">Max</span>
              <span className="text-sm">Min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentStats;
