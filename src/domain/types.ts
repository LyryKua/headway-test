export type Option = {
  key: string;
  content: {
    text: string;
  }
  isCorrect: boolean;
}

export type Question = {
  key: string;
  content: {
    text: string;
  }
  options: Option[];
  amount: number;
}
