class Bike {
    miles: number;
    constructor(
       public price: number,
       public max_speed: number){
            this.miles = 0;
       }
    displayInfo = ()=>{
       console.log(`Price is ${this.price}, Max Speed is ${this.max_speed}, Miles is ${this.miles}`)
        return this;
    }
    ride = () =>{
        console.log("riding!");
        this.miles += 10;
        return this;
    }
    reverse = ()=>{
        console.log("reversing");
        if(this.miles < 5){
            this.miles = 0;
        }
        else{
            this.miles -= 5;
        }
        return this;
    }
} 
const shane = new Bike(10, 5);
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Bike(20, 300);
const aria = new Bike(100, 4);
 // Now I'll make a study function, which is a lot like our graduate function from above:
// Now this has problems:
turing.ride().ride().ride().displayInfo()
shane.ride().ride().reverse()
aria.reverse().reverse()

