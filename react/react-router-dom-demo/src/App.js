import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      {/* 路由占位符 */}
      <Outlet></Outlet>
    </>
  )
}

export default App;
