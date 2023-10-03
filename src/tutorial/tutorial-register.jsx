import axios from "axios"
import { useFormik } from "formik";

import {  useNavigate } from "react-router-dom";
import TutorialLogin from "./tutorial-login";


export default function TutorialRegister() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            UserId: "",
            UserName: "",
            Password: "",
            Age: 0,
            Email: "",
            Mobile: ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
            axios({ method: "post", url: "http://127.0.0.1:5000/registercustomer", data: values });
            alert("registration successfully done...");
            navigate("/logIn");
        }

    })
    return (
        <>
            <div>
              <form onSubmit={formik.handleSubmit} className="w-50">
              <h2> Tutorial register</h2>

              <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange}></input></dd>

                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange}></input></dd>

                    <dt>Password</dt>
                    <dd><input type="text" name="Password" onChange={formik.handleChange}></input></dd>

                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange}></input></dd>

                    <dt>Email Id</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange}></input></dd>

                    <dt>Mobile</dt>
                    <dd><input type="number" name="Mobile" onChange={formik.handleChange}></input></dd>
                    <button className="btn btn-primary w-25" type="submit">Register</button>
            <button  onClick={()=>{navigate("/logIn")}} className="btn btn-link">Already Register</button>

                    </dl>
              </form>
                
            </div>
        </>
    )
}