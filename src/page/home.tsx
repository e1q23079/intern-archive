import BackBtn from "../components/back-btn";
import { backBtnStyle, listBackStyle, nextBtnStyle, preBtnStyle, statusBarStyle } from "./home.css";

import back from "../assets/back.png";
import { backScreen } from "./start.css";
import PreBtn from "../components/pre-btn";
import NextBtn from "../components/next-btn";
import StatusBar from "../components/status-bar";

import listBackImg from "../assets/list-back.png";

const HomePage = () => {

    const backBtn = () => {
        setTimeout(() => {
            window.location.href = "#"
        }, 1000);
    }

    return (
        <>
            <img src={back} alt="start screen back 02" className={backScreen} draggable={false} />
            <div className={backBtnStyle} onClick={backBtn}>
                <BackBtn></BackBtn>
            </div>
            <div className={statusBarStyle}>
                <StatusBar></StatusBar>
            </div>
            <img src={listBackImg} alt="list back" className={listBackStyle} draggable={false} />
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
