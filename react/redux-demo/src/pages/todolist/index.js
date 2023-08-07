import { useEffect, useState } from "react";
import store from "../../store";
import { add_item, change_value } from "../../store/actions";

function TodoList() {
  const [_list, setList] = useState([1, 2, 3]);
  const [_inputValue, setInputValue] = useState();

  useEffect(() => {
    store.subscribe(() => {
      console.log("监听了");
      const { inputValue, list } = store.getState();
      setInputValue(inputValue);
      setList(list);
    });
  },[]);

  const handleSubmit = () => {
    const action = add_item();
    store.dispatch(action);
  };

  const handleChange = (e) => {
    console.log(e.target.value, 22222222);
    const action = change_value(e.target.value);
    store.dispatch(action);
  };
  return (
    <>
      <input type="text" value={_inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>提交</button>
      <ul>
        {_list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoList;
