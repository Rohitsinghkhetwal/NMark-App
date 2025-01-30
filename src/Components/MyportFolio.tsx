import { NFTOwned } from "../constants/NFTOwnedPersons";
import ChevronCards from "./ChevronCards";
import SalesChart from "./SaleCharts";

const MyPortfolio = () => {
  return (
    <div className="p-2 mt-4 flex flex-col gap-4 w-full">
      {/* Main Container */}
      <div className="flex flex-row gap-8">
        {/* Left Section - NFTs Owned */}
        <div className="flex flex-col gap-4 w-1/3 p-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">NFT's owned</h2>
            <button className="text-gray-600 hover:text-black">...</button>
          </div>
          {NFTOwned.map((nft: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <div>
                <h2 className="text-lg font-medium">{nft.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <img src={nft.nftIcon} alt="nft-icon" className="w-5 h-5" />
                  <h1 className="text-xl font-semibold">
                    {nft.etherValue} Ether
                  </h1>
                </div>
              </div>
              <div>
                <img src={nft.barValue} alt="graph" className="w-12 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - My Portfolio */}
        <div className="flex flex-col w-2/3 p-2 rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">My Portfolio</h2>
            <button className="text-gray-600 hover:text-black">...</button>
          </div>

          {/* Horizontal Cards */}
          <div className="flex overflow-x-auto">
            <ChevronCards/>
          </div>

          {/* Graph Placeholder */}
          <div className="mt-2">
            <h3 className="text-lg font-medium">Total Distributions</h3>
            <div className="w-full h-fit rounded-xl flex items-center justify-center mt-2">
              <SalesChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
