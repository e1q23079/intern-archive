import BackBtn from "../components/back-btn";
import { backBtnStyle, nextBtnStyle, preBtnStyle } from "./home.css";

import sampleDesign from "../assets/sampleDesign/sampleDesign.png";
import { backScreen } from "./start.css";
import PreBtn from "../components/pre-btn";
import NextBtn from "../components/next-btn";

const HomePage = () => {

    const start = () => {
        setTimeout(() => {
            window.location.href = "#"
        }, 1000);
    }

    return (
        <>
            <img src={sampleDesign} alt="start screen back 02" className={backScreen} draggable={false} />
            <div className={backBtnStyle} onClick={start}>
                <BackBtn></BackBtn>
            </div>
            <div className={preBtnStyle}>
                <PreBtn></PreBtn>
            </div>
            <div className={nextBtnStyle}>
                <NextBtn></NextBtn>
            </div >
        </>
    );
}

export default HomePage;
