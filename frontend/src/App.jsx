import { Routes, Route, Navigate } from "react-router-dom"
import About from "./pages/about"

function App() {
  return (
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
