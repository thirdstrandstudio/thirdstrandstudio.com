import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StatisticTile.module.css";

export type StatisticTileType = {
  className?: string;
  statValue?: string;
  desc?: string;

  /** Style props */
  textColor?: CSSProperties["color"];
};

const StatisticTile: FunctionComponent<StatisticTileType> = ({
  className = "",
  statValue,
  desc,
  textColor,
}) => {
  const programmingLanguagesStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div className={[styles.smallTile, className].join(" ")}>
      <div className={styles.margin}>
        <b className={styles.b}>{statValue}</b>
      </div>
      <div className={styles.container}>
        <div
          className={styles.programmingLanguages}
          style={programmingLanguagesStyle}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

export default StatisticTile;
