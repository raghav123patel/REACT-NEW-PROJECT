import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";
function UserDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null); 

    const getDetails = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axiosInstance.get(`${API_PATHS.USER_LIST}/${id}`, {
                headers: {
                    Authorization: token,
                },
            });
            console.log("User ID:", id);
            console.log("API Response:", response);
            setUser(response.data.user);
        } catch (error) {
            console.error("Error fetching user details:", error);
            navigate("/list");
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <h1>User Data</h1>
            {user ? (
                <>
                    <h4>ID: {user._id}</h4>
                    <h4>Name: {user.name}</h4>
                    <h4>Email: {user.email}</h4>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default UserDetail;



