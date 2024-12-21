import React, { useContext, useState } from "react";

const CounterContext = React.createContext({
  count: 0,
  changeCounter: () => {},
});

const GrandParent = () => {
  const [count, setCount] = useState(10);
  return (
    <CounterContext.Provider
      value={{
        count,
        changeCounter: () => {
          setCount(count + 1);
        },
      }}
    >
      <p>Grand Parent</p>
      <Parent />
    </CounterContext.Provider>
  );
};

const Parent = () => {
  return (
    <div>
      <p>Parent</p>
      <Child />
      <AnotherChild />
    </div>
  );
};

const AnotherChild = () => {
  const ctx = useContext(CounterContext);
  return (
    <div>
      <p>Another Child - {ctx.count}</p>
    </div>
  );
};

const Child = () => {
  const ctx = useContext(CounterContext);
  return (
    <div>
      <p>Child - {ctx.count}</p>
      <button className="btn btn-primary" onClick={() => ctx.changeCounter()}>
        ++
      </button>
      <hr />
    </div>
  );
};

export default GrandParent;
