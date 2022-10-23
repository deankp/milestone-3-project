import React, {useEffect, useState} from 'react'
import axios from "axios"
import Notes from "./Notes"
import SignUp from "./SignUp"
import Login from "./Login"

function IsLogin() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
      console.log("Hitting it")
      const checkLogin = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const verified = await axios.get("http://localhost:3001/users/verify", {
            headers: { Authorization: token },
          });
          console.log(verified);
          setIsLogin(verified.data);
          if (verified.data === false) return localStorage.clear();
        } else {
          setIsLogin(false);
        }
      };
      checkLogin();
    }, [isLogin]);
    
  return (
    <div>
        {/* {console.log(isLogin)} */}
      {isLogin ? <Notes setIsLogin={setIsLogin} /> : <Login setIsLogin={setIsLogin} />}
      {/* <Login /> */}
      {<SignUp setIsLogin={setIsLogin} />}
    </div>
  )
}

export default IsLogin