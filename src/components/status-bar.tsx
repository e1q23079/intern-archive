import statusBarImg from "../assets/status-bar-in-skill.png";
import styles from "./status-bar.css";

const StatusBar = () => {
    return (
        <>
            <img src={statusBarImg} className={styles.statusBar} alt="status-bar" draggable={false} />
            <div className={`${styles.grid} ${styles.statusText}`}>
                <div className={styles.skill}>100</div>
                <div>Q23079</div>
            </div>
        </>
    )
};

export default StatusBar;