import Question from './Question'
import { QuestionModel } from '../Models/QuestionModel'
import { QuestionSetModel } from '../Models/QuestionSetModel'
import React, { Component, useRef } from 'react'

const QuestionSet = (questionSet: QuestionSetModel) => {

    return (
        <>
            <div className='questionSetDiv'>
                <h1 className='setTitle'>{questionSet.Title}</h1>
                <>
                    {questionSet.QuestionList.map((quest, i) => (
                        <Question key={i}
                            {...quest} />
                    ))}
                </>
            </div>
            <div><button onClick={() => questionSet.onSubmit()}>Submit</button></div>
        </>
    )
}

export default QuestionSet
