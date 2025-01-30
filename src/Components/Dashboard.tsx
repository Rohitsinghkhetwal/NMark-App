import InvestmentStats from "./InvestmentStats";
import Mycards from "./Mycards";
import MyportFolio from "./MyportFolio";
import NftMarketplace from "./NftMarketplace";
import Toppicks from "./Toppicks";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
            <NftMarketplace/>
            <InvestmentStats/>
          </div>

          <div>
            <MyportFolio/>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 grid gap-6">
         
          <div className="">
            <Mycards/>
            <Toppicks/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;