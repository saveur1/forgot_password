import { Link } from "react-router-dom";

export default function Login()
{
    return(
        <div className="login_container">
            <div className="login_card">
                <div className="card_title">
                   <h2 className="center">Welcome Back</h2>
                </div>
                <div className="card_body">
                    <form method="post">
                        <div className="form_group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="form_group">
                            <div className="label_forgot">
                                <label htmlFor="password">Passwod</label>
                                <label className="forgot_pass"><Link to="/forgot_password">forgot password?</Link></label>
                            </div>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <input type="submit" name="login" id="login" value="Login" className="btn_submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}