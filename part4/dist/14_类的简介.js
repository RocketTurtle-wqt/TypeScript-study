"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["MAEL"] = 0] = "MAEL";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
class Person {
    constructor() {
        //定义实例属性
        this.name = 'wqt';
        this.age = 21;
        //定义只读的实例属性
        this.gender = Gender.MAEL;
    }
    //定义实例方法
    say() {
        console.log('hello world');
    }
    //定义类静态方法
    static run() {
        console.log('run');
    }
}
//定义静态类属性
Person.disposition = 'happy';
//定义只读的静态类属性
Person.saying = 'hello codeforces';
