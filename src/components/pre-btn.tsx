import preBtnImg from "../assets/pre-btn.png";
import Tap from "../animation/back_screen/Tap";
import { btnSize } from "./btn-size.css";

const PreBtn = () => {
    return (
        <Tap>
            <img src={preBtnImg} className={btnSize} alt="back-btn" draggable={false} />
        </Tap>
    )
};

export default PreBtn;