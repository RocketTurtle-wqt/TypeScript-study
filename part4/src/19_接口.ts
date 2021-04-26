(function () {
  /**
   * 接口用于定义结构，它可以作为类型声明使用
   * 同一个接口可以重复定义，作为类型声明使用时，取它们的并集
   */
  interface human{
    name: string;
  }

  interface human{
    age: number;
  }

  let person: human = {
    name: 'wqt',
    age: 21
  }

  /**
   * 接口定义类的结构
   * 接口中定义的方法一定是抽象方法，而抽象类中可以定义方法也可以定义抽象方法
   */
  interface Animal{
    name: string;
    age: number;
    say(): void;
  }
  /**
   * 实现接口就是使类满足接口要求
   */
  class Dog implements Animal{
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    say(): void{
      console.log('汪汪汪！');
    }
  }
})();