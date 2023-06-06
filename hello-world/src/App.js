import './App.css';
import {Greet} from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message/>
        {/* <Greet name="Ram" age='2526' id='007'>
          <p>This is a child prop and can be of any type</p>
          <button>Click me</button>
          <Hello />
          <Greet />
        </Greet>
        <Welcome name="className" />
        <Hello /> */}
      </header>
    </div>
  );
}

export default App;
