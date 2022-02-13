export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work(): string {
    return `Hey,guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.firstName);
console.log(Me.lastName);
console.log(Me.work());
