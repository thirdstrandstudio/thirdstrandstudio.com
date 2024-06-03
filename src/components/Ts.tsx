import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Ts.module.css";

export type TsType = {
  className?: string;

  /** Style props */
  typescriptIconPosition?: CSSProperties["position"];
  typescriptIconTop?: CSSProperties["top"];
  typescriptIconLeft?: CSSProperties["left"];
  typescriptIconWidth?: CSSProperties["width"];
  typescriptIconHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  imgSrc?: string;
};

const Ts: FunctionComponent<TsType> = ({
  className = "",
  typescriptIconPosition,
  typescriptIconTop,
  typescriptIconLeft,
  typescriptIconWidth,
  typescriptIconHeight,
  propWidth,
  propHeight,
  imgSrc,
}) => {
  const tsStyle: CSSProperties = useMemo(() => {
    return {
      position: typescriptIconPosition,
      top: typescriptIconTop,
      left: typescriptIconLeft,
      width: typescriptIconWidth,
      height: typescriptIconHeight,
    };
  }, [
    typescriptIconPosition,
    typescriptIconTop,
    typescriptIconLeft,
    typescriptIconWidth,
    typescriptIconHeight,
  ]);

  const typescriptIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={[styles.ts, className].join(" ")} style={tsStyle}>
      <img
        className={styles.typescriptIcon}
        alt=""
        src={imgSrc}
        style={typescriptIconStyle}
      />
    </div>
  );
};

export default Ts;
