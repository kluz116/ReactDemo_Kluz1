import { Component } from "react";
import "./styles.css";
import Welcome from "./components/Welcome";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }
  const getData = ()=> {
    axios.get('http://jsonplaceholder.typicode.com/users').then(res=>{
      console.table(res.data)
    })
  }
  componentDidMount(){
    
  }
  render() {
  
    const greeting = "Allan Musembya";
    return (
      <div>
        <Welcome value={greeting} />;
      </div>
    );
  }
}

export default App;
