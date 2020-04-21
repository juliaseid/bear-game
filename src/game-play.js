import { HungryBear } from '../src/animals.js';

export class Game {
  constructor() {
    this.gameOver = false;
    this.animals = [];
    this.level = 0;
  }

  addAnimal(name, species) {
    if (species === 'bear') {
      let newAnimal = new HungryBear(name);
      this.animals.push(newAnimal);

    };
  };

  stillAlive() {
    setInterval(() => {
      if (this.gameOver === false) {
        for (let i = 0; i < this.animals.length; i++) {
          this.animals[i].foodLevel += 10
          this.animals[i].comfortLevel += 50
        }
      };
    }, 120000);
  };

  endGame() {
    this.animals.forEach(animal => {
      if (animal.didYouGetEaten()) {
        this.gameOver = true;
      }
    })
  };
  //if (didYouGetEaten() === true) {
  // return "You've been eaten"
  //}

};





