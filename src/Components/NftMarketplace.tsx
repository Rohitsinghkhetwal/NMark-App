import { User } from "lucide-react";

const NftMarketplace = () => {
  return (
    <div className=" p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">NFT Marketplace</h2>
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </div>

      
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <img
          src="/assets/p3.png"
          alt="House Andromeda"
          className="w-full h-64 object-cover"
        />
        
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent p-4 flex flex-col justify-end">
         
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
              Top Picks
            </span>
            <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-md">
              Featured
            </span>
          </div>

         
          <h3 className="text-white text-xl font-bold">House Andromeda</h3>
          <p className="text-sm text-gray-200">4.44 Ether ⭐⭐⭐⭐</p>

          
          <div className="flex justify-between items-center mt-2">
            <div></div>
            <div className="flex items-center gap-2">
              <User className="text-white" />
              <p className="text-sm text-white">24 bidders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftMarketplace;
