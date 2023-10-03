import axios from "axios"
import { useFormik } from "formik"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function DeleteVideo(){
    const params = useParams();
  var navigate = useNavigate()
    useEffect(()=>{
      
        axios({
            method:"DELETE",
            // url:`http://127.0.0.1:5050/videos/${params.id}`,
            url:`http://127.0.0.1:5050/deletevideo/${params.id}`,
         }).then((doc)=>{
            // document.write("sucessuflly deletes");
         navigate("/register")
         })
    },[])
    return(
        <>
 <h2>Record DEleted Sucessfully..</h2>
        </>
    )
}