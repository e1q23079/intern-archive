import BackBtn from "../components/back-btn";
import { backBtnStyle, statusBarStyle } from "./home.css";

import back from "../assets/back.png";
import { backScreen } from "./start.css";
import StatusBar from "../components/status-bar";

import FadeOutRedirect from "../animation/FadeOutRedirect";
import { useEffect, useState } from "react";
import FadeInSc from "../animation/FadeInSc";
import DetailBox from "../components/detail-box";
import { useParams } from "react-router-dom";
import DetailComponent from "../components/detail-component";
import DetailData from "../components/detail-data";


const DetailPage = () => {

    const { id } = useParams<{ id: string }>();

    const [status, setStatus] = useState(false);

    const [data, setData] = useState<DetailData>();

    useEffect(() => {
        fetch(`/intern-archive/data/${id}.json`)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

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
                <DetailBox><DetailComponent detailData={data}></DetailComponent></DetailBox>
            </FadeOutRedirect>
        </FadeInSc >
    )
}

export default DetailPage;