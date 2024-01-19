import { useState } from "react";

const Form = () => {
    const [captureInput, setCaptureInput] = useState("");
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input className="w-100 bg-gray-100" value={captureInput} onChange={(e)=>{setCaptureInput(e.target.value)}}/>
        {captureInput !== "" ? captureInput : ""}
      </form>
    </div>
  );
};

export default Form;
