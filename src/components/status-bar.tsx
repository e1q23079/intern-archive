import statusBarImg from "../assets/status-bar-in-skill.png";
import styles from "./status-bar.css";

const StatusBar = () => {

    // 日付を取得
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // スキル値を計算
    const skill = (year + month + day + hours + minutes + seconds);

    return (
        <>
            <img src={statusBarImg} className={styles.statusBar} alt="status-bar" draggable={false} />
            <div className={`${styles.grid} ${styles.statusText}`}>
                <div className={styles.skill}>{skill}</div>
                <div>Q23079</div>
            </div>
        </>
    )
};

export default StatusBar;