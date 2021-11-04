export default class MockUtilities {
  // delay a number of ms
  //
  static async delayAsync(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
