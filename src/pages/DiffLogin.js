import React from 'react'
import { useState } from 'react'
import { Button, Form, Label } from 'reactstrap'
import { Link } from "react-router-dom"


export default function DiffLoginPage () {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div>
            <DiffLogin></DiffLogin>
        </div>
    )
}

function DiffLogin () {
    return (
        <div className='diffLogin'>
            <Form className='form1'>
                <Label className="contianer col-lg-5">
                    <h2 className="disabled" href="#">User Login</h2>
                </Label>
                <Link to="/login">
                    <Button className='btn' outline color="success">Login</Button>{' '}
                </Link>
            </Form>

            <Form className='form2'>
                <Label className="contianer col-lg-5">
                    <h2 className="disabled" href="#">Admin Login</h2>
                </Label>
                <Link to="/admin/login">
                    <Button className='btn' outline color="success">Login</Button>{' '}
                </Link>
            </Form>
        </div>
    )
}

