import React from 'react'
import { QuestionModel } from '../Models/QuestionModel'

const Question = (quest: QuestionModel) => {
    return (
        <div className='questionDiv'>
            <h1 className='questionText'>{quest.Text}</h1>
            <input className='questionValue' type="text" />
        </div>
    )
}

export default Question
