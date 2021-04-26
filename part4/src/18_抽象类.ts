(function () {
  /*
  以abstract开头的类是抽象类
    抽象类不能通过new创建实例
    抽象类就是用来被作为继承的类的
    抽象类中可以添加抽象方法
  */
  abstract class Animal{
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    /**
     * 抽象方法只能定义在抽象类中
     * 抽象方法必须被子类重写
     */
    abstract say(): void;
    run():void {
      console.log('跑');
    }
  }

  class Dog extends Animal{
    age: number;
    constructor(name:string, age: number) {
      super(name);
      this.age = age;
    }
    say():void {
      console.log('汪汪汪！');
    }
  }
  // const dog = new Dog('旺财', 3);
})();