const Mycards = () => {
  return (
    <div className="p-4 flex flex-col bg-gray-100 ">
      <h2 className="text-xl font-semibold mb-6">My Cards</h2>

      {/* Wrapper for cards */}
      <div className="relative">
        {/* Shadow Card (Behind Effect) */}
        <div className="absolute -top-4 -left-4 bg-purple-700 text-white p-6 rounded-2xl shadow-xl w-full h-full scale-95 transform" />

        {/* Foreground Card */}
        <div className="relative bg-purple-600 text-white p-6 rounded-2xl shadow-md">
          <h2 className="text-sm mb-2">Balance</h2>
          <p className="text-2xl font-bold mb-2">$12,500</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg">Monthly Profit</p>
            <span className="text-green-400 bg-white/30 px-2 py-1 rounded-md font-semibold">
              +15%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycards;
