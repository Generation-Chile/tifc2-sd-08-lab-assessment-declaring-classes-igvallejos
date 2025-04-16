export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  
  datos(){
    console.log(`${this.name} su nivel es ${this.level}`)
  }
}
 
