import FadeInOut from "../animation/back_screen/FadeInOut";
import styles from "./start-btn.css"

const StartBtn = () => {
    return (
        <FadeInOut>
            <div className={styles.startBtn}>Touch The Screen</div>
        </FadeInOut>
    )
};

export default StartBtn;