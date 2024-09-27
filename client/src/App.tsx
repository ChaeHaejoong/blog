import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import BlogPage from "../pages/BlogPage"
import ProjectPage from "../pages/ProjectPage"
import CategoryPage from "../pages/CategoryPage"
import ArchivePage from "../pages/ArchivePage"
import useAccessModal from "../hooks/useAccessModal"
import AccessModal from "../components/AccessModal"

function App() {

  const { isModalOn, setIsModalOn } = useAccessModal();

  return (
    <>
      { isModalOn && <AccessModal isModalOn={isModalOn} setIsModalOn={setIsModalOn}></AccessModal> }
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/archive" element={<ArchivePage />}></Route>
      </Routes>
    </>
  )
}

export default App
