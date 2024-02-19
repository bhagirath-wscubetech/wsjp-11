class Demo {
    constructor(user_name) {
        // special member function
        this.name = user_name;
    }
    test() {
        console.log('Hello ' + this.name);
    }
    hii() {
        console.log(`Hey ${this.name}`);
    }
}
// Demo.test();
const d = new Demo('Rahul');
d.test();
d.hii();
