import {  Link, Outlet } from "react-router-dom";
import Login from "./pages/login/index";
import Home from "./pages/home/index"
import About from "./pages/about/index"
function App() {
  return (
    <>
      {/* <Login /> */}
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Outlet></Outlet>
    </>
  );
}
export default App;
