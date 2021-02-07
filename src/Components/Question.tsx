import React from 'react'
import { QuestionModel } from '../Models/QuestionModel'

const Question = (quest: QuestionModel) => {
    return (
        <div>
            <h1>here is the {quest.Id} question</h1>
        </div>
    )
}

export default Question
