import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";
function RegisterForm() {
  const navigate = useNavigate();
  const [register, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
  })

 const handleChange = (e) => {
    setRegistration({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  

  const handelSave = async(e) => {
    e.preventDefault();
    //console.log(register);
    setRegistration(register);
    try {
      const response = await axiosInstance.post(
       `${API_PATHS.REGISTER}`,
        register
      );
      console.log(response.data.data);
      const {emailVerificationTOken, id} = response.data.data;
      //localStorage.setItem("token", response.data.emailVerificationTOken, response.data.id);
      //localStorage.setItem("token", JSON.stringify(response.data.emailVerificationTOken, response.data.id));
      //localStorage.setItem("token", JSON.stringify({emailVerificationTOken, id}));
      
      navigate(`/verification/${emailVerificationTOken}/${id}`);
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
          <h1>Registration page</h1>
          username:{" "}
          <input
            type="text"
            name="name"
            placeholder="username"
            value={register.name}
            onChange={handleChange}
          />
          <br />
          <br />
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="email"
            value={register.email}
            onChange={handleChange}
          />
          <br /> <br />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={register.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={handelSave}> save</button>
        </center>
      </form>
    </>
  );
}

export default RegisterForm;











// import React, { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// function RegisterComponent() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async() => {

//     navigate("/list")
   
//   };

//   return (
//     <div>
//       <h2>User Form</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//           value={data.name}
//           onChange={handleChange}
//         /> 
//         <br />
//         <input
//           type="text"
//           placeholder="Enter your email"
//           name="email"
//           value={data.email}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           name="password"
//           value={data.password}
//           onChange={handleChange}
//         />
//         <br />
//         <button type="button" onClick={handleSubmit}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RegisterComponent;
