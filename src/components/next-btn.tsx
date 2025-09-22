import nextBtnImg from "../assets/next-btn.png";
import nextBtnImgDisabled from "../assets/next-btn-disable.png";
import { btnSize } from "./btn-size.css";
import Tap from "../animation/Tap";
import styles from "./next-btn.css";

type NextBtnProps = {
    show: boolean;
};

const NextBtn = ({ show }: NextBtnProps) => {
    if (show === true) {
        return (
            <Tap>
                <img src={nextBtnImg} className={`${btnSize} ${styles.cursorPointer}`} alt="back-btn" draggable={false} />
            </Tap>
        )
    } else {
        return (
            <img src={nextBtnImgDisabled} className={btnSize} alt="back-btn" draggable={false} />
        )
    }
};

export default NextBtn;