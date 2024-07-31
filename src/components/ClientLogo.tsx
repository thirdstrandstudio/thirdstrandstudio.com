import { FunctionComponent } from "react";
import styles from "./ClientLogo.module.css";

export type ClientLogoType = {
  className?: string;
  logo?: string;
};

const ClientLogo: FunctionComponent<ClientLogoType> = ({
  className = "",
  logo,
}) => {
  return (
    <div className={[styles.clientLogo, className].join(" ")}>
      <img className={styles.bpLogoIcon} alt="" src={logo} />
    </div>
  );
};

export default ClientLogo;
