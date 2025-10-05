import { Routes, Route, HashRouter } from "react-router-dom"
import StartPage from "./page/start"
import HomePage from "./page/home"
import Introduction from "./page/introduction";
import DetailPage from "./page/detail";
import Preview from "./components/preview";


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
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="preview/:id" element={<Preview />} />
          <Route path="redirect/:id" element={<StartPage />} />
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