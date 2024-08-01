import React from "react";
import MainLayout, { StrapLineData } from "./MainLayout";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayoutWithContact: React.FunctionComponent<{
  children: React.ReactNode;
  strapLineData: StrapLineData;
  headerChildren?: React.ReactNode;
  headerImage?: string;
}> = ({ children, strapLineData, headerChildren, headerImage }) => {
  const navigate = useNavigate();
  
  return (
    <MainLayout
      headerChildren={headerChildren}
      headerImage={headerImage}
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
    </MainLayout>
  );
};

export default MainLayoutWithContact;
