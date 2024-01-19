import { useState } from "react";

const CounterApp = () => {
  const [counterBtn, setCounterBtn] = useState(0);
  return (
    <div>
      <h1>Counter Value is: {counterBtn}</h1>
      <div className="flex m-2 p-4">
        <button
        className="p-4 m-4 bg-gray-400 rounded-lg"
          onClick={() => {
            setCounterBtn(counterBtn + 1);
          }}
        >
          Inc
        </button>
        <button
          className="p-4 m-4 bg-gray-400 rounded-lg"
          onClick={() => {
            setCounterBtn(counterBtn - 1);
          }}
        >
          Dec
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
