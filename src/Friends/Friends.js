import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import { Col, Container, Row } from 'react-bootstrap';
const Friends = () => {
    const[user,setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    return (
        <div>
            <h1>Best Friends,,</h1>
            <Container fluid>
              <Row>
                  
                {
                    user.map(muser=> <Col md={3} className="border border-primary p-5"><Friend key={muser.id} muser={muser}></Friend></Col>
                    )
                }

               
              </Row>
            </Container>
        </div>
    );
};

export default Friends;