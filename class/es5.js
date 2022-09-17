var extendClass = (function() { // 클로저를 이용함
    function Bridge(){} // 임시 생성자 함수 | 부모와 자식을 이어주는 징검다리 역할
    return function(Parent, Child) {
        Bridge.prototype = Parent.prototype; // 이 부분은 먼저 명시해야 함 (순서 중요)
        Child.prototype = new Bridge();
        Child.prototype.constructor = Child; // constructor를 다시 자기자신으로 지정
        Child.prototype.superClass = Parent; // 부모 클래스 지정
    }
})();

function Person(name, age) { // 부모 생성자 함수
    this.name = name || undefined;
    this.age = age || undefined;
}
Person.prototype.getName = function() {
    return this.name;
};
Person.prototype.getAge = function() {
    return this.age;
};

function Employee(name, age, position) { // 자식 생성자 함수
    this.superClass(name, age);
    this.position = position || undefined;
}
extendClass(Person, Employee);
Employee.prototype.getPosition = function() {
    return this.position;
};

var cansus = new Employee('cansus', 33, 'Developer');
console.dir(cansus);