class Person {
    constructor(name, age) {
        this.name = name || undefined;
        this.age = age || undefined;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position || undefined;
    }
    getPosition () {
        return this.position;
    }
}

var cansus = new Employee('cansus', 33, 'Developer');
console.dir(cansus);