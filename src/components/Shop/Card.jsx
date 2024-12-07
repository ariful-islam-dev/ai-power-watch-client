/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ product }) => {
  return (
    <div>
      <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-lg bg-teal-50 dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg"
            src={product?.images[0]}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/shop/${product?._id}`}>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {product?.title.slice(0, 25) + "..."}
            </h5>
          </Link>
          <div className="flex items-center py-3">
                  {[...Array(5)].map((star, i) => (
                    <FaStar
                      key={i}
                      className="w-5 h-5"
                      color={
                        i < Math.floor(3) ? "orange" : "gray"
                      }
                    />
                  ))}
                </div>
          <div className="flex items-center justify-between mt-2.5 mb-5">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product?.price}
            </span>
            <span className="text-xl font-bold text-teal-900 dark:text-teal-50">Stock: {product?.stock}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            
            
            <Link
              to="#"
              className="px-3 py-2 text-sm font-medium text-center rounded-lg bg-black-700 text-teal-50 dark:text-teal-900 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Buy Now
            </Link>
            <Link
              to="#"
              className="px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg dark:bg-success dark:text-secondary hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
