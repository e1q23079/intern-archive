import FadeIn from '../animation/FadeIn.tsx'

import StartBtn from '../components/start-btn.tsx'

import back_screen01 from '../assets/back_screen01.png'
import back_screen02 from '../assets/back_screen02.png'

import { backScreen } from './start.css.ts'

const StartPage = () => {

    const start = () => {
        setTimeout(() => {
            window.location.href = "#home"
        }, 2000);
    }

    return (
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
    );
}
export default StartPage;