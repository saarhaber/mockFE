import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Landing.css';

class Landing extends React.Component {
render(){

    return (
            <div className="heading">
                <Card.Text className="headtext"><h3>Welcome to MockUp</h3>
                    <h5> Where you can ... </h5>
                </Card.Text>
                <Button className="button" variant="primary">
                    <Link to='/login'>
                        Login
                    </Link>
                </Button>
                <br></br>
                <br></br>
                <Button className="button" variant="primary">
                    <Link to='/signup'>
                        Sign Up
                    </Link>
                </Button>
            </div>
    );
}
}






export default Landing;