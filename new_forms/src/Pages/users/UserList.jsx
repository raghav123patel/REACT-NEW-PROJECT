import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";
function UserList() {
    const navigate = useNavigate();

    const [users, userList] = useState([]);

    const getUsers = async() => {                       
        try {
           // const token = localStorage.getItem("token");
            const result = await axiosInstance.get(`${API_PATHS.USER_LIST}?pageNumber=${1}&pageSize=1000`, 
            // {
            //      headers: {
            //         Authorization: token,
            //      },
            // }
            );
            console.log(result);
            userList(result.data.data);
    }  catch(error) {
        console.log(error);
        navigate("/login");
    }
};
useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>
  <table border="1" cellPadding="10" cellSpacing="0">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{index +1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          {/* <td> <button onClick={()=> navigate("/details/:id")}> Details </button></td> */}
           <td> <button onClick={()=> navigate(`/details/${user.id}`)}> Details </button><button style={{marginLeft:"10px"}} onClick={()=> navigate(`/delete/${user.id}`)}> Delete </button></td> 
        </tr>
      ))}
    </tbody>
  </table>
    </>
  );
};
export default UserList;







