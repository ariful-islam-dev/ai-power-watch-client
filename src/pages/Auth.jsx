import { Link } from "react-router";
// import Register from "../components/Register";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "../assets/reducer/pathReducer";
import { useEffect, useState } from "react";

const fields = [
  {
    name: "Your Full Name",
    type: "text",
    placeholder: "Ariful Islam",
    id: "name",
    login: false
  },
  {
    name: "Your Email Address",
    type: "email",
    placeholder: "name@company.com",
    id: "email",
    login: true
  },
  {
    name: "Your Password",
    type: "password",
    placeholder: "••••••••",
    id: "password",
    login: true
  },
  {
    name: "Confirm Password",
    type: "password",
    placeholder: "••••••••",
    id: "confirm-password",
    login: false
  },
];

const Auth = () => {
  const [login, setLogin] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  const dispatch = useDispatch();
  const urlPath = useSelector((state) => state.path);
  const url = window.location.pathname;

  useEffect(() => {
    // Update Storepath
    dispatch(setPath({ current: "/login" }));
  }, [url, dispatch]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          AI Power Watch
        </a>
        <div className="w-full bg-teal-100 border border-teal-500 rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-teal-800 dark:border-teal-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-teal-900 text-shadow-md md:text-2xl dark:text-white">
                {login ? "Login to your account" : "Register a new account"}
              </h1>
              <Link to={urlPath.prev}>
                <FaArrowLeft />
              </Link>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              {fields.map((field, key) => {
               return login ? (
                  <div key={key} className={`${login && field.login ? "block" : "hidden"}`}>
                    <label
                      htmlFor={field.id}
                      className={`block mb-2 text-sm font-medium text-teal-900 dark:text-white`}
                    >
                      {field.name}
                    </label>
                    <input
                      type={field.type}
                      name={field.id}
                      id={field.id}
                      className="bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={field.placeholder}
                      required=""
                    />
                  </div>
                ) : (
                    <div key={key} >
                    <label
                      htmlFor={field.id}
                      className={`block mb-2 text-sm font-medium text-teal-900 dark:text-white`}
                    >
                      {field.name}
                    </label>
                    <input
                      type={field.type}
                      name={field.id}
                      id={field.id}
                      className="bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={field.placeholder}
                      required=""
                    />
                  </div>
                )
              })}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {login ? "Login" : "Sign up"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {login ? (
                  <span>
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={handleToggle}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      onClick={handleToggle}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </button>
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
