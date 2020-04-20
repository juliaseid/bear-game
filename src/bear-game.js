export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 100;
    this.comfortLevel = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    let eaten = false;
    if (this.foodLevel <= 0) {
      eaten = true;
    } else if (this.moodLevel < 1 ){
      eaten = true;
    } else {
      eaten = false;
    }
    return eaten;
  };

  feed() {
    this.foodLevel = 10;
  }

  setFatigue() {
    setInterval(() => {
      this.moodLevel /= 2; this.comfortLevel -= 10
    }, 2000);
  }

  sleep () {
    let naptime = Math.ceil(Math.random()*50);
    this.moodLevel += naptime
  }

  setItchiness() {
    setInterval(() => {
      let itch = Math.random()*10;
      this.comfortLevel -= itch;
    }, 3000);
  }

  scratch () {
    
  }

}