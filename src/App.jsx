// import './App.css'
import {Routes,Route} from "react-router-dom"
import Render from "./pages/Render"


function App() {

  return (
    <>

      <Routes>
        <Route path="/" Component={Render} />
      </Routes>

    </>
  )
}

export default App
