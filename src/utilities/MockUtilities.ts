export default class MockUtilities {
  static async demoNetworkDelayAsync() {
    return await this.delayAsync(2);
  }

  // delay a number of ms
  //
  static async delayAsync(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
