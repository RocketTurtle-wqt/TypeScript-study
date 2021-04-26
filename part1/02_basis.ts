//当变量声明和赋值同时进行时，ts编译器会自动开启类型检测
// let a = false;

function sum(a: number, b: number): number{
  return a + b;
}

console.log(sum(10, 20));