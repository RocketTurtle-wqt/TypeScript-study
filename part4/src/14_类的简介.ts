(function () {
  enum Gender{
    MAEL,
    FEMALE
  }
  
  class Person{
    //定义实例属性
    name: string = 'wqt';
    age: number = 21;
    //定义只读的实例属性
    readonly gender: Gender = Gender.MAEL;
    //定义静态类属性
    static disposition: string = 'happy';
    //定义只读的静态类属性
    static readonly saying: string = 'hello codeforces';
    //定义实例方法
    say() {
      console.log('hello world');
    }
    //定义类静态方法
    static run() {
      console.log('run');
    }
  }
})();