

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import PageNotExist from "./pages/PageNotExist";

import Footer from "./components/Footer";



 const Layout = ()=> <div className="container mx-auto min-h-screen"><NavBar/></div>


const AppNavigation = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={[<Layout key={'layout'}/> ,<Footer key={'footer'}/>]}>
        <Route index element={ <HomePage/>} />
        <Route path="projects/:projectTitle" element={<ProjectDetailPage />} />
        {/* <Route path="projects" element={<ProjectPage/>} />
        
        <Route path="about" element={<AboutPage/>} />
        <Route path="contact" element={<ContactPage />} /> */}
        <Route path="*" element={<PageNotExist/>} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}


function App() {
  return (
   <div className="bg-black w-full min-h-screen ">
    <AppNavigation/>
   </div>
  )
}

export default App
