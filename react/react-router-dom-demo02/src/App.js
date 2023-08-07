import { useRoutes, Link } from "react-router-dom";
import router from "./router/index";
function App() {
  // 占位符
  const outlet = useRoutes(router);
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {outlet}
    </>
  );
}

export default App;
