import axios from "../api/axiosconfig";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ResetPasswordCard from "./ResetPasswordCard";

export default function ResetPassword(props){
    const [ verified,setVerified ] =useState(false);
    const [ loading,setLoading ] = useState(true);
    const { id,token } = useParams();
    useEffect(()=>{
        const verifyToken = async()=>{
            try {
                const data_verify = { token:token,userId:id };
                const user = await axios.post("/verify_token",data_verify);
                console.log(user);
                setLoading(false);
                setVerified(true);
            } catch (error) {
                setLoading(false)
                console.log(error);
                setVerified(false);
            }
        }
        verifyToken();
    },[token,id]);

    const handlePasswordReset= (reset_data)=>{
        setLoading(true);
        props.handleResetingPassword(reset_data);
    }
    return(
        <div className="reset_password">
            { loading && <h4 className="center">Loading.....</h4>}
            { (!loading && verified===true) && <ResetPasswordCard id={id} token={token} handleResetingPassword={ handlePasswordReset }/>}
            { (!loading && verified===false) && <h1 className="center">Link is expired please request another link</h1>}
        </div>
    )
}