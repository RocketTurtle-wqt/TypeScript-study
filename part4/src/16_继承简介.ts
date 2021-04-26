(function () {
  class Animal{
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Dog extends Animal{
    age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    say() {
      console.log(`狗：${this.name}say`);
    }

  }

  class Cat extends Animal{
    age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    say() {
      console.log(`猫：${this.name}say`);
    }
  }
})();