import { useState } from "react";
import ForgotPasswordCard from "./ForgotPasswordCard";

export default function ForgotPassword(props)
{
    const [loading,setLoading]=useState(false);
    const handleForgot = (email)=>{
        setLoading(true);
        props.handleForgotPassword(email);
    }
    return(
        <div className="forgot_password">
            {loading && <h4 className="center">Loading...</h4>}
            {!loading && <ForgotPasswordCard handleForgotPassword={handleForgot}/>}
        </div>
    )
}