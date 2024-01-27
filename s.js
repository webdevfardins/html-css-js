class test {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    details() {
        console.log(this.id, " ", this.name)
    }
}
f = new test(101, "fardin")
f.details()