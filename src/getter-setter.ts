export {};

//  owner :所有者
//         初期家事に設定できる。
//         途中で変更できない。
//         参照できる。
// secretNumber : 個人番号
// 　　　　　　　　　初期家事に設定できる。
// 　　　　　　　　　途中で変更できる。
// 　　　　　　　　　参照できない。

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return this;
  }
}

let card = new MyNumberCard('はむさん', 123456789);
console.log(card.owner);
// card.owner = 'test';
card.secretNumber = 19940728;
console.log(card.debugPrint());
