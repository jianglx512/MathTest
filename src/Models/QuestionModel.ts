interface IQuestion {
  Id: number;
  Text: string;
  Result: number;
  IsCorrect: boolean;
  isEditable : boolean;
}

class QuestionModel implements IQuestion {
  public Id: number = -1;
  public Text: string = "";
  public Result: number = 0;
  public IsCorrect: boolean = false;
  public isEditable : boolean = true;
}
export { QuestionModel };
