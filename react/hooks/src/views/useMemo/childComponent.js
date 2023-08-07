import React from "react";
function ChildComponent({ list }) {
  return (
    <>
      <ul>
        {/* {list} */}
        {/* {list.map((item) => {
          return <li>{item}</li>;
        })} */}
      </ul>
      <span>{Math.random()}</span>
    </>
  );
}

export default React.memo(ChildComponent);
// export default Button;
