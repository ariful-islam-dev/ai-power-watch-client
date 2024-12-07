import { Link, useParams } from "react-router";
import Navigation from "../components/Navbar/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setPath } from "../assets/reducer/pathReducer";
import { FaStar } from "react-icons/fa";
import Loading from "../components/Loading";

const ProductDetails = () => {
  document.title = "Product Details | AI-Power Watch";

  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();
  const data = useSelector((state) => state.data.data);
  console.log(data);

  // Update Storepath
  const dispatch = useDispatch();
  useEffect(() => {
    const productItem = data.find((item) => item._id === productId);
    setProduct(productItem);
    setImage(productItem?.images[0]);
    if (productItem?._id === productId) {
      setIsLoading(false);
    }
    dispatch(setPath({ current: "/shop/" + productId }));
  }, [dispatch, productId, data]);

  // console.log(product);
  return (
    <div className="dark:bg-secondary bg-teal-50">
      <Navigation />
      <div className="container px-5 mx-auto md:px-0">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="py-5">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product?.title}
            </h2>
            <div className="grid grid-cols-8 gap-4 py-5 lg:gap-4 md:gap-3">
              <div className="flex flex-col items-center col-span-12 gap-4 md:flex-row md:col-span-5">
                <div className="flex order-2 h-full gap-2 md:order-1 md:justify-center md:flex-col">
                  <div className="w-12 h-12 border-2 border-teal-700 md:w-24 md:h-24">
                    <img
                      src={product?.images[0]}
                      alt="Product Image"
                      onClick={() => setImage(product?.images[0])}
                    />
                  </div>
                  <div className="w-12 h-12 border-2 border-teal-700 md:w-24 md:h-24">
                    {" "}
                    <img
                      src={product?.images[1]}
                      alt="Product Image"
                      onClick={() => setImage(product?.images[1])}
                    />
                  </div>
                </div>
                <div className="order-1">
                  <img
                    className="w-full p-8 rounded-t-lg"
                    src={image}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <p className="py-5 mt-2 text-lg text-teal-700 dark:text-teal-200">
                  {product?.description}
                </p>

                <h4 className="mb-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Brand: {product?.brand}
                </h4>
                <div className="mb-6">
                  <label className="my-5 dark:text-teal-50 ">Avarage Rating</label>
                  <div className="flex items-center">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        className="w-5 h-5"
                        color={
                          i < Math.floor(product?.averageRating) ? "orange" : "gray"
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-6 dark:text-teal-50">
                  <label htmlFor="">Who Can Use It?</label>
                  <ul className="list-disc list-inside ">
                    {product?.categories.map((cat) => (
                      <li key={cat}>{cat}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-start dark:text-teal-50">
                  <label htmlFor="" className="mr-2 text-3xl">Quantity</label>:
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-2 text-2xl font-bold text-teal-800 rounded-md dark:text-teal-50"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-2xl font-bold text-teal-800 dark:text-teal-50">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-2xl font-bold text-teal-800 rounded-md dark:text-teal-50"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2.5 mb-5">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Price: ${product?.price}
                  </span>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">Stock: {product?.stock}</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Link
                    to="#"
                    className="px-3 py-2 text-white rounded-md dark:border-2 dark:border-teal-50 bg-black-600 "
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="#"
                    className="px-3 py-2 text-white bg-teal-600 rounded-md dark:border-2 dark:border-teal-600 "
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
