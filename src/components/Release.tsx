import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Release.module.css";

export type ReleaseType = {
  className?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
};

const Release: FunctionComponent<ReleaseType> = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propWidth1,
  propHeight1,
}) => {
  const releaseStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propPosition, propTop, propLeft, propWidth, propHeight]);

  const timeline4IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  return (
    <div className={[styles.release, className].join(" ")} style={releaseStyle}>
      <img
        className={styles.timeline4Icon}
        alt=""
        src="/timeline-4-icon.svg"
        style={timeline4IconStyle}
      />
    </div>
  );
};

export default Release;
