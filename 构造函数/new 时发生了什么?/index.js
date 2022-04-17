let Person = function (name,age){
    // let obj = new Object();
    // let this = obj;

    this.name = name;
    this.age = age;

    // return this;
}



let p1 = new Person('zf',28);
let p2 = new Person('sh',51);

console.log({p1,p2})
