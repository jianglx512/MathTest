import QuestionSet from './Components/QuestionSet'
import { QuestionSetModel } from './Models/QuestionSetModel'
import { useState } from 'react'
import './App.css';

function App() {

  let defQuestionSet = new QuestionSetModel();
  defQuestionSet.Title = 'The first QuestionSet';
  defQuestionSet.Id = 1;
  defQuestionSet.QuestionList = [
    {
      Id: 1,
      Text: '1 + 2 = ',
      Result: 3
    },
    {
      Id: 2,
      Text: "6 " + "\u00f7" + " 3 = ",
      Result: 2
    },
    {
      Id: 3,
      Text: '2 + 2 ' + "\u00d7" + ' 5 = ',
      Result: 12
    },
    {
      Id: 4,
      Text: '(2 + 2) ' + "\u00d7" + ' 5 = ',
      Result: 20
    },
  ];

  const [questionSet, setQuestionSet] = useState(defQuestionSet);
  return (
    <div className="App">
      <QuestionSet {...questionSet} />
    </div>
  );
}

export default App;
