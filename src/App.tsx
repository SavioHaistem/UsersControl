import HomePage from "./Components/HomePage"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./Components/CreatePage"

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/adicionar" element={<CreatePage/>}/>
        </Routes>  
    </>
  )
}

export default App