import preBtnImg from "../assets/pre-btn.png";
import preBtnImgDisabled from "../assets/pre-btn-disable.png";
import { btnSize } from "./btn-size.css";
import Tap from "../animation/Tap";

type preBtnProps = {
    show: boolean;
};

const preBtn = ({ show }: preBtnProps) => {
    if (show === true) {
        return (
            <Tap>
                <img src={preBtnImg} className={btnSize} alt="back-btn" draggable={false} />
            </Tap>
        )
    } else {
        return (
            <Tap>
                <img src={preBtnImgDisabled} className={btnSize} alt="back-btn" draggable={false} />
            </Tap>
        )
    }
};

export default preBtn;