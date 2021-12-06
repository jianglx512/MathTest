import Question from './Question'
import { QuestionModel } from '../Models/QuestionModel'
import { QuestionSetModel } from '../Models/QuestionSetModel'
import React, { Component, useState } from 'react'

interface QuestionSetProps{
    questSet:QuestionSetModel;
}

const QuestionSet:React.FC<QuestionSetProps> = (props) => {
    const [questSetState, setQuestState] = useState(props.questSet);
    const [questListState, setQuestListState] = useState(props.questSet.QuestionList);

    function handleUserResultChangeEvent(id: number, userResult: string): void {
        let newQuestList = questListState.map((q)=>{
            if(q.Id === id){
                q.UserResult = userResult
            }
            return q;
        });
        setQuestListState(newQuestList);
    }

    let onSubmit = (): void =>{
        console.log("user submitted");
        calculateQuestionSet();
    }

    let calculateQuestionSet = ():void =>{
        let newQuestList = questListState.map((q)=>{
            let num = parseFloat(q.UserResult.trim());
            q.IsCorrect = false;
            if(!isNaN(num)){
                if(Math.abs(num-q.Result) === 0){
                    q.IsCorrect = true;
                }
            }
            return q;
        });
        setQuestListState(newQuestList);
    }
    return (
        <>
            <div className='questionSetDiv'>
                <h1 className='setTitle'>{questSetState.Title}</h1>
                <>
                    {questSetState.QuestionList.map((quest, i) => (
                        <Question key={i} quest ={quest} 
                            onUserResultChange={handleUserResultChangeEvent}/>
                    ))}
                </>
            </div>
            <div>
            <button onClick={()=>onSubmit()}>Submit</button></div>
        </>
    )
}

export default QuestionSet
