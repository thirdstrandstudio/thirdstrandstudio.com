import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Ts from "./Ts";
import styles from "./TechTile1.module.css";

export type TechTileType = {
  className?: string;
  typescript?: string;
  technologies1Title?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  onClick?: () => void;
};

const TechTile: FunctionComponent<TechTileType> = ({
  className = "",
  typescript,
  technologies1Title,
  propPadding,
  propFlexDirection,
  propWidth,
  propHeight,
  onClick
}) => {
  const tsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      flexDirection: propFlexDirection,
    };
  }, [propPadding, propFlexDirection]);

  const typescriptIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <button onClick={onClick} className={[styles.techTile, className].join(" ")}>
      <Ts
        typescriptIconPosition="unset"
        typescriptIconTop="unset"
        typescriptIconLeft="unset"
        typescriptIconWidth="4.688rem"
        typescriptIconHeight="4.688rem"
        propWidth="3.5rem"
        propHeight="3.5rem"
        imgSrc={typescript}
      />
      <div className={styles.technologies1TitleParent}>
        <div className={styles.technologies1Title}>{technologies1Title}</div>
        <div className={styles.technologies1Title1}>View more</div>
      </div>
    </button>
  );
};

export default TechTile;
