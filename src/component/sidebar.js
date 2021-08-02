import { useState, useContext } from "react"
import { Button,Input, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import listTopic from '../services/topic.json'


const SidebarComponent = () => {

    const [posting, setPosting] = useState('')
    const [topic, setTopic] = useState('1')
    const [err, setErr] = useState(false)

    // popup modal
    const [postingModal, setPostingModal] = useState(false)
    const [logoutModal, setLogoutModal] = useState(false)
    

    const handleSelect = (select) => {
        let filterTopic = listTopic.filter(v=>v.name === select)[0].id
        setTopic(filterTopic)
    }

    const handleSubmit = () => {
        alert('ok')
    }
    
 

    return (
        <div className='sidebar'>
            <div className= 'logo_app'>SOPIC</div>
            <div className='desc_app'>Share Your Idea</div>
            <div className='profile'>
                <p className='name'>Profile</p>
                <br />

                <Row className='desc'>
                    <p>Welcome back <b>USER 1</b> 
                    <br />
                        let share more ideas
                    </p>
                </Row>

            </div>
            <Row>
                <Button className='btn-post'
                    color='primary'
                    onClick={setPostingModal}
                >Posting</Button>
            </Row>

            <Row>
                <Button className='btn-logout'
                    onClick={setLogoutModal}
                >Logout</Button>
            </Row>
            
            {/* Popup Posting */}

            <Modal isOpen={postingModal} toggle={()=>setPostingModal(!postingModal)} >
                <ModalHeader> USER1, what your manna post?</ModalHeader>

                <ModalBody>
                    <Row>
                        <Col md={2}>
                            <p> <h4>Topic</h4> </p>
                        </Col>
                        <Col md={10}>
                            <Input type="select" name='select' onChange={(e) => handleSelect(e.target.value)}>
                                {listTopic.map(v => (
                                    <option key={v.id} >{ v.name }</option>
                                ))}
                                
                            </Input>
                        </Col>
                    </Row>
                    <hr />
                    <Input type='textarea' style={{ height: "150px" }} value={posting} onChange={(e) => setPosting(e.target.value)} />
                    <div style={{
                        fontSize: '10pt',
                        color: `${posting.length > 100 ? 'red' : 'gray'}`,
                        float: "right"
                    }} >

                        {`${posting.length > 100 ? "character more than 100": 100 - posting.length}`}

                    </div>
                    


                </ModalBody>
                <ModalFooter>

                    <span>
                        <Button onClick={() => setPostingModal(false)} > Cancel</Button>
                        <Button onClick={()=>handleSubmit()} > Post it</Button>
                    </span>

                </ModalFooter>

            </Modal>

            {/* Logout Modla */}

            <Modal isOpen={logoutModal} toggle={()=> setLogoutModal(false)}>
                <ModalHeader>
                    Wanna Logout
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <span>
                        <Button onClick={() => setLogoutModal(false)}>cancel</Button>
                        <Button onClick={()=>{window.location = '/'}}>yes</Button>
                    </span>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default SidebarComponent