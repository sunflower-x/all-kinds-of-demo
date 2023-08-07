import TodoList from "./pages/todoList";
import { Provider } from "react-redux";
import store from './store/index'
function App() {
  return (
   <Provider store={store}>
   <TodoList/>
   </Provider>
  );
}

export default App;
