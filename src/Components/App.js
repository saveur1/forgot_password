import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import axios from "../api/axiosconfig";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import ResetPasswordSuccess from "./ResetPasswordSuccess";
import { useNavigate } from "react-router-dom";
import UserFoundSuccess from "./UserFoundSuccess";


export default function App() {
   const Navigate = useNavigate();

   const handleForgotPassword = async(email)=>{
       try {
        const data = { email:email };
         await axios.post("/forgot_password",data);
        Navigate("/forgot_password/success");
       } catch (error) {
         console.log(error);
       }
  }

  const handleResetingPassword =async(reseting_data)=>{
    try {
      const response = await axios.post("/reset_password",reseting_data);
      console.log(response.data);
      Navigate("/password_reset/success");
    } catch (error) {
      console.log(error);
      alert("There was an error in you request please check if you haven't exceed maximum time for reseting a password");
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />}/>
        <Route index path="/forgot_password" element={<ForgotPassword handleForgotPassword={handleForgotPassword}/>}/>
        <Route index path="/password_reset/:id/:token" element={<ResetPassword handleResetingPassword={ handleResetingPassword }/>}/>
        <Route index path="/password_reset/success" element={<ResetPasswordSuccess/>}/>
        <Route path="/forgot_password/success" element={<UserFoundSuccess />} />
      </Routes>
    </div>
  );
}