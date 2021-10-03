import React from 'react';
import { Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';


const Friend = (props) => {
    const{id,name,email,phone,website} =props.muser
    
       let history = useHistory();

    const handleclick=()=>{
        
        history.push(`/friend/${id}`);
    }
   
    return (
        <div>
            
                      <b>Name:</b> {name}
                      <br/>
                      <b>Email:</b> {email}<br/>
                      <b>Phone:</b> {phone}<br/>
                      <b>Website:</b> {website}<br/>
                      <b>I live in: </b>{props.muser.address.city}<br/><br/>
                      {/* <Link to={`/friend/${id}`}>Visit me</Link><br/><br/> */}

                      <Button onClick={handleclick} variant="info" className="mt-5">Sinle Details</Button>
                       

              
        </div>
    );
};

export default Friend;