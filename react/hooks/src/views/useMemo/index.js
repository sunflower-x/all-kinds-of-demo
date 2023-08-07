import { useMemo, useState } from "react";
import ChildComponent from "./childComponent";

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState([
    { name: "js", price: 23 },
    { name: "java", price: 25 },
    { name: "go", price: 28 },
  ]);

  const onClick = () => {
    setCount(count + 1);
  };

  /* const filterList = list.filter((item) => {
    return item.price > 24;
  }); */
  const filterList = useMemo(() => {
    list.filter((item) => {
      return item.price > 24;
    });
  });

  return (
    <div>
      <button onClick={onClick}>{count}</button>
      <ChildComponent list={filterList} />
    </div>
  );
}

export default UseMemoDemo;
