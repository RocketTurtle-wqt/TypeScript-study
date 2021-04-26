//9-1.object表示一个js对象
var obj_a;
obj_a = {};
obj_a = function () {
};
//9-2.{}：可以用来指定对象应该包含哪些属性
var obj_b;
obj_b = { name: 'wqt' };
//9-2-1.?：表示其修饰的属性可写可不写
var obj_c;
obj_c = { name: 'wqt' };
//9-2-2.[propName: string]: any：表示任意的字符串类型的属性名的任意类型属性值
var obj_d;
obj_d = {
    name: 'wqt',
    age: 21
};
//9-3.设置函数的类型声明
//语法：(形参1：类型1，形参2:类型2，...)=>返回值
var func_a;
func_a = function (x, y) {
    return x + y;
};
//10.数组的声明
//10-1.类型[]
var array_a;
array_a = ['a', 'b'];
//10-2.Array<string>
var array_b;
array_b = ['a', 'b'];
//11.元组：固定长度的数组
//语法：[类型1，类型2]
var tuple_a;
tuple_a = ['hello', 2];
//12.enum：枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
var per_a;
per_a = {
    name: 'wqt',
    gender: Gender.Male
};
console.log(per_a.gender === Gender.Male);
