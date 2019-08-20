import React from 'react';
import './SingleInterview.css';
import {Card, Button} from 'react-bootstrap';

class SingleInterview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="SingleInterview">
        <Card style={{ width: '18rem', borderRadius: '20px'}}>
            <Card.Body>
            <Card.Title>Interview</Card.Title>
              <Card.Text>
              {this.props.interview_.dateCreated}
                <br></br>
                Location: location here
                <br></br>
                {this.props.interview_.extraInfo}
              </Card.Text>
              {/* This button will BOOK the meeting */}
              <Button variant="primary">BOOK</Button>
            </Card.Body>
          </Card>
      </div>
    );
  }
}

export default SingleInterview;
