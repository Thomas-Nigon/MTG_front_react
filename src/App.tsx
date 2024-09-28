import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme-proviter";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
