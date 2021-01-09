import Flexbox from 'flexbox-react';
import React from 'react';
import {Card} from 'react-bootstrap';


class ImportJson extends React.Component {

  render(){
  return (
        <Card>
          <Card.Header>Import Json</Card.Header>
          <Card.Body>
                <textarea onChange={this.props.setJsonText} class="form-control" id="jsonText"></textarea>
          </Card.Body>
        </Card>
  );
  }
}

export default ImportJson;
