import React from 'react';
import {useState} from 'react';
import { Button,Form,Label} from 'reactstrap';
import {Link} from "react-router-dom";


export default function DiffLoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <div>
          <DiffLogin></DiffLogin>
        </div>
    )
}

function DiffLogin(){
    return( 
    <div>
        <Form>
        <Label className="contianer col-lg-5">
             <h2 className="disabled" href="#">Login as User</h2>
        </Label>

        <Link to="/login">
            <Button className='btn' outline color="success">Login as User</Button>{' '}
        </Link>
        </Form>
    
        <Form>
           <Label className="contianer col-lg-5">
             <h2 className="disabled" href="#">Login as Admin</h2>
            </Label>
    
            <Link to="/admin/login">
                <Button className='btn' outline color="success">Login as Admin</Button>{' '}
            </Link>
        </Form>
    </div>
    )
}

