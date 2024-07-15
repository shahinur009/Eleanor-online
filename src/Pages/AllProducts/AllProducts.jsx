import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const AllProducts = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Heading section */}
            <div className="w-full h-12 md:h-20 bg-pink-200 flex items-center justify-center shadow-md">
                <h1 className="text-pink-500 font-semibold text-2xl md:text-5xl">All Products</h1>
            </div>
            {/* left side products category sections */}
            <div className="w-full flex flex-1">
                <div className="w-28 md:w-64 bg-[#98FF98]">
                    <LeftSide></LeftSide>
                </div>
                {/* right side show all products here */}
                <div className="flex-1 bg-[#E6E6FA]">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;