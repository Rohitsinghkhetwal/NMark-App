import InvestmentStats from "./InvestmentStats";
import Mycards from "./Mycards";
import MyportFolio from "./MyportFolio";
import NftMarketplace from "./NftMarketplace";
import Toppics from "./Toppics";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 grid gap-6">
          
          <div>
            <NftMarketplace/>
          
          </div>
          
          <div>
            <InvestmentStats/>
            
          </div>
          
          <div>
            <MyportFolio/>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 grid gap-6">
         
          <div>
            <Mycards/>
          
          </div>
          
          <div>
            <Toppics/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;