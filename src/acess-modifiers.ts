export {};

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name :${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, natinality: string) {
    super(name, age, natinality);
  }

  profile(): string {
    return `name :${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'JAPAN');
// let hanako = new Person();
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// taro.profile();
