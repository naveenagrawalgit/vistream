import React, { useState } from "react"
import Navbar from './Components/Navbar/Navbar'
import { Routes , Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import Search from "./pages/Search/Search"

function App( )
{
    const [sidebar,setSidebar] = useState(true)

    return(
    <>
    <Navbar setSidebar={setSidebar} />
    <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/>}/>
    <Route path='video/:categoryId/:videoId' element={<Video/>}/>
    <Route path = "/search/:searchText" element={<Search/>} />
    </Routes>
    </>
    )
}

export default App