(function () {
  /**
   * public：定义的属性可以在任何位置访问和修改
   * private：定义的属性可以在类内部访问和修改
   * protected：定义的属性可以在类和子类中访问和修改
   */
  class Animal{
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    get name() {
      return this._name;
    }
    set name(name: string) {
      this._name = name;
    }
    get age() {
      return this._age;
    }
    set age(age: number) {
      this._age = age >= 0 ? age : this.age;
    }
  }

  // class C{
  //   name: string;
  //   age: number;
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  //两者等价
  class C{
    constructor(public name: string, public age: number){}
  }
})();