import { backScreen } from './style.css.ts'
import FadeIn from './animation/back_screen/FadeIn.tsx'

import back_screen01 from './assets/back_screen01.png'
import back_screen02 from './assets/back_screen02.png'

const App = () => {
  return (
    <>
      {/* 昼 */}
      <img src={back_screen01} alt="start screen back 01" className={backScreen} />
      {/* 夜 */}
      <FadeIn>
        <img src={back_screen02} alt="start screen back 02" className={backScreen} />
      </FadeIn >
    </>
  )
}

export default App