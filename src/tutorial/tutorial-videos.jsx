import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { Navigate, useNavigate } from "react-router-dom";

 export default  function TutorialVideos(){
     const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!cookies?.UserDetails?.UserId){
            navigate("/logIn")
        }
        },[cookies])


    const deleteCookieHandler =() =>{
        // alert("hihi")
        removeCookie("UserDetails")
        navigate("/home")
    }

    return(
        <>
            <div>
                <h2 >
                
                    Tutorial Videos -  {cookies?.UserDetails?.UserName} {""}
                <span><button className="btn btn-link" onClick={deleteCookieHandler}>Sign Out</button></span>

                </h2>

            </div>
 <div>
<iframe src="https://www.youtube.com/embed/NviBiNOBAgw" height="300"  width="300" className="me-5"></iframe>
<iframe src="https://www.youtube.com/embed/8N1yWB2LEdE" height="300"  width="300"></iframe>

</div> 
        </>
    )
}








// import React, { useEffect } from "react";
// import { useCookies } from "react-cookie";
// import { Navigate, useNavigate } from "react-router-dom";

// export default function TutorialVideos() {
//   const [cookies, setCookie, removeCookie] = useCookies();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the "UserDetails" cookie exists and has a UserId
//     if (!cookies.UserDetails || !cookies.UserDetails.UserId) {
//       // Redirect to the login page if the user is not logged in
//       navigate("/logIn");
//     }
//   }, [cookies]); // Include cookies in the dependency array

//   const deleteCookieHandler = () => {
//     // Remove the "UserDetails" cookie when signing out
//     removeCookie("UserDetails");
//     // Redirect to the home page
//     navigate("/logIn");
//   };

//   return (
//     <>
//       <div>
//         {cookies.UserDetails ? (
//           <>
//             <h2>
//               Tutorial Videos - {cookies.UserDetails.UserName}{" "}
//               <span>
//                 <button onClick={deleteCookieHandler}>Sign Out</button>
//               </span>
//             </h2>
//             {/* Add your tutorial video content here */}
//           </>
//         ) : (
//           // Render a loading message or alternative content
//           <p>Loading...</p>
//         )}
//       </div>
//      <div>
//         <iframe src="https://www.youtube.com/embed/NviBiNOBAgw" height="300"  width="300"></iframe>
//         <iframe src="https://www.youtube.com/embed/8N1yWB2LEdE" height="300"  width="300"></iframe>

//      </div>

//     </>
//   );
// }
