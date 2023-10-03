import { useNavigate } from "react-router-dom";

export default function TutorialError(){
    const navigate =useNavigate()
    return(
        <>
            <div className="container-fluid">
                 <h2 className="text-danger">Invalid Credentials</h2>
                 <button onClick={()=>{navigate("/logIn")}} className="btn btn-link">Try Again</button>
            </div>
        </>
    )
}