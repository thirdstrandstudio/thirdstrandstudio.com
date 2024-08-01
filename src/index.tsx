import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { ViteReactSSG } from "vite-react-ssg";
import routes from "./scripts/routes";
// const container = document.getElementById("root");
// const root = createRoot(container!);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  ({router, routes, isClient, initialState})=> { 
  },
  { }
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
