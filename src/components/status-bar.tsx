import statusBarImg from "../assets/status-bar.png";
import styles from "./status-bar.css";

const StatusBar = () => {
    return (
        <img src={statusBarImg} className={styles.statusBar} alt="status-bar" draggable={false} />
    )
};

export default StatusBar;