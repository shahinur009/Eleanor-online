import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSide = () => {
    return (
        <div className="p-3 text-[#1A237E]">
            <h1 className="capitalize mb-3 font-bold text-xl md:text-3xl">All Category</h1>
            <ul className="space-y-3">
                <li>
                    <Link className="flex items-center space-x-2 underline font-bold" to="#">
                        <span>Offer</span>
                        <FaArrowRight />
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 underline font-bold" to="#">
                        <span>Shoes Collections</span>
                        <FaArrowRight />
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 underline font-bold" to="#">
                        <span>Bags Collections</span>
                        <FaArrowRight />
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 underline font-bold" to="#">
                        <span>Jewellery Collections</span>
                        <FaArrowRight />
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 underline font-bold" to="#">
                        <span>Cloths Collections</span>
                        <FaArrowRight />
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 underline font-bold" to="#">
                        <span>Teddy Bear Collections</span>
                        <FaArrowRight />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftSide;