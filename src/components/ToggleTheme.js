import { useState } from "react"

const ToggleTheme = () => {
    const [toggleTheme, setToggleTheme] = useState(true);
    const [bgColor] = useState('bg-red-400')
    const handleToggle = () =>{
        setToggleTheme(!toggleTheme);
    }

  return (
    <div className={` ${toggleTheme ? bgColor : "text-white bg-black"}`}>
        {console.log(toggleTheme)}
        <p >
            Hi Hello, This Component is to render the 
        </p>
        <button onClick={handleToggle}>{toggleTheme ? "🔆" : "🌙"}</button>
    </div>
  )
}

export default ToggleTheme