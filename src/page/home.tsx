import BackBtn from "../components/back-btn";
import { backBtnStyle, nextBtnStyle, preBtnStyle, statusBarStyle } from "./home.css";

import back from "../assets/back.png";
import { backScreen } from "./start.css";
import PreBtn from "../components/pre-btn";
import NextBtn from "../components/next-btn";
import StatusBar from "../components/status-bar";

import FadeOutRedirect from "../animation/FadeOutRedirect";
import { useState } from "react";
import FadeInSc from "../animation/FadeInSc";

import List from "../components/list";

const HomePage = () => {

    const [status, setStatus] = useState(false);

    const backBtn = () => {
        setStatus(true);
    }

    return (

        <>
            <FadeInSc>
                <FadeOutRedirect redirectUrl="#" trigger={status}>
                    <img src={back} alt="start screen back 02" className={backScreen} draggable={false} />
                    <div className={backBtnStyle} onClick={backBtn}>
                        <BackBtn></BackBtn>
                    </div>
                    <div className={statusBarStyle}>
                        <StatusBar></StatusBar>
                    </div>
                    <List></List>
                    <div className={preBtnStyle}>
                        <PreBtn></PreBtn>
                    </div>
                    <div className={nextBtnStyle}>
                        <NextBtn></NextBtn>
                    </div >
                </FadeOutRedirect>
            </FadeInSc>
        </>
    );
}

export default HomePage;
