export class HungryBear {

  constructor(name) {
    this.name = name;
    this.species = 'bear';
    this.foodLevel = 10;
    this.moodLevel = 100;
    this.comfortLevel = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }

  didYouGetEaten() {
    let eaten = false;
    if (this.foodLevel <= 0) {
      eaten = true;
    } else if (this.moodLevel < 1 ){
      eaten = true;
    } else if (this.comfortLevel < 1) {
      eaten = true
    }  else {
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
    }, 20000);
  }

  sleep () {
    let naptime = Math.ceil(Math.random()*50);
    this.moodLevel += naptime
  }

  setItchiness() {
    setInterval(() => {
      let itch = Math.random()*10;
      this.comfortLevel -= itch;
    }, 30000);
  }

  scratch () {
    this.comfortLevel += 33;
  }

  swim () {
    this.comfortLevel += 10;
    this.moodLevel += 10;
  }

}