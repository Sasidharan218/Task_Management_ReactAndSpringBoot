import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import '../Login/Login.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

 function Login() {
    const [usernameOrEmail,setUsernameOrEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
            e.preventDefault();

            try{
                const response = await axios.post("http://localhost:8080/api/auth/signin",{usernameOrEmail,password})
                window.sessionStorage.setItem('authToken',response.data.jwt.accessToken)
               
               navigate('/')

            }catch (err){
                console.log(err)
            }

    }
    return(
        <>
       <Card className="card">
       <h3>Login</h3>
       <Form layout="vertical">
            
            <div className="input">
            <Form.Item label="Email">
            <Input type="text" name="usernameOrEmail" placeholder="Enter Email" onChange={(e) => setUsernameOrEmail(e.target.value)}/>
            </Form.Item>
            </div>
            <div className="input">
                <Form.Item label="Password">
                <Input type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
            </div>
            <div className="input">
            <Button onClick={handleLogin}>Login</Button>
            </div>
            <p>Don't have an Account? <Link className="link1" to={'/register'}>Register</Link></p>
        </Form>

       </Card>
        </>
    )
    
}

export default Login;