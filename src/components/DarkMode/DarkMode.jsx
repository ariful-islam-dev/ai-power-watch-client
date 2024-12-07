import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";


const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-800 bg-transparent rounded dark:text-gray-200"
    >
      {theme === 'light' ? <FaSun /> : <FaMoon/>} 
    </button>
  );
};

export default DarkMode;
