import React from "react"
import './Sidebar.css'
import {home, game_icon, automobiles, sports, entertainment, tech, music, blogs, news, jack, simon, tom, megan, cameron } from '../../assets/Images'

const Sidebar = ({sidebar, category, setCategory}) => {
    return (
        <div className={`sidebar ${sidebar?"": "small-sidebar"}`} >
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={() =>setCategory(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                
                 <div className={`side-link ${category===20?"active":""}`}  onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt="" /><p>Gaming</p>
                </div>

                 <div className={`side-link ${category===2?"active":""}`}   onClick={()=>setCategory(2)} >
                    <img src={automobiles} alt="" /><p>Automobiles</p>
                </div>
                
                 <div className={`side-link ${category===17?"active":""}`}   onClick={()=>setCategory(17)}>
                    <img src={sports} alt="" /><p>Sports</p>
                </div>
                
                 <div className={`side-link ${category===24?"active":""}`}  onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                
                 <div className={`side-link ${category===18?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech} alt="" /><p>Tech</p>
                </div>
                
                 <div className={`side-link ${category===10?"active":""}`}  onClick={()=>setCategory(10)}>
                    <img src={music} alt="" /><p>Music</p>
                </div>
                
                 <div className={`side-link ${category===22?"active":""}`}  onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="" /><p>Blogs</p>
                    </div>
                    
                     <div className={`side-link ${category===25?"active":""}`}  onClick={()=>setCategory(25)}>
                    <img src={news} alt="" /><p>News</p>
                </div>


                <hr />
            </div>
           
        </div>
    )
}

export default Sidebar