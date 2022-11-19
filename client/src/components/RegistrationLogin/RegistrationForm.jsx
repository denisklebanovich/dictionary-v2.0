import React, {useState} from 'react';
import CustomInput2 from "./CustomInput2";
import CustomButton2 from "./Custom-Button2";
import "../../styles/login-registration/registration-from.scss"
import axios from "axios";
import {apiLink} from "../../assets/fakewords";
import {Link} from "react-router-dom";
const RegistrationForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function singUp() {
        const res = await axios.post(
            `${apiLink}/api/auth/register`,
            {
                "email": email, "password": password, "username": username
            }
        );
    }

    return (
        <div className="registration">
            <div className="registration-active">
                <div className="registration-header">
                    <p className="registration-header1">
                        {/*<span style='color: black'>*/}
                        {/*    Join Us*/}
                        {/*</span>*/}
                        {/*<span style='color: #F16482'>*/}
                        {/*    !*/}
                        {/*</span>*/}
                        Join us!

                    </p>
                    <div className="registration-header2">
                        don't put off learning new words for later!
                    </div>
                </div>
                <CustomInput2 header={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} type={"text"} placeholder={""} isRequired={true}/>
                <CustomInput2 header={"Email address"} value={email} onChange={(e) => setEmail(e.target.value)} type={"text"} placeholder={""} isRequired={true}/>
                <CustomInput2 header={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder={""} isRequired={true}/>
                <CustomButton2 onClick={()=> singUp()} text={"Sign Up"}/>
                <div className="login-zone">
                    <div className="login-zone-text">
                        Already a user?
                    </div>
                    <Link to={"/login"}>
                        <div className="login-link">
                            Login
                        </div>
                    </Link>


                </div>


            </div>
        </div>
    );
};

export default RegistrationForm;