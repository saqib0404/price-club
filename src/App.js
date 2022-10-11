import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline">This is my HEADER</h1>
      <p>This is just a paragraph</p>
    </div>
  );
}

export default App;
