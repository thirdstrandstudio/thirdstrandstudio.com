import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Projectmanager.module.css";

export type ProjectmanagerType = {
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

const Projectmanager: FunctionComponent<ProjectmanagerType> = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propWidth1,
  propHeight1,
}) => {
  const projectmanagerStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propPosition, propTop, propLeft, propWidth, propHeight]);

  const timeline1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  return (
    <div
      className={[styles.projectmanager, className].join(" ")}
      style={projectmanagerStyle}
    >
      <img
        className={styles.timeline1Icon}
        alt=""
        src="/timeline-1-icon.svg"
        style={timeline1IconStyle}
      />
    </div>
  );
};

export default Projectmanager;
