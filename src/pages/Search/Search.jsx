import React, { useEffect, useState } from 'react'
import API_KEY  from '../../data'
import { Link, useParams } from 'react-router-dom'


function Search() {

  const[Sdata, setSData] = useState([])

 

 const {searchText} = useParams()

 console.log(searchText)

 const SearchData = async() =>{

   const Search_Url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&key=${API_KEY}`

  await fetch(Search_Url).then(res => res.json()).then(data => setSData(data.items))

  
 }


useEffect(()=>
    {
        SearchData()

    },[searchText]);

    return(
    <div className = "Search">

   {Sdata.map((item,index) => {

    console.log(item.snippet.title)
        return(
            <Link to={`/video/${0}/${item.id.videoId}`}>
               <img src={item.snippet.thumbnails.medium.url} alt="" />
             <h2>{item.snippet.title} </h2>
             <h3>{item.snippet.channelTitle}</h3>
             

            </Link>
          
        )
    })}


    </div>

)
  
  
}

export default Search

