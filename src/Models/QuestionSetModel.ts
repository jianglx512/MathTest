import { QuestionModel } from "./QuestionModel";
interface IQuestionSet {
  Title: string;
  QuestionList: QuestionModel[];
  AllCorrect: boolean;
  HideEachMark: boolean;
  ShowSetCorrect: boolean;
}

class QuestionSetModel implements IQuestionSet {
  public Id: number = -1;
  public Title: string = "";
  public QuestionList: QuestionModel[] = [];
  public AllCorrect: boolean = false;
  public HideEachMark: boolean = false;
  public ShowSetCorrect: boolean = false;
}
export { QuestionSetModel };
