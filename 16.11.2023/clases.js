
export class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(`My name is ${this.name},My age: ${this.age}`)
    }

}
