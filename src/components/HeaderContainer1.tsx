import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "./DesktopHeader1";
import styles from "./HeaderContainer1.module.css";

export type HeaderContainer1Type = {
  className?: string;
};

const HeaderContainer1: FunctionComponent<HeaderContainer1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headerContainer, className].join(" ")}>
      <DesktopHeader
      />
    </div>
  );
};

export default HeaderContainer1;
