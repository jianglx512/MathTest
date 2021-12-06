import React,{useState} from 'react'
import { QuestionModel } from '../Models/QuestionModel'
import { GiCheckMark } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

interface QuestionProps{
    quest:QuestionModel;
    onUserResultChange(id:number, userResult:string):void;
}

const Question:React.FC<QuestionProps> = (props) => {
    let textInput: any = React.createRef();

    function setUserResult(){
        props.onUserResultChange(props.quest.Id, textInput.current.value)
    }
    return (
        <div className='questionDiv'>
            <h1 className='questionText'>{props.quest.Text}</h1>
            <input className='questionValue' type="text" ref={textInput} value = {props.quest.UserResult} onChange = {setUserResult}/>
            <div className='iconDiv'>{props.quest.IsCorrect ? <GiCheckMark style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} /> }</div>
        </div>
    )
}

export default Question
