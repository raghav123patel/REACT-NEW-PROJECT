
import {useNavigate, useParams} from "react-router-dom"
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";
function VerifyEmail() {
    const navigate = useNavigate();
    const {token, id} = useParams();
    const verifyEmail = async() => {
          try {
            const isVerified = await axiosInstance.get(`${API_PATHS.VERIFY_EMAIL}?token=${token}&userId=${id}`);
            console.log(isVerified);
            if(isVerified.data) {
                console.log("email verified successfully");

            }
          }
          catch(error){
            console.log(error);
          }
          navigate("/login");
    }
    return(
        <>
        <div>
            <input type="email" placeholder="enter your email" />
            <br />
            <button onClick= {verifyEmail}> email verification </button>
        </div>
        </>
    );
}

export default VerifyEmail;

