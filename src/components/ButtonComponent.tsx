import styles from "./ButtonComponent.module.css";

export type ButtonComponentProps = {
  buttonText: string;
  buttonClick?: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonText,
  buttonClick,
}) => {
  return (
    <button className={styles.button} onClick={buttonClick}>
      <div className={styles.text}>{buttonText}</div>
    </button>
  );
};

export default ButtonComponent;