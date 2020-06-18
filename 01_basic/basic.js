var Person = /** @class */ (function () {
    function Person(a, b, c, d, e, f) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.salary = "";
        this.jobLocation = "";
        this.firstName = a;
        this.lastName = b;
        this.age = c;
        this.jobTitle = d;
        this.salary = e;
        this.jobLocation = f;
    }
    Person.prototype.name = function () {
        return "Hello there, my name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return Person;
}());
var Person1 = new Person("Paul", "Abrecht", "24", "Developer", "3000", "Vienna");
console.log(Person1.name());
