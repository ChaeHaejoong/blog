import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import BlogPage from "../pages/BlogPage"
import ProjectPage from "../pages/ProjectPage"
import CategoryPage from "../pages/CategoryPage"
import ArchivePage from "../pages/ArchivePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/project" element={<ProjectPage />}></Route>
      <Route path="/category" element={<CategoryPage />}></Route>
      <Route path="/archive" element={<ArchivePage />}></Route>
    </Routes>
  )
}

export default App
