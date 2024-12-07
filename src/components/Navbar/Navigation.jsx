import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Search from "./Search";
import { Link, useNavigate } from "react-router";
import useModal from "../../hooks/useModal";
import CartModal from "../Modal/CartModal";
import UserMenu from "./UserMenu";
import logo  from './../../assets/images/logo.png'
import DarkMode from "../DarkMode/DarkMode";

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Order",
    path: "/order",
  },
];
const Navigation = () => {
  const [path, setPath] = useState("/");

  const { isOpen, handleModal } = useModal();
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const isLogin = false;
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <>
      <div className="bg-teal-100 border-b-[1px] border-black-300 dark:bg-teal-800 shadow-md">
        <nav className="container">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <Link
              to={"/"}
              className="flex items-center order-1 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="h-8"
                alt="WATCH LOGO"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <span className="md:hidden lg:inline">AI</span>
                <span className="md:hidden lg:inline">Power</span>
                <span>Watch</span>
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center justify-center order-3 w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default "
              aria-expanded={isMobile}
              onClick={() => setIsMobile(!isMobile)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                isMobile ? "block" : "hidden"
              } w-full md:block md:w-auto order-4 md:order-2`}
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                {menus.map((menu, key) => (
                  <li key={key}>
                    <Link
                      to={menu.path}
                      className={`block px-3 py-2  uppercase ${
                        menu.path === path
                          ? "md:text-teal-700 md:border-b-4 md:border-teal-700 md:bg-transparent bg-teal-700 text-teal-50"
                          : "text-teal-900"
                      }  rounded  md:hover:bg-transparent md:text-md hover:bg-teal-300 md:hover:text-teal-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
               {
                isMobile && (
                  <div className="w-full mt-2 md:hidden">
                    <Search />
                  </div>
                )
               }
              </ul>
            </div>
            <div className="flex items-center order-2 gap-5 md:order-3 ">
              <DarkMode/>
              <div className="hidden md:block md:max-w-60 lg:max-w-full">
                <Search />
              </div>
              <div
                className="relative flex items-center justify-end gap-3 cursor-pointer dark:text-teal-50"
                onClick={() => handleModal(!isOpen)}
                
              >
                <span className="p-0.5 w-4 h-4 text-[10px] absolute top-[-10px] left-5 text-center text-white rounded-full bg-danger">
                  2
                </span>
                <TiShoppingCart className="top-0 left-0 w-10 h-10 " />
              </div>
              <div>
                {isLogin ? (
                  <UserMenu />
                ) : (
                  <button
                    className="px-5 py-2 text-white bg-teal-700 rounded"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <CartModal isOpen={isOpen} handleModal={handleModal} />
    </>
  );
};

export default Navigation;
