// import React, { useState } from "react";
// import UserContext from "./context";

// function UserContextProvider(props) {
//   const [user, setUser] = useState(undefined);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   async function login(email, password) {
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({ email, password }),
//     };

//     const res = await fetch("http://localhost:3002/api/users/login", options);
//     const data = await res.json();
//     if (data.user) {
//       setUser(data.user);
//       setIsAuthenticated(true);
//     }
//     console.log(data.status);

//     return data.status;
//   }

//   function logout() {
//     console.log("id", user._id);

//     fetch("http://localhost:3002/api/logout/" + user._id, {
//       method: "GET",
//       credentials: "include",
//     });
//     setUser(undefined);
//     setIsAuthenticated(false);
//   }

//   return (
//     <UserContext.Provider
//       {...props}
//       value={{
//         isAuthenticated,
//         setIsAuthenticated,
//         user,
//         setUser,
//         login,
//         logout,
//       }}
//     />
//   );
// }

// export default UserContextProvider;
