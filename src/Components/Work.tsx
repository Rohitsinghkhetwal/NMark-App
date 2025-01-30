import { useState } from "react";

// Dummy properties array
const properties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: "$2,500/mo",
    location: "Manhattan, NY",
    beds: 1,
    baths: 1,
    sqft: 850,
    image: "https://picsum.photos/300/200?random=1",
    featured: true
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: "$3,800/mo",
    location: "Austin, TX",
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: "https://picsum.photos/300/200?random=2",
    featured: false
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: "$5,200/mo",
    location: "Miami, FL",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://picsum.photos/300/200?random=3",
    featured: true
  },
  {
    id: 4,
    title: "Mountain Cabin",
    price: "$1,800/mo",
    location: "Denver, CO",
    beds: 2,
    baths: 1,
    sqft: 1200,
    image: "https://picsum.photos/300/200?random=4",
    featured: false
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    price: "$8,500/mo",
    location: "Los Angeles, CA",
    beds: 2,
    baths: 2,
    sqft: 1500,
    image: "https://picsum.photos/300/200?random=5",
    featured: true
  },
  {
    id: 6,
    title: "Cozy Studio",
    price: "$1,200/mo",
    location: "Chicago, IL",
    beds: 0,
    baths: 1,
    sqft: 600,
    image: "https://picsum.photos/300/200?random=6",
    featured: false
  }
];

const Work = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter properties based on search term
  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          </div>
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full py-2 pl-8 pr-3 rounded-md border focus:ring-1 focus:ring-blue-300 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 px-2">
          Discover popular properties
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {filteredProperties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* Property Image */}
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              
              {/* Property Details */}
              <div className="p-3">
                {/* Featured Badge */}
                {property.featured && (
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    FEATURED
                  </span>
                )}

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mb-1">
                  {property.price}
                </p>
                
                {/* Title */}
                <h3 className="text-base font-semibold text-gray-800 line-clamp-1 mb-1">
                  {property.title}
                </h3>

                {/* Location */}
                <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                  {property.location}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{property.beds} bed{property.beds !== 1 && 's'}</span>
                  <span>{property.baths} bath{property.baths !== 1 && 's'}</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;