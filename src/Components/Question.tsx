import React from 'react'
import { QuestionModel } from '../Models/QuestionModel'
import { GiCheckMark } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Question = (quest: QuestionModel) => {
    let textInput: any = React.createRef();
    return (
        <div className='questionDiv'>
            <h1 className='questionText'>{quest.Text}</h1>
            <input className='questionValue' type="text" ref={textInput} />
            <div className='iconDiv'>{true ? <FaTimes style={{ color: 'red' }} /> : <GiCheckMark style={{ color: 'green' }} />}</div>
        </div>
    )
}

export default Question
