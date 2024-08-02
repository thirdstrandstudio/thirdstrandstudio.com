import { FunctionComponent } from "react";
import Tag from "./Tag";
import styles from "./ShowcaseTagsContainer.module.css";

export type ShowcaseTagsContainerType = {
  className?: string;
};

const ShowcaseTagsContainer: FunctionComponent<ShowcaseTagsContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.tags, className].join(" ")}>
      <Tag text="UI/UX" textColor="#65ff74" />
      <Tag text="Figma" textColor="#65ff74" />
      <Tag text="Social Media" textColor="#65ff74" />
      <Tag text="Platform" textColor="#65ff74" />
      <Tag text="Mobile" textColor="#65ff74" />
      <Tag text="C+" textColor="#65ff74" />
    </div>
  );
};

export default ShowcaseTagsContainer;
