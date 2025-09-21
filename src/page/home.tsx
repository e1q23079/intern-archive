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

    const [nowPage, setNowPage] = useState(0);

    const backBtn = () => {
        setStatus(true);
    }


    const next = () => {
        setNowPage((prevPage) => (prevPage < 1 ? prevPage + 1 : prevPage));
    };

    const pre = () => {
        setNowPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));

    };


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
                    <List num={nowPage}></List>
                    <div className={preBtnStyle} onClick={pre}>
                        <PreBtn></PreBtn>
                    </div>
                    <div className={nextBtnStyle} onClick={next}>
                        <NextBtn></NextBtn>
                    </div >
                </FadeOutRedirect>
            </FadeInSc >
        </>
    );
}

export default HomePage;
