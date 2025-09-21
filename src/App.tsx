import { Routes, Route, HashRouter } from "react-router-dom"
import StartPage from "./page/start"
import HomePage from "./page/home"
import Introduction from "./page/introduction";

// import { useEffect, useState } from "react"

// import { styles } from "./style.css"
// // import FadeInOutOne from "./animation/back_screen/FadeInOut"


const App = () => {

  // const [point, setPOint] = useState({ x: 0, y: 0 });


  // const pointClick = (e: React.MouseEvent) => {
  //   setPOint({ x: e.clientX, y: e.clientY });
  //   console.log(point);
  // };

  // useEffect(() => {
  //   document.documentElement.style.setProperty('--mouse-x', `${point.x}px`);
  //   document.documentElement.style.setProperty('--mouse-y', `${point.y}px`);
  // }, [point]);

  return (
    <>
      {/* <div className={styles.screen} onClick={pointClick}> */}
      <HashRouter>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="introduction" element={<Introduction />} />
        </Routes>
      </HashRouter>
      {/* </div > */}
      {/* <FadeInOutOne>
        <div className={styles.mousePointer}></div>
      </FadeInOutOne> */}
    </>
  )
}

export default App