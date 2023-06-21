import HomePage from "./Components/HomePage"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./Components/routes/CreatePage"
import ReadPage from "./Components/routes/ReadPage"
import UpdatePage from "./Components/routes/UpdatePage"
import DeletePage from "./Components/routes/DeletePage"

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/adicionar" element={<CreatePage/>}/>
          <Route path="/visualizar" element={<ReadPage/>}/>
          <Route path="/editar" element={<UpdatePage/>}/>
          <Route path="/remover" element={<DeletePage/>}/>
        </Routes>
    </>
  )
}

export default App