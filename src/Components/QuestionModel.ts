interface IQuestion {
  Id: number;
  Text: string;
  Result: number;
}

class QuestionModel implements IQuestion {
  public Id: number = -1;
  public Text: string = "";
  public Result: number = 0;
}
export { QuestionModel };
