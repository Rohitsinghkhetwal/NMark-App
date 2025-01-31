import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  

  //Hotels api fetching 
  const fetchHotels = async() => {
    setLoading(true);
    try {
      const url:string = import.meta.env.VITE_API_URL_PRODUCTION as string;
      const result = await axios.get(url);
      setdata(result.data);
      setFilteredData(result.data);
    }catch(err) {
      console.log("Something  went wrong !")
    }finally {
      setLoading(false);
    }
  }

  // Search Funtionality
  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
    const filtered = data.filter(
      (property: any) =>
        property.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        property.location?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchHotels();
  },[]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <input
            type="text"
            placeholder="Search properties..."
            className="w-[30%] mb-2 py-2 pl-8 pr-3 rounded-md border focus:ring-1 focus:ring-blue-300 text-sm"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />


      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 px-2">
          Discover popular properties
        </h2>
        
        {/* if api will fetching the loader will be here */}
        
        {
          loading ? (
            <div className="flex justify-center items-center my-10">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          ): (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
          {filteredData.map((property:any) => (
            <div 
              key={property._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* Slightly smaller image */}
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              
              <div className="p-3">
                {property.featured && (
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    FEATURED
                  </span>
                )}

                <p className="text-lg font-bold text-gray-900 mb-1">
                  $ {property.price_per_night}
                </p>
                
                <h3 className="text-base font-semibold text-gray-800 line-clamp-1 mb-1">
                  {property.name}
                </h3>

                <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                  {property.location}
                </p>

                {/* Tighter stats section */}
                <div className="flex justify-between text-xs text-gray-600 ">
                  <img src="/assets/bed.png" alt="img" width="20px" height="20px"/>
                  <span className="flex-1 text-center">{property.beds} bed{property.beds !== 1 && 's'}</span>
                  <img src="/assets/bath.png" alt="img" width="20px" height="20px"/>
                  <span className="flex-1 text-center">{property.baths} bath{property.baths !== 1 && 's'}</span>
                  <img src="/assets/squr.png" alt="img" width="20px" height="20px"/>
                  <span className="flex-1 text-center">{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>


          )
        }
        
        
      </div>
    </div>
  );
};

export default Hotels;