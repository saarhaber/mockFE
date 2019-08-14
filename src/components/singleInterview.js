import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';

class SingleInterview extends React.Component {
  render() {
  return (
    <div className="SingleInterview">
      <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
           <Card.Title>Interview</Card.Title>
            <Card.Text>
              TIme:
              <br></br>
              Location:
              <br></br>
              Interviewer:
             </Card.Text>
             {/* This button will BOOK the meeting */}
             <Button variant="primary">Book Mock Interview</Button>
           </Card.Body>
        </Card>
    </div>
  );
  }
}

export default SingleInterview;
