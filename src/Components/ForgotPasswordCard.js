import { useState } from "react";

export default function ForgotPasswordCard(props)
{
    const [email,setEmail]=useState("");
    const handleSubmition = (e)=>{
        e.preventDefault();
        props.handleForgotPassword(email);
    }
    return(
        <div className="login_container">
            <div className="login_card">
                <div className="card_title">
                   <h2 className="center">Request Reseting Your password</h2>
                </div>
                <div className="card_body">
                    <form method="post" onSubmit={handleSubmition}>
                        <div className="form_group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={ email } minLength="6"accept="email" onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <input type="submit" name="login" id="login" value="Continue" className="btn_submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}