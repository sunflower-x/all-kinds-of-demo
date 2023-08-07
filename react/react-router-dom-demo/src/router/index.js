import { Routes, Route,Navigate } from "react-router-dom";
import App from "../App";
import About from "../views/about/index";
import Home from "../views/home/index";

const baseRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          {/* 路由重定向 */}
          <Route path="/" element={<Navigate to="/home"/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  )
};

export default baseRouter;
