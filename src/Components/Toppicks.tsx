import { ChevronRight } from 'lucide-react';

import { TopPicksStocks } from "../constants/NFTOwnedPersons"
const Toppics = () => {
  return (
    <div className="p-2 rounded-xl flex flex-col w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Top Picks</h2>
        <button className="text-black-400 hover:text-gray-600 pr-8">...</button>
      </div>
      {/* code for top pics */}


      <div className="bg-gray-50 p-8 rounded">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2">
          {TopPicksStocks.map((stock, index) => (
            <div 
              key={index}
              className="rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
              <div className={`${stock.backgroundColor} w-1 h-10 rounded-md `} />
                <div className='mx-2'>
                  
                  <h2 className="font-semibold text-gray-800">{stock.name}</h2>
                  <p className=" text-xs font-bold text-black/30">
                    $ {stock.price}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                  </div>
                  <p className="mt-1 text-sm font-mono text-black/30">
                    {stock.ether} Ether
                  </p>
                </div>
                  <ChevronRight/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    

    </div>
  )
}

export default Toppics