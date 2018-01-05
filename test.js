//定义一个动物类
function Animal(name) {
  this.name = name || 'Animal';
  this.sleep = function () {
    return this.name + '正在睡觉';
  };
}
//原型方法
Animal.prototype.eat = function (foot) {
  return this.name + '正在吃' + foot;
};

//原型链继承  父类实例作为子类的原型
function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(Cat.__proto__);

