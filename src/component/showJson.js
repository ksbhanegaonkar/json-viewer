import Flexbox from 'flexbox-react';
import React from 'react';
import { Alert, Button, Card, Nav } from 'react-bootstrap';
import ReactJson from 'react-json-view';
import sampleJson from '../Samples/example_2.json'


class ShowJson extends React.Component {

  render(){
  return (
    <div className="App">
        <Card>
          <Card.Header>Display Json</Card.Header>
          <Card.Body>
                <ReactJson src={this.props.json} />
          </Card.Body>
        </Card>
    </div>
  );
  }
}

export default ShowJson;
