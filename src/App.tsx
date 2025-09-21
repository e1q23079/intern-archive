import { Routes, Route, HashRouter } from "react-router-dom"
import StartPage from "./page/start"
import HomePage from "./page/home"

import { useEffect, useState } from "react"

import { styles } from "./style.css"


const App = () => {

  const [point, setPOint] = useState({ x: 0, y: 0 });


  const pointClick = (e: React.MouseEvent) => {
    setPOint({ x: e.clientX, y: e.clientY });
    console.log(point);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', `${point.x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${point.y}px`);
  }, [point]);

  return (
    <>
      <div className={styles.screen} onClick={pointClick}>
        <HashRouter>
          <Routes>
            <Route path="" element={<StartPage />} />
            <Route path="home" element={<HomePage />} />
          </Routes>
        </HashRouter>
      </div >
      <div className={styles.mousePointer}></div>
    </>
  )
}

export default App