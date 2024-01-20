import "./App.css";
import React from "react";
import HelloWorld from "./components/HelloWorld";
import CounterApp from "./components/CounterApp";
import Form from "./components/Form";
import ToggleTheme from "./components/ToggleTheme";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div>
      {/* <HelloWorld name={"Shivam!!"}/> */}
      {/* <CounterApp/>
          <Form/> */}
      {/* <ToggleTheme/> */}
      <RouterProvider router={appRouter}>
        <Header />
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
