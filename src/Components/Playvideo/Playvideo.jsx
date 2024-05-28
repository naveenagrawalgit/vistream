import './Playvideo.css'
import {video1, like, dislike, share, save, jack1, user_profile}
from '../../assets/Images'
import API_KEY, { valueConverter } from '../../data';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const Playvideo = () => {

    const {videoId} = useParams()

    // const [apiData,setApiData] = useState(null);
    const [apiData,setApiData] = useState(null)
    const [channel,setChannel] = useState(null)
    const [comment,setComment] = useState([])

    const fetchVideoData = async  () => {


        //Fetching videos Data
        const videoDetail_Url =  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetail_Url).then(res => res.json()).then(data => setApiData(data.items[0]))

        // await fetch(videoDetail_Url).then(res=>res.json()).then(data => setApiData(data.items[0]));

    }

    const fetchOtherDetail = async () => {

        const channelDetail_Url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDetail_Url).then(res => res.json()).then(data => setChannel(data.items[0]))

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res => res.json()).then(data => setComment(data.items))


    }
    //for comment data

    const fetchComment = async () => {
    // const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    // await fetch(comment_url).then(res => res.json()).then(data => setComment(data.items))
    }


    useEffect(() => {
        fetchVideoData();

    } ,[videoId])

    useEffect(() => {
        fetchOtherDetail()
    },[apiData])

    // useEffect(() => {
    //     fetchComment()
    // },[apiData])


    console.log(comment)
    console.log(videoId)
    
    return (
        <div className="play-video">
            

<iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

     <h3>{apiData?apiData.snippet.title:'nigga aint no title'}</h3>
            <div className="play-video-info">
                <p>{apiData?valueConverter(apiData.statistics.viewCount):'views count'} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():'2days'}</p>
                <div>
                    <span><img src={like} alt="" /> {apiData?apiData.statistics.likeCount:'987'}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" /> share</span>
                    <span><img src={save} alt="" /> save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channel?channel.snippet.thumbnails.default.url:'pp'} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:'channel name'}</p>
                    <span>{channel?valueConverter(channel.statistics.subscriberCount):'1M'}</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData?apiData.snippet.description.slice(0,250):'description'}</p>
                <hr />
                <h4>{apiData?valueConverter(apiData.statistics.commentCount):'comment count'} Comments </h4>

                {comment.map((item,index)=>{

                    return(
                        
                        
                <div key ={index} className="comment">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                
                  <div>
                     <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago.</span></h3>
                     <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                     <div className="comment-action">
                        <img src={like} alt="" />
                        <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                     </div>
                  </div>
                </div>
                
                    )
                })}
                
                </div>
            </div>
        )
}
export default Playvideo