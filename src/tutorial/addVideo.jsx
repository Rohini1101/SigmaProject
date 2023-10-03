import axios from "axios";
import { useFormik, Field, Formik,Form } from "formik"
import { useNavigate } from "react-router-dom";
// import { Form } from "react-router-dom";

export default function AddVideo(){
    const navigate = useNavigate();
const formik = useFormik({
    initialValues:{
        id: 0,
        title:"",
        url:"",
        views:0,
        likes:0,
        subscribed:false
    },
    onSubmit:(values)=>{
        alert(JSON.stringify(values));
        axios({
            method:"post",
            url:"http://127.0.0.1:5050/addvideo",
            data:values,
        }).then((res)=>{
             navigate("/manage")

        })

    },
});


    return(
        <div>
            <h2>Add new Video</h2>
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
            </form>
        </div>
    )
}