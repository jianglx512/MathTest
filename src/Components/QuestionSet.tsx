import Question from './Question'
import { QuestionModel } from '../Models/QuestionModel'
import { QuestionSetModel } from '../Models/QuestionSetModel'

const QuestionSet = (questSet: QuestionSetModel) => {
    return (
        <div className = 'questionSetDiv'>
            <h1 className ='setTitle'>{questSet.Title}</h1>
            <>
                {questSet.QuestionList.map((quest) => (
                    <Question {...quest}
                    />
                ))}
            </>
        </div>
    )
}

export default QuestionSet
