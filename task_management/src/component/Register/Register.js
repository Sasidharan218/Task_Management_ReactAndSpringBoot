import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import '../Register/Register.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [addCustomer, setAddCustomer] = useState({
        email: "",
        name: "",
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAddCustomer(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:8080/api/auth/signup", addCustomer)
            console.log(res.data)
            alert('User Registered')
            navigate('/login')
        } catch (err) {
            console.log(err);
            alert("Error!")
        }

    }


    return (
        <>
            <Card className="card">
                <h3>Register</h3>
                <Form layout="vertical">

                    <div className="input">
                        <Form.Item label="Email">
                            <Input type="text" name="email" placeholder="Enter Email" onChange={handleChange} />
                        </Form.Item>
                    </div>
                    <div className="input">
                        <Form.Item label="Name">
                            <Input type="text" name="name" placeholder="Enter Name" onChange={handleChange} />
                        </Form.Item>
                    </div>
                    <div className="input">
                        <Form.Item label="User Name">
                            <Input type="text" name="username" placeholder="Enter Usename" onChange={handleChange} />
                        </Form.Item>
                    </div>
                    <div className="input">
                        <Form.Item label="Password">
                            <Input type="password" name="password" placeholder="Enter password" onChange={handleChange} />
                        </Form.Item>

                    </div>
                    <div className="input">
                        <Button onClick={handleClick}>Register</Button>
                    </div>
                    <p>Already have an Account__ <Link className="link1" to={'/login'}>Login</Link></p>
                </Form>

            </Card>
        </>
    )

}

export default Register;