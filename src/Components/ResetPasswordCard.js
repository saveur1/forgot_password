import { useState } from "react";

export default function ResetPasswordCard(props){
    const [ password,setPassword ] = useState("");
    const [ conf_password,setConfPassword ] = useState("");
    const handleReseting = async(e)=>{
        e.preventDefault();
        if(password!==conf_password){
            alert("Password mismatch, confirm password must be the same as password");
            return;
        }
        const reseting_data = { token:props.token, password:password, userId:props.id };
        props.handleResetingPassword(reseting_data);
    }
    return (
        <div className="login_container">
            <div className="login_card">
                <div className="card_title">
                   <h2 className="center">Request Reseting Your password</h2>
                </div>
                <div className="card_body">
                    <form method="post" onSubmit={handleReseting}>
                        <div className="form_group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={ password } onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div className="form_group">
                            <label htmlFor="conf_password">Confirm Password</label>
                            <input type="password" name="conf_password" id="conf_password" value={ conf_password } onChange={(e)=>setConfPassword(e.target.value)} required/>
                        </div>
                        <input type="submit" name="login" id="login" value="Reset" className="btn_submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
}