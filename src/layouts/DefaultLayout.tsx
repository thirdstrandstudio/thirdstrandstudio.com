import Footer from "../components/Footer";
import styles from "./DefaultLayout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.homepage}>
      {children}
      <Footer />
    </div>
  );
};
