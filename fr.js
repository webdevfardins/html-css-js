class vehicle{
    constructor(){
      this.company="honda " 
    }
}
class text extends vehicle{
    constructor(name,price){
        super()
        this.name=name
        this.price=price
    }

}
f=new text("shine",90000)

console.log(f.name," ",f.company," ",f.price)