import './App.css';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline mt-4">This is my HEADER</h1>
      <p>This is just a paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
