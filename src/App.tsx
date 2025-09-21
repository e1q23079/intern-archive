import { Routes, Route, HashRouter } from "react-router-dom"
import StartPage from "./page/start-page"
import HomePage from "./page/home-page"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App