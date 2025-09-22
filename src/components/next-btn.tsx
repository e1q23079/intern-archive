import nextBtnImg from "../assets/next-btn.png";
import nextBtnImgDisabled from "../assets/next-btn-disable.png";
import { btnSize } from "./btn-size.css";
import Tap from "../animation/Tap";

type NextBtnProps = {
    show: boolean;
};

const NextBtn = ({ show }: NextBtnProps) => {
    if (show === true) {
        return (
            <Tap>
                <img src={nextBtnImg} className={btnSize} alt="back-btn" draggable={false} />
            </Tap>
        )
    } else {
        return (
            <Tap>
                <img src={nextBtnImgDisabled} className={btnSize} alt="back-btn" draggable={false} />
            </Tap>
        )
    }
};

export default NextBtn;