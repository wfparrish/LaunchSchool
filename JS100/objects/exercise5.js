let myProtoObj = {
    foo: 1,
    bar: 2
}

let child = Object.create(myProtoObj);
console.log(child.foo)