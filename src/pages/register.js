import React from 'react'

import { useState } from 'react'
import { Row, Col, Input, Label, FormFeedback, Button, Card, CardLink } from 'reactstrap'

import '../style/register.css'

const RegisterPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [err, setErr] = useState({
        email: false,
        password: false,
        rePassword: false,
    })

    const handleSubmit = async () => {
        let {valid, validPass} = await validate()
        if (valid) {
            if (validPass) {
                alert('Registered account!!');
            }
            
        } else {
            alert("Invalid input!!")
        }
    }

    const validate = async () => {
        let errEmail = !email.match(/\S+@\S.\S+/) || email.length === 0 ? true : false
        let errPass = password.length === 0 ? true : false
        let errRePass = rePassword !== password || rePassword.length === 0  ? true : false

        
        setErr({
            email: errEmail,
            password: errPass,
            rePassword: errRePass
        })
        

        let valid = errPass || errEmail ? false : true
        let validPass = errPass || errRePass ? false : true

        return ({valid, validPass})
    }


    return (

        <div className='body'>

            <Row className='navbar'>
                <Col xs={7} sm={10} md={7} className='app_name_header'>
                    SOPIC
                </Col>

            </Row>

        <div className='register'>

                <Row>
                    <h4 style={{textAlign:'center', color: 'white', marginBottom: '20px'}}>SOPIC</h4>
                    <Card style={{ width: '600px', marginBottom: '50px' }}>
                <Col className='form' >

                    <Row className='title'>Create Your Account</Row>
                    <Col className='col_fiels'>
                        <Label className='label-title'>Email</Label>
                        <Input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            invalid={err.email}
                            placeholder="Input email address"
                        />

                        <FormFeedback>
                            {err.email && "Format email tidak sesuai"}
                        </FormFeedback>
                    </Col>

                    <Col className='col_fiels'>
                        <Label className='label-title'>Password</Label>
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            invalid={err.password}
                            placeholder="******"
                        />

                        <FormFeedback>
                            {err.password && "Password tidak boleh kosong" }
                        </FormFeedback>
                    </Col>

                    <Col className='col_fiels'>
                        <Label className='label-title'>Retype Password</Label>
                        <Input
                            type='password'
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            invalid={err.rePassword}
                            placeholder="******"
                        />

                        <FormFeedback>
                            {err.rePassword && "Password tidak sesuai" }
                        </FormFeedback>
                    </Col>
                        <Row style={{ marginBottom: '10px' }}>
                            <Button className='btn_register' onClick={() => handleSubmit()} >Register</Button>
                        </Row>
                    </Col>
                        <CardLink style={{ textAlign: 'center', marginBottom: '20px'}} href="/">back to home page</CardLink>
                    </Card>
                </Row>
                
            </div>
            </div>
    )
}

export default RegisterPage