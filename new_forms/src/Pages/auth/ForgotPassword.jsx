
import { useState } from "react";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";

function ForgotPassword() {
  const [email, sendEmail] = useState("");
  const [message, setMessage] = useState("");


  const forgotPassword = async () => {
    try {
      let mailLink = await axiosInstance.post(
        `${API_PATHS.FORGOT_PASSWORD}`,
        { email }
      );
      console.log(mailLink);
      setMessage("Reset password link sent to your email.");
    } catch (error) {
      console.log(error);
      setMessage("Error sending reset link.");
    }
  };

  return (
    <>
      <center>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => sendEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={forgotPassword}>Send Reset Link</button>
        <br />
        <br />
        {message && <p>{message}</p>}
      </center>
    </>
  );
}

export default ForgotPassword;



// import {useState, useEffect} from "react";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";




// function ForgotPasswordComponent() {
//       const [email, sendEmail] = useState("");
//       const navigate = useNavigate();
      
//       const forgotPassword = async() => {
//         try {
//            let mailLink = await axios.post('https://node-js-wse4.onrender.com/user/forgot-password', {email});
//            console.log(mailLink);
//            sendEmail(mailLink.data);
//         }
//         catch(error){
//            console.log(error);
//         }
//     }
//     useEffect(() => {
//         forgotPassword();
//     },[]);
      





//        return (
//         <>
//         <center>
//         <h1>Forgot Password</h1>
//         <input type="email" placeholder="enter your email" value={email} />
//         <br />
//         <br />
//         <button onClick={()=> navigate("/reset-password")}>Reset Password Link</button>
//         </center>
//         </>
//        )
// }

// export default ForgotPasswordComponent;