import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Showcase from "./pages/Showcase";
import Showcase1 from "./pages/Showcase1";
import Showcase2 from "./pages/Showcase2";
import Language from "./pages/Language";
import CodePage from "./pages/CodePage";
import { Layout } from "./layouts/DefaultLayout";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/showcase-01":
        title = "";
        metaDescription = "";
        break;
      case "/showcase-02":
        title = "";
        metaDescription = "";
        break;
      case "/showcase-03":
        title = "";
        metaDescription = "";
        break;
      case "/language-01":
        title = "";
        metaDescription = "";
        break;
      case "/codepage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/showcase-01" element={<Showcase />} />
        <Route path="/showcase-02" element={<Showcase1 />} />
        <Route path="/showcase-03" element={<Showcase2 />} />

        <Route path="/language-01" element={<Language />} />
      </Routes>
    </Layout>
  );
}
export default App;
