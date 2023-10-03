import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function VideoDetails(){
    const navigate = useNavigate()
    const [video, setVideo] = useState({});
    const params = useParams();
    useEffect(()=>{
        axios({method:"get",
         url:`http://127.0.0.1:5050/videos/${params.id}`,
        }).then((res)=>{
            setVideo(res.data)
        })
    },[])
    return(
        
        <div className="container-fluid">
          <h2>Video Details</h2>
          <div className="card w-50">
            <div className="card-header">{video[0]?.title}</div>
            <div className="card-body">
                <iframe src={video[0]?.url} width="100%" height="100"></iframe>
            </div>
            <div className="card-footer">
                <span className="bi bi-eye-fill"></span>[{video[0]?.views}] Views
                <span className="bi bi-heart"></span>[{video[0]?.likes}] Likes
                

            </div>

          </div>
          <span className="btn btn-link" onClick={()=>{navigate("/manage")}}>Back to Manage</span>
        </div>
    )
}