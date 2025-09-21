import backBtnImg from "../assets/back-btn.png";
import styles from "./back-btn.css";
import Tap from "../animation/back_screen/Tap";

const BackBtn = () => {
    return (
        <Tap>
            <img src={backBtnImg} className={styles.backBtn} alt="back-btn" draggable={false} />
        </Tap>
    )
};

export default BackBtn;