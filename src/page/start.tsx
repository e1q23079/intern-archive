import FadeIn from '../animation/FadeIn.tsx'

import StartBtn from '../components/start-btn.tsx'

import back_screen01 from '../assets/back_screen01.png'
import back_screen02 from '../assets/back_screen02.png'

import { useState } from 'react'

import { backScreen } from './start.css.ts'
import FadeOutRedirect from '../animation/FadeOutRedirect.tsx'
import FadeInSc from '../animation/FadeInSc.tsx'

import { useParams } from "react-router-dom";

const StartPage = () => {

    const { id } = useParams<{ id: string }>();

    const [status, setStatus] = useState(false);

    const start = () => {
        setStatus(true);
    }

    return (
        <FadeInSc>
            <FadeOutRedirect redirectUrl={id === undefined ? "#home" : `#detail/${id}`} trigger={status}>
                <>
                    <div onClick={start}>
                        {/* 昼 */}
                        <img src={back_screen01} alt="start screen back 01" className={backScreen} draggable={false} />
                        {/* 夜 */}
                        <FadeIn>
                            <img src={back_screen02} alt="start screen back 02" className={backScreen} draggable={false} />
                        </FadeIn >
                        <StartBtn></StartBtn>
                    </div>
                </>
            </FadeOutRedirect>
        </FadeInSc>
    );
}
export default StartPage;