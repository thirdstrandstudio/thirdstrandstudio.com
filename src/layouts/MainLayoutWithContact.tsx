import React from "react";
import MainLayout, { StrapLineData } from "./MainLayout";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayoutWithContact: React.FunctionComponent<{
  children: React.ReactNode;
  strapLineData: StrapLineData;
}> = ({ children, strapLineData }) => {
  const navigate = useNavigate();
  
  return (
    <MainLayout
      strapLineData={{
        ...strapLineData,
        button: {
          buttonText: "Contact Us",
          buttonClick: () => {
            navigate("/contact");
          },
        },
      }}
    >
      {children}
      <Footer/>
    </MainLayout>
  );
};

export default MainLayoutWithContact;
