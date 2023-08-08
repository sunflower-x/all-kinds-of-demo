import MyLayout from './layout/index'
import { useRoutes,useLocation,useNavigate } from 'react-router-dom';
import routes from './router';
import { useEffect } from 'react';
const App = () => {
  const location=useLocation()
  const outlet =useRoutes(routes)
  const navigate=useNavigate()
  useEffect(()=>{
    console.log("执行了");
    console.log(location.pathname,11111);
    if(location.pathname!='/login'){
      let token=localStorage.getItem('token')
      if(!token){
        navigate('/login')
      }
      // console.log(token);
    }
  },[location])
  return (
    <>
    {/* <Outlet/> */}
    {outlet}
    {/* <MyLayout/> */}
    </>
  );
};
export default App;
