export default class BuildStageModel {
  name: string;
  leadTime: number;
  duration: number;
  startDate: Date | undefined;
  endDate: Date | undefined;

  constructor(name: string, leadDuration: number, duration: number) {
    this.name = name;
    this.leadTime = leadDuration;
    this.duration = duration;
  }
}
