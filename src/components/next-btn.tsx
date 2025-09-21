import nextBtnImg from "../assets/next-btn.png";
import { btnSize } from "./btn-size.css";
import Tap from "../animation/Tap";

const NextBtn = () => {
    return (
        <Tap>
            <img src={nextBtnImg} className={btnSize} alt="back-btn" draggable={false} />
        </Tap>
    )
};

export default NextBtn;