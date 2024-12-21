import React, { useState } from "react";

type StateDataType = {
  count: number;
  age: number;
};

const Counter: React.FC = () => {
  let [data, setData] = useState<StateDataType>({ count: 100, age: 18 });
  //   let [count, setCount] = useState<number>(100);
  //   let [age, setAge] = useState(18);

  return (
    <div>
      <p> Count : {data.count} </p>
      <button
        className="btn btn-primary"
        onClick={() => setData({ ...data, count: data.count + 1 })}
      >
        {" "}
        Count++{" "}
      </button>
      <hr />
      <p> Age : {data.age} </p>
      <button className="btn btn-primary"> Age++ </button>
    </div>
  );
};

export default Counter;
