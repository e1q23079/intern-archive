import FadeInOut from "../animation/back_screen/FadeInOut";
import startBtnImg from "../assets/start_btn.png";
import styles from "./start-btn.css";

const StartBtn = () => {
    return (
        <FadeInOut>
            <img src={startBtnImg} className={styles.startBtn} alt="start-btn" draggable={false} />
        </FadeInOut>
    )
};

export default StartBtn;