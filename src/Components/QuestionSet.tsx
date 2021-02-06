import React from 'react'
import Question from './Question'

const QuestionSet = (props: any) => {
    return (
        <div>
            <h1>Here is the question set: {props.title}</h1>
            <Question num = {5}/>
            <Question num = {2}/>
            <Question num = {3}/>
        </div>
    )
}

export default QuestionSet
