import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useCookies } from "react-cookie";


export default function TutorialLogin() {
    const [cookies, setCookie, removeCookie] = useCookies()

    const navigate =  useNavigate();
  return (
    <>
      <div>
        <Formik
          initialValues={{
            UserId: "",
            Password: ""
          }}
          onSubmit={(values) => {
            // Handle form submission here
            console.log(values);
            axios({method:"GET", url:"http://127.0.0.1:5000/customer"})
              .then((res) => {
                for(var user of res.data){
                    // console.log(user,"pp")
                    if(user.UserId === values.UserId && user.Password === values.Password){
                        alert("log In sucessfully done...")
                        setCookie("UserDetails", user)
                        console.log("hhh",user)
                        navigate("/videos");
                        break;
                    }else{
                        navigate("/invalid")

                    }
                }
                // console.log(res.data);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
          validationSchema={Yup.object({
            UserId: Yup.string().required("User ID is Required"),
            Password: Yup.string().required("Password is Required")
          })}
        >
          <form  className="w-50">
          <h2>Tutorial LogIn</h2>

            <dl>
              <dt>User ID</dt>
              <dd>
                <Field type="text" name="UserId" className="input-form"></Field>
              </dd>
              <ErrorMessage name="UserId" className="text-danger" component="span"  />

              <dt>Password</dt>
              <dd>
                <Field type="text" name="Password" ></Field>
              </dd>
              <ErrorMessage name="Password" className="text-danger" component="span"  />
             
            </dl>
            <button  className="btn btn-primary w-25">
              Log In  
            </button>
            <span>
            <button  onClick={()=>{navigate("/register")}} className="btn btn-link">Not Register</button>

            </span>
          </form>
        </Formik>
      </div>
    </>
  );
}
