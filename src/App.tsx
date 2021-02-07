import QuestionSet from './Components/QuestionSet'
import { QuestionSetModel } from './Models/QuestionSetModel'
import './App.css';

function App() {
  let questionSet = new QuestionSetModel();
  return (
    <div className="App">
      <QuestionSet {...questionSet}/>
    </div>
  );
}

export default App;
