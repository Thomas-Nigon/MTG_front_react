import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme-proviter";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="app">
          <Navbar />
          <Outlet />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
