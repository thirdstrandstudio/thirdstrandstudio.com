import reportWebVitals from "./reportWebVitals";
import "./global.css";
import { ViteReactSSG } from "vite-react-ssg";
import routes from "./scripts/routes";

export const createRoot = ViteReactSSG(
  { routes, basename: "/" },
  ({})=> { 
    
  },
  { }
)

reportWebVitals();
