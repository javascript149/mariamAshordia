const pi = 3.14;


class Shape{
    constructor(name){
        this.name = name;
    }

    area(){
        return "Area calculation not implemented for generic shape.";
    }
}

class Circle extends Shape{
    constructor(radius){
        super("circle");
        this.radius = radius;
    }

    area(){
        return pi * this.radius**2;
    }
}

class Rectangle extends Shape{
    constructor(name,width,height){
        super(name);
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

class Triangle extends Shape{
    constructor(name,base,height){
        super(name);
        this.base = base;
        this.height = height;
    }

    area(){
        return (this.base * this.height)/2;
    }
}


let circle = new Circle(2);
console.log(circle.name,circle.area());

let rect = new Rectangle('rectangle',3,4);
console.log(rect.name,rect.area());

let triangle = new Triangle('triangle',4,5);
console.log(triangle.name,triangle.area());
