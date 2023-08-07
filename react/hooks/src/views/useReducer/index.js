import { useReducer } from "react";
function UseReducerDemo() {
  const initState = {
    id: 1,
    name: "jack",
    age: 23,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increaseAge":
        return {
          ...state,
          age: state.age + 1,
        };
      case "changeName":
        return {
          ...state,
          name: "thomas",
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      {state.age}
      {state.name}
      <button onClick={() => dispatch({ type: "increaseAge" })}>
        changeAge
      </button>
      <button onClick={() => dispatch({ type: "changeName" })}>
        changeName
      </button>
    </>
  );
}

export default UseReducerDemo;
