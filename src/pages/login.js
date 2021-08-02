import React from 'react'

import { useState } from 'react'
import { Row, Col, Input, Label, FormFeedback, Button } from 'reactstrap'

import '../style/login.css'

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [err, setErr] = useState({
        email: false,
        password: false
    })

    const handleSubmit = async () => {
        let {valid} = await validate()
        if (valid) {
            alert("success")
        } else {
            alert("failed")
        }
    }

    const validate = async () => {
        let errEmail = !email.match(/\S+@\S.\S+/) || email.length === 0 ? true : false
        let errPass = password.length === 0 ? true : false
        
        setErr({
            email: errEmail,
            password: errPass
        })
        
        // console.log(errEmail, errPass);

        let valid = errPass || errEmail ? false : true
        return ({valid})

    }


    // console.log({email}, {password});


    return (
        <div className='login'>

            <Row className='navbar'>
                <Col xs={7} sm={10} md={7} className='app_name_header'>
                    SOPIC
                </Col>
                <Col xs={5} sm={2} md={5} className='btn_redirect'>
                    <a href='/register'>Register</a>
                </Col>
            </Row>

            <Row>
                
                <Col className='wording' md={6} >

                    <Row className='desc_1'>
                        Welcome your playgrount community
                    </Row>
                    <Row className='desc_2'>
                        Explore and get many topics!!
                    </Row>

                </Col>
                <Col className='form' md={6} >

                    <Row className='title'>Sign In</Row>
                    <Col className='col_fiels'>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            invalid={err.email}
                        />

                        <FormFeedback>
                            {err.email && "Format email tidak sesuai"}
                        </FormFeedback>
                    </Col>

                    <Col className='col_fiels'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            invalid={err.password}
                        />

                        <FormFeedback>
                            {err.password && "Format password tidak sesuai" }
                        </FormFeedback>
                    </Col>
                    <Row>

                        <Button className='btn_login' onClick={() => handleSubmit()} >Sign In</Button>
                    </Row>

                </Col>

            </Row>
        </div>
    )
}

export default LoginPage