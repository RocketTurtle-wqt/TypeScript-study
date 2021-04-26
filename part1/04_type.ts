//9-1.object表示一个js对象
let obj_a: object;
obj_a = {};
obj_a = function () {
  
};
//9-2.{}：可以用来指定对象应该包含哪些属性
let obj_b: { name: string };
obj_b = { name: 'wqt' };
//9-2-1.?：表示其修饰的属性可写可不写
let obj_c: { name: string, age?: number };
obj_c = { name: 'wqt' };
//9-2-2.[propName: string]: any：表示任意的字符串类型的属性名的任意类型属性值
let obj_d: { name: string, [propName: string]: any };
obj_d = {
  name: 'wqt',
  age: 21
};
//9-3.设置函数的类型声明
//语法：(形参1：类型1，形参2:类型2，...)=>返回值
let func_a: (a: number, b: number) => number;
func_a = function (x: number, y: number): number {
  return x + y;
}
//10.数组的声明
//10-1.类型[]
let array_a: string[];
array_a = ['a', 'b'];
//10-2.Array<string>
let array_b: Array<string>;
array_b = ['a', 'b'];
//11.元组：固定长度的数组
//语法：[类型1，类型2]
let tuple_a: [string, number];
tuple_a = ['hello', 2];
//12.enum：枚举类型
enum Gender{
  Male,
  Female
};
let per_a: { name: string, gender: Gender };
per_a = {
  name: 'wqt',
  gender:Gender.Male
}
console.log(per_a.gender === Gender.Male);
//&：表示同时
let per_demo: { name: string } & { age: number };
per_demo = {
  name: 'wqt',
  age: 21
};
//|：表示满足其中一个
//type：定义类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let mytype: myType;
mytype = 5;