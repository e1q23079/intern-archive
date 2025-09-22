import preBtnImg from "../assets/pre-btn.png";
import preBtnImgDisabled from "../assets/pre-btn-disable.png";
import { btnSize } from "./btn-size.css";
import Tap from "../animation/Tap";
import styles from "./pre-btn.css";

type preBtnProps = {
    show: boolean;
};

const preBtn = ({ show }: preBtnProps) => {
    if (show === true) {
        return (
            <Tap>
                <img src={preBtnImg} className={`${btnSize} ${styles.cursorPointer}`} alt="back-btn" draggable={false} />
            </Tap>
        )
    } else {
        return (
            <img src={preBtnImgDisabled} className={btnSize} alt="back-btn" draggable={false} />
        )
    }
};

export default preBtn;