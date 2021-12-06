interface IQuestion {
  Id: number;
  Text: string;
  Result: number;
  IsCorrect: boolean;
  isEditable : boolean;
  UserResult: string;

  //onUserResultChange: (id:number, userResult:string) => void;
}

class QuestionModel implements IQuestion {
  public Id: number = -1;
  public Text: string = "";
  public Result: number = 0;
  public IsCorrect: boolean = false;
  public isEditable: boolean = true;
  public UserResult: string = "";

  //public onUserResultChange(id:number, userResult:string): void {}
}
export { QuestionModel };
