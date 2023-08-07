import App from "../App";
import Home from "../pages/home/index";
import About from "../pages/about/index";
import { Routes, Route } from "react-router-dom";

const baseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  );
};

export default baseRouter;
