var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I'm ".concat(this.name, "!"));
    };
    Person.prototype.describeSelf = function () {
        console.log('I am a basic, run-of-the-mill person');
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, job) {
        var _this = _super.call(this, name) || this;
        _this.job = job;
        return _this;
    }
    Employee.prototype.describeSelf = function () {
        console.log("I participate in capitalism as a ".concat(this.job));
    };
    return Employee;
}(Person));
var x = function (y) {
    var carsCharacters = [
        'Lightning McQueen',
        'Sally Carrera',
        'Tow Mater',
        'Doc Hudson',
    ];
    // The following lines can actually be simplified to 'return carsCharacters.includes(y)', since
    // '.includes' returns a boolean, but this makes it easier to get your head around.
    if (!carsCharacters.includes(y)) {
        return false;
    }
    return true;
};
console.log(x('Lightning McQueen'));
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.declineIceCreamStore = function () {
        return "I wish we could go, but we can't today";
    };
    A.prototype.lie = function () {
        return 'The ice cream store is closed because it is too cold outside';
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.lie = function () {
        return "Yeah your dad is right. Also, I own every kind of classic car because I'm rich, right? I even have doubles... of the cars. Some of them. Actually, I have triples of the Barracuda.";
    };
    return B;
}(A));
var me = new A();
var guyAtRestaurant = new B();
me.declineIceCreamStore();
me.lie();
guyAtRestaurant.lie();
var person = new Person('Brent');
var employee = new Employee('Brent', 'Electronics Guy');
person.introduceSelf();
person.describeSelf();
employee.introduceSelf();
employee.describeSelf();
