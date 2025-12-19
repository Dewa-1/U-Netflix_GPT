import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";



const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (<Browse />),
    },
    
  ]);



  return (
    <div>
       <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#141414",
            color: "#fff",
            border: "1px solid #333",
          },
        }}
      />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
