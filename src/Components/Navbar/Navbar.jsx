import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from "../../assets/more.png"
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({setSidebar}) => {

    const[searchText, setSearchText] = useState("")

    return(
        <nav className = 'flex-div' >
            <div className="nav-left flex-div">
                <img className="menu_icon" onClick={() => setSidebar(prev=> prev===false?true:false)} src={menu_icon} />

                <Link to = '/'> <img className="logo" src={logo} /></Link>
                
                
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                <input value={searchText}  onChange={e => setSearchText(e.target.value)}  type="text" placeholder="search" />
               <Link to = {`/search/${searchText}`}>  <img src={search_icon} alt="" /> </Link> 


                </div>
               
            </div>
            <div className="nav-right flex-div">
                <img src={profile_icon} className="user-icon" alt="" />

            </div>

        </nav>
    )
}
export default Navbar