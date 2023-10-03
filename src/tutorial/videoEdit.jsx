import { useState,useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams ,Link} from "react-router-dom";
import axios from "axios";

export default function VideoEdit(){
    const navigate = useNavigate()
    const [video, setVideo] = useState({});
    const params = useParams();
    const formik = useFormik({
        initialValues:{
            id: video[0]?.id,
            title:video[0]?.title,
            url:video[0]?.url,
            views:video[0]?.views,
            likes:video[0]?.likes,
            subscribed:false
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
            axios({
                method:"put",
         url:`http://127.0.0.1:5050/updatevideo/${params.id}`,
         
                data:{...values,subscribed:true},
            }).then((res)=>{
                 navigate("/manage")
    
            })
    
        },
    });
    
    // useEffect(()=>{
    //     axios({method:"put",
    //      url:`http://127.0.0.1:5050/updatevide/${params.id}`,
    //     }).then((res)=>{
    //         setVideo(res.data)
    //     })
    // },[])
    return(
        <>
            <div className="container-fluid">
                <h1>Edit Video Now</h1>

                <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User ID</dt>
                    <dd><input name="id" type="number" onChange={formik.handleChange}></input></dd>

                    <dt> Title</dt>
                    <dd><input name="title" type="text" onChange={formik.handleChange}></input></dd>

                    <dt>URL</dt>
                    <dd><input name="url" type="text" onChange={formik.handleChange}></input></dd>

                    <dt>Views</dt>
                    <dd><input name="views" type="number" onChange={formik.handleChange}></input></dd>

                    <dt>Likes</dt>
                    <dd><input name="likes" type="number" onChange={formik.handleChange}></input></dd>

                    <div className="form-switch">
                
                    <input className="form-check-input" type="checkbox" name="subscribed"  onChange={formik.handleChange}></input>
                    Subscribed  &nbsp;</div>
                </dl>
                <button className="btn btn-danger">Add new video</button>
                <Link to="/manage" className="btn btn-danger">Cancle</Link>

            </form>
 
            </div>
        </>
    )
}