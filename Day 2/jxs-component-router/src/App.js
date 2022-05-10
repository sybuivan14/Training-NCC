import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import data from "./data/data";
import Banner from "./components/Banner";
import Content from "./components/Content";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      
    </div>
  );
}

export default App;
