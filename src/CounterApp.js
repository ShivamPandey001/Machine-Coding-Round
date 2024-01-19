import { useState } from "react";

const CounterApp = () => {
  const [counterBtn, setCounterBtn] = useState(0);
  return (
    <div>
      <button onClick={() => {setCounterBtn(counterBtn+1)}}>Inc</button>
      <h1>Counter Value is: {counterBtn}</h1>
      <button onClick={() => {setCounterBtn(counterBtn-1)}}>Dec</button>
    </div>
  );
};

export default CounterApp;
