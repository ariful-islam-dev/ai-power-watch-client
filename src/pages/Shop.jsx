import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navbar/Navigation";
import { setPath } from "../assets/reducer/pathReducer";
import Card from "../components/Shop/Card";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";

const ShopPage = () => {
  document.title = "Shop Now | AI-Power Watch";
  const [products, setProducts] = useState([]);

  // Update Storepath
  const dispatch = useDispatch();
  
  const { data: extData } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(setPath({ current: "/shop" }));
    setProducts(extData);
  }, [dispatch, extData]);
  console.log(products)

  return (
    <div className="dark:bg-secondary bg-teal-50">
      <Navigation />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-4 py-5 place-items-center lg:gap-4 md:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {products.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            products.length > 0 &&
            products.map((product) => (
              <Card key={product._id} product={product} />
            ))
          )}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default ShopPage;
