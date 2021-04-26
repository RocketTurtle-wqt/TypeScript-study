//1.string：字符串类型
let sayHello: string;
sayHello = 'say hello';

//2.number：数字类型
let num: number;
num = 21;

//3.boolean：布尔值类型
let bool: boolean;
bool = true;

//4.字面量
let zml: 10;
zml = 10;

//5.any：任意类型
let any_demo1: any;
any_demo1 = 'hello any';
any_demo1 = 21;
//5-1.不给变量声明所属类型，则隐式声明为any
let any_demo2;//---any类型
//5-2.any类型可以赋值给任意类型
let str_demo1: string;
str_demo1 = any_demo1;//---any类型赋值给字符串类型
let num_demo1: number;
num_demo1 = any_demo1;//---any类型复制给shzi类型

//6.unknown：未知类型
let unknown_demo1: unknown;
unknown_demo1 = 21;
unknown_demo1 = 'hello unknown';
//6-1.unknown类型与any类型的区别在于：unknown类型不可以随意赋值给其它类型，必须使用类型断言加以判断
let num_demo2: number;
let str_demo2: string;
//6-1-1
if (typeof unknown_demo1 === 'string') {
  str_demo2 = unknown_demo1;
}
//6-1-2
num_demo2 = unknown_demo1 as number;

//7.void：空类型
//7-1
function voidDemo1(): void{

}
//7-2
function voidDemo2(): void{
  return null;
}
//7-3
function voidDemo3(): void{
  return undefined;
}

//8.never：无任何返回值
function neverDemo(): never{
  throw new Error('无返回值');
}

//9.object：对象类型
//9-1
let obj_demo1: object;//---日常使用时，一般不会这样去写
obj_demo1 = {};
//9-2
let obj_demo2: { name: string, age: number };
obj_demo2 = {
  name: 'wqt',
  age: 21
};
//9-3.声明函数类型
let obj_demo3: (x: number, y: number) => number;
obj_demo3 = function (x: number, y: number) {
  return x + y;
}

//10.array：数组类型
//10-1
let arr_demo1: string[];
arr_demo1 = ['1', '2', '3'];
//10-2
let arr_demo2: Array<number>;
arr_demo2 = [1, 2, 3];

//11.tuple：元组类型，固定长度的数组
let tuple_demo: [number, string];
tuple_demo = [1, 'hello'];

//12.enum：枚举类型
enum Human{
  MALE,
  FEMALE
}
let per_demo1: {
  name: string,
  age: number,
  gender: Human
}
per_demo1 = {
  name: 'wqt',
  age: 21,
  gender: Human.MALE
}

//|：表示满足其中任意一个就行
let playingcard: 'A' | 2 | 3 | 4;
playingcard = 'A';
playingcard = 4;
//&：表示需要满足所有
let per: { name: string } & { age: number };
per = {
  name: 'wqt',
  age: 21
};
//type：类型别名
type stringType = string;
let str_demo3: stringType;
str_demo3 = 'str';

//若在声明变量的同时赋值，则ts编译器会自动进行类型检查
let demo = 21;//---demo的类型为number
