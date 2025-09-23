import BackBtn from "../components/back-btn";
import { backBtnStyle, statusBarStyle } from "./home.css";

import back from "../assets/back.png";
import { backScreen } from "./start.css";
import StatusBar from "../components/status-bar";

import FadeOutRedirect from "../animation/FadeOutRedirect";
import { useState } from "react";
import FadeInSc from "../animation/FadeInSc";
import DetailBox from "../components/detail-box";

const DetailPage = () => {

    const [status, setStatus] = useState(false);

    const backBtn = () => {
        setStatus(true);
    }

    return (
        <FadeInSc>
            <FadeOutRedirect redirectUrl="#home" trigger={status}>
                <img src={back} alt="start screen back 02" className={backScreen} draggable={false} />
                <div className={backBtnStyle} onClick={backBtn}>
                    <BackBtn></BackBtn>
                </div>
                <div className={statusBarStyle}>
                    <StatusBar></StatusBar>
                </div>
                <DetailBox></DetailBox>
            </FadeOutRedirect>
        </FadeInSc >
    )
}

export default DetailPage;