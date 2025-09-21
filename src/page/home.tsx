import BackBtn from "../components/back-btn";
import { backBtnStyle } from "./home.css";

import sampleDesign from "../assets/sampleDesign/sampleDesign.png";
import { backScreen } from "./start.css";

const HomePage = () => {
    return (
        <>
            <img src={sampleDesign} alt="start screen back 02" className={backScreen} draggable={false} />
            <div className={backBtnStyle}>
                <BackBtn></BackBtn>
            </div>
        </>
    );
}

export default HomePage;
