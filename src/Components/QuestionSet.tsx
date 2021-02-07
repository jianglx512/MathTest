import Question from './Question'
import { QuestionModel } from './QuestionModel'
import { QuestionSetModel } from './QuestionSetModel'

const QuestionSet = (questSet: QuestionSetModel) => {
    return (
        <div>
            <h1>Here is the question set: {questSet.Title}</h1>
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
