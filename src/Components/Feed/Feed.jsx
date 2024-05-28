import './Feed.css'
import moment from 'moment'


import api_key, { valueConverter } from '../../data'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Feed = ({category}) => {

    const [data,setData] = useState([])

    const fetchData = async () => {
        const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${api_key}`

        await fetch(videoList_URL).then(response => response.json()).then(data=>setData(data.items))

    }
    useEffect( () =>
    {
        fetchData();
        
    },[category])

    // console.log(data)

    return(

        <div className="Feed">

            {data.map((item, index) => {
        return (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.medium.url} />
            <h2>{item.snippet.title} </h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{valueConverter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
            </Link>
                )
            })}
    
        </div>
       
    )
}
export default Feed