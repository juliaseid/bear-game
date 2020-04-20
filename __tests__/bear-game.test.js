import { HungryBear } from '../src/animals.js';
import { Game } from './../src/game-play.js';


describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
    fuzzy.setFatigue();
    fuzzy.setItchiness();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 30001 milliseconds', () => {
    jest.advanceTimersByTime(30001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(100001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(90001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('mood level should divide in half every 2 seconds', function () {
    jest.advanceTimersByTime(20001);
    expect(fuzzy.moodLevel).toEqual(50);
  })

  test('mood level should increase between 10 and 50 points if it naps', function () {
    jest.advanceTimersByTime(40001);
    fuzzy.sleep();
    expect(fuzzy.moodLevel).toBeGreaterThanOrEqual(26) && expect (fuzzy.moodLevel).toBeLessThanOrEqual(75);
  })

  test ('should eat you if it gets too tired', function() {
    jest.advanceTimersByTime(140001);
    fuzzy.feed();
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  })

  test ('comfort level should decline by 10 every 2 seconds', function () {
    jest.advanceTimersByTime(20001);
    expect(fuzzy.comfortLevel).toEqual(90);
  })

  test ('comfort level should decrease every 3 seconds as bear gets randomly itchy', function () {
    jest.advanceTimersByTime(30001);
    expect(fuzzy.comfortLevel).toBeGreaterThan(80) && expect(fuzzy.comfortLevel).toBeLessThan(90);
  })

  test ('comfort level should increase by 33 points when bear gets a good scratch', function() {
    jest.advanceTimersByTime(20001);
    fuzzy.scratch();
    expect(fuzzy.comfortLevel).toEqual(123);
  })

  test ('when bear goes swimming, mood level should increase by 10 and comfort level should increase by 10', function() {
    jest.advanceTimersByTime(20001);
    fuzzy.swim();
    expect(fuzzy.comfortLevel).toEqual(100) && expect(fuzzy.moodLevel).toEqual(60);
  })

  test ('Uncomfortable bears are hangry bears - watch out!', function() {
    jest.advanceTimersByTime(200001);
    fuzzy.feed();
    fuzzy.sleep();
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  })

});  

describe('Game & its properties', () => {
  jest.useFakeTimers();
  // let fuzzy;
  let myGame;

  beforeEach(function() {
    myGame = new Game("Zoo");
    // fuzzy = new HungryBear("Fuzzy");
  });    
  
  afterEach(function() {
    jest.clearAllTimers();
  });

  test ('AddAnimal function adds the correct animal to the game/zoo', () => {
    myGame.addAnimal('fuzzy', 'bear');
    expect(myGame.animals[0].name).toEqual('fuzzy');
    expect(myGame.animals[0].species).toEqual('bear');
  });

test ('If user keeps animal alive for 2 minutes food and comfort level increase by 10', function() {
      myGame.addAnimal('fuzzy,', 'bear');
      myGame.stillAlive();
      jest.advanceTimersByTime(120001);
      expect(myGame.animals[0].foodLevel).toEqual(10);
      console.log(myGame.animals[0]);
      expect(myGame.animals[0].comfortLevel).toEqual(10);
    });

});
