/*
  学习目标：class语法-了解
  作用：创建对象
  类比：ES5中构造函数
  优势：通过继承，快速共享父级的属性和方法
*/

// ES5时代的构造函数
// function Person() {
//   return {
//     name: 'zs',
//     age: 18,

//     fn(params) {},
//   };
// }
// 注意事项：
// 💥 class的花括号，不是表示对象，
class Programmer {
  // 💥 属性和值之间，用=号连接
  name = '程序员';

  // 💥多个属性之间用分号隔开
  age = 18;

  writeCode() {
    console.log('我是程序员我会写代码  ----->  ');
  }
}

// extends表示继承，复制爸爸所有的属性和方法
class FrontEnd extends Programmer {}

const fe = new FrontEnd();
console.log('fe  ----->  ', fe);
