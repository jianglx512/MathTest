import { QuestionModel } from "./QuestionModel";
interface IQuestionSet {
  Title: string;
  QuestionList: QuestionModel[];
  AllCorrect: boolean;
  HideEachMark: boolean;
  ShowSetCorrect: boolean;

  onSubmit: () => void;
}

class QuestionSetModel implements IQuestionSet {
  public Id: number = -1;
  public Title: string = "";
  public QuestionList: QuestionModel[] = [];
  public AllCorrect: boolean = false;
  public HideEachMark: boolean = false;
  public ShowSetCorrect: boolean = false;

  public onSubmit(): void {}
}
export { QuestionSetModel };
