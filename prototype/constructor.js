var Person = function (name) {
    this.name = name;
};

// 동일한 대상을 가리킴 (즉, 같다.)
var t1 = new Person('Lee');
var t1Proto = Object.getPrototypeOf(t1);
var t2 = new Person.prototype.constructor('Park');
var t3 = new t1Proto.constructor('Kim');
var t4 = new t1.__proto__.constructor('Choi');
var t5 = new t1.constructor('Seo');

[t1, t2, t3, t4, t5].forEach(function (p) {
    console.log(p, p instanceof Person);
});

/**
 * [Constructor]
 * [instance].__proto__.constructor
 * [instance].constructor
 * Object.getPrototypeOf([instance]).constructor
 * [Constructor].prototype.constructor
 */

/**
 * 동일한 객체에 접근 가능
 * [Constructor].prototype
 * [instance].__proto__
 * [instance]
 * Object.getPrototypeOf([instance])
 */