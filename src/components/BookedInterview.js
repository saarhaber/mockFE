import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';

class BookedInterview extends React.Component {
  render() {
  return (
    <div className="SingleInterview">
      <Card style={{ width: '18rem', borderRadius: '20px'}}>
          <Card.Body>
           <Card.Title>Interview</Card.Title>
            <Card.Text>
              Time: time here;
              <br></br>
              Location: location here
              <br></br>
              Interviewer: name here
             </Card.Text>
             {/* This button will BOOK the meeting */}
             <Button variant="primary">Remove</Button>
           </Card.Body>
        </Card>
    </div>
  );
  }
}

export default BookedInterview;
