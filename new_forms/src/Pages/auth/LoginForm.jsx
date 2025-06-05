import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";

function LoginForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
     e.preventDefault();
    //console.log(data);
    try {
      const response = await axiosInstance.post(`${API_PATHS.LOGIN}`,
        data
      );
      console.log(response.data.data);
      //localStorage.setItem("token", response.data.data.token);

      navigate("/list");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or network error!");
    }
  };

  return (
    <>
      <form>
        <center>
          {" "}
          <h1>LOGIN PAGE</h1>
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={data.email}
            onChange={handleChange}
          />
          <br /> <br />
          Password:
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value={data.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={handleSave}> login</button>
          <br />
          <br />
         <button onClick={() => navigate("/register")}>add user</button>
         <br />
         <br />
         <a href='forgot-password'onClick={() => navigate("/forgot-password")}>Forgot Password</a>
        </center>
      </form>
    </>
  );
}

export default LoginForm;