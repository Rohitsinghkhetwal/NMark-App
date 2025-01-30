import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../constants/NFTOwnedPersons";

const ChevronCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col p-2 w-full">
      <div className="flex justify-end items-center mb-2">
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar items-center"
      >
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center rounded-xl bg-gray-50 p-4 w-[270px] min-w-[270px] cursor-pointer hover:shadow-lg"
          >
            <img
              src={item.image}
              alt="img"
              className="rounded-xl w-[80px] h-[60px] object-cover"
            />
            <div className="ml-4">
              <h3 className="font-semibold text-sm whitespace-nowrap">
                {item.name}
              </h3>
              <p className="text-gray-500 mt-1 text-sm">{item.etherVal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChevronCards;
