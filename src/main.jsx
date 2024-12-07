// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Routers } from "react-router";
import { Provider } from "react-redux";
import { store } from "./assets/store/store.js";
import { ThemeProvider } from "./components/DarkMode/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Routers>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </Routers>
);
