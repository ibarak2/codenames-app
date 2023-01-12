import { Routes, Route } from "react-router"
import { HomePage } from "./pages/home-page"
import { BoardPage } from "./pages/board-page"


function App() {

  return (
    <div>
      <Routes>
        <Route 
          key={'Home'}
          element={<HomePage />}
          path={'/home'}
        />
        <Route 
          key={'Board'}
          element={<BoardPage />}
          path={'/board/:id'}
        />
      </Routes>
    </div>
  )
}

export default App
