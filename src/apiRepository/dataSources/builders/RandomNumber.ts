export default class RandomNumber {
  // Random number between 0-100
  static get randomIntPercent(): number {
    // number between 0-100
    var random = Math.floor(Math.random() * 101);
    return random;
  }

  static randomInt(min: number, max: number): number {
    // number between 0-100
    var random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  }

  static randomWeeksInDays(min: number, max: number): number {
    // number between 0-100
    var random = Math.floor(Math.random() * (max - min)) + min;
    return random * 7;
  }
}
