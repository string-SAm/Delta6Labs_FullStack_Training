class Person{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

    Classes(){
        console.log(`Bkl ${this.name} kaamseen ${this.age} saal ka hai tu`);
        
    }
}

const bkl=new Person('gaurav',17)

bkl.Classes()
