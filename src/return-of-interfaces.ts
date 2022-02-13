export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun() {
    console.log('イオナズンだー！！！');
  }

  kougeki() {
    console.log('攻撃だ！くらえ！！！');
  }
}

let jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
