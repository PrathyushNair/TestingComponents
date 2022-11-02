import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { Message } from './Components/Message';
import { Select } from './Components/Select';
import { Form } from './Components/Form';
import { Counter } from './Components/Counter';
import { Asynccounter } from './Components/Asynccounter';
import { User } from './Components/User';
import { List } from './Components/List';

function App() {
  return (
    <div className="App">
      <b>Button Component</b>
      <Button label={"Submit"} innerText={"Hello"}/>
      <hr/>
      <b>Select Component</b>
      {/* <Select/> */}
      <hr/>
      <b>Form Component</b>
      <Form/>
      <hr/>
      <b>Counter Component</b>
      <Counter/>
      <hr/>
      <Asynccounter/>
      {/* <User/> */}
      <b>List Component</b>
      <List/>
    </div>
  );
}

export default App;
