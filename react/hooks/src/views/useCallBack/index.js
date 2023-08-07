import { useCallback, useState } from "react";
import Button from "./button";


function UseCallBackDemo() {
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);
  const [count03, setCount03] = useState(0);

  const handleBtn1 = () => {
    setCount01(count01 + 1);
  };
  const handleBtn2 = () => {
    setCount02(count02 + 1);
  };
  const handleBtn3 = useCallback(() => {
    setCount03(count03 + 1);
  }, [count03]);

  return (
    <div>
      <Button onClickButton={handleBtn1}>btn1</Button>
      <Button onClickButton={handleBtn2}>btn2</Button>
      <Button onClickButton={handleBtn3}>btn3</Button>
    </div>
  );
}

export default UseCallBackDemo;
