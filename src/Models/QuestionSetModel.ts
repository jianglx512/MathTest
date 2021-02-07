import { QuestionModel } from './QuestionModel'
interface IQuestionSet {
    Title: string;
    QuestionList: QuestionModel[];
  }
  
  class QuestionSetModel implements IQuestionSet {
    public Id: number = -1;
    public Title: string = "";
    public QuestionList: QuestionModel[] = [];
  }
  export { QuestionSetModel };
  