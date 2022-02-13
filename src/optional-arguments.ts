export {};

let bmiCalc: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
) => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

// bmi(1.78, 86);

// bmi(身長、体重、console.logで出力するかどうか？)
// bmiCalc(1.78, 86, true);
// bmiCalc(1.78, 86, false);
bmiCalc(1.78, 86);
