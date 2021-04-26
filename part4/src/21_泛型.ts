(function () {
  /**
   * 在类型不明确的时候可以使用泛型
   * 泛型可以定义多个
   */
  //1.在函数中使用泛型
  function fn<T, K>(name: T, age: K): T{
    return name;
  }
  //使用函数时，最好指定泛型，若不指定，也会开启自动检测，但不一定每次都能检测出来
  fn<string, number>('wqt', 21);

  //2.使用类实现接口中使用泛型
  interface len{
    length: number;
  }

  function fn2<T extends len>(x: T): number{
    return x.length;
  }

  //3.在类中使用泛型
  class Human<T>{
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }
  const person = new Human<string>('wqt');
})();