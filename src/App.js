import Flexbox from 'flexbox-react';
import React from 'react';
import ImportJson from './component/importJson';
import ShowJson from './component/showJson';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jsonText:{}};
  }
  setJsonText(e){
    this.setState({jsonText:this.isValidJsonString(e.target.value)?JSON.parse(e.target.value):{message:"Enter valid json string !!!"}});
  }

  isValidJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

  render(){
  return (
    <div className="App">
      <Flexbox margin="20px"><ImportJson setJsonText={this.setJsonText.bind(this)}/></Flexbox>
      <Flexbox margin="20px"><ShowJson json={this.state.jsonText}/></Flexbox>
    </div>
  );
  }
}

export default App;
