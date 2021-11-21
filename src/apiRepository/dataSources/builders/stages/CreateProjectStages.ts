import { addDays, endOfDay } from "date-fns";
import { EnumProjectStatus } from "../../../enums/EnumProjectStatus";
import BuildStageModel from "../models/BuildStageModel";
import ProjectApiModel from "../../../entities/ProjectApiModel";
import RandomNumber from "../RandomNumber";
import ProjectStageApiModel from "../../../entities/ProjectStageApiModel";

export default class CreateProjectStages {
  private stages: Array<BuildStageModel>;
  private endDateOffset = 0;
  private project: ProjectApiModel;

  constructor(project: ProjectApiModel) {
    this.project = project;
    this.stages = new Array<BuildStageModel>();
  }

  create(project: ProjectApiModel) {
    this.clear();
    this.createBuildStages();
    this.createStartAndStopTimes();
    this.createAndAddProjectStages();
  }

  private createAndAddProjectStages() {
    this.stages.forEach((stage, index) => {
      var projectStage = new ProjectStageApiModel(this.project, this.project.id * 100 + index, stage.name, stage.startDate!, stage.endDate!);
      this.project.stages.push(projectStage);
    });
  }

  private clear() {
    this.stages = new Array<BuildStageModel>();
    this.endDateOffset = 0;
  }

  private createStartAndStopTimes() {
    // calculate total days in all dates
    const totalDays = this.stages.reduce((total, stage) => total + stage.duration + stage.leadTime, 0);
    // calculate project start and end dates and work backwards
    const projectEndDate = addDays(endOfDay(new Date()), this.endDateOffset);
    let startDate = addDays(projectEndDate, -totalDays);

    // start start and end time on stages
    //
    this.stages.forEach((stage) => {
      startDate = addDays(startDate, stage.leadTime);
      stage.startDate = startDate;
      startDate = addDays(startDate, stage.duration);
      stage.endDate = startDate;
    });
  }

  private createBuildStages() {
    switch (this.project.status.id) {
      case EnumProjectStatus.Paused:
        this.endDateOffset = -RandomNumber.randomWeeksInDays(5, 50);
        if (RandomNumber.randomIntPercent > 70) {
          this.addStageBidWon();
        }
        if (RandomNumber.randomIntPercent > 40) {
          this.addStageDiscovery();
        }
        if (RandomNumber.randomIntPercent > 20) {
          this.addStageBuild();
        }
        break;
      case EnumProjectStatus.Active:
        if (RandomNumber.randomIntPercent > 70) {
          this.addStageBidWon();
        }
        if (RandomNumber.randomIntPercent > 50) {
          this.addStageProposal();
        }
        if (RandomNumber.randomIntPercent > 50) {
          this.addStageDiscovery();
        }
        if (RandomNumber.randomIntPercent > 40) {
          this.addStageBuild();
        }
        break;
      case EnumProjectStatus.Closed:
        this.endDateOffset = -RandomNumber.randomWeeksInDays(2, 100);
        if (RandomNumber.randomIntPercent > 70) {
          this.addStageBidWon();
        }
        if (RandomNumber.randomIntPercent > 40) {
          this.addStageProposal();
        }
        if (RandomNumber.randomIntPercent > 60) {
          this.addStageDiscovery();
        }
        if (RandomNumber.randomIntPercent > 20) {
          this.addStageBuild();
        }
        if (RandomNumber.randomIntPercent > 60) {
          this.addStageSupport();
        }
        if (RandomNumber.randomIntPercent > 80) {
          this.addStageHandover();
        }
        break;
      case EnumProjectStatus.Contract:
        this.endDateOffset = -RandomNumber.randomWeeksInDays(0, 5);
        if (RandomNumber.randomIntPercent > 50) {
          this.addStageBidWon();
        }
        this.addStageProposal();
        break;
      case EnumProjectStatus.None:
      case EnumProjectStatus.PreSales:
      case EnumProjectStatus.Proposal:
        this.addStageProposal();
        this.endDateOffset = -RandomNumber.randomWeeksInDays(5, 15);
        break;
      case EnumProjectStatus.Tendering:
      case EnumProjectStatus.BidCreating:
      case EnumProjectStatus.BidSubmitted:
      case EnumProjectStatus.BidFailed:
      case EnumProjectStatus.BidWon:
        this.endDateOffset = -RandomNumber.randomWeeksInDays(5, 50);
        this.addStageBidRandomOutcome();
        break;
    }
  }

  private addStageBidWon() {
    this.stages.push(new BuildStageModel("Creating Bid", 0, RandomNumber.randomInt(5, 20)));
    this.stages.push(new BuildStageModel("Bid Submitted", RandomNumber.randomInt(1, 50), 1));
    this.stages.push(new BuildStageModel("Bid Won", RandomNumber.randomInt(1, 50), 1));
  }
  private addStageBidRandomOutcome() {
    this.stages.push(new BuildStageModel("Creating Bid", 0, RandomNumber.randomInt(5, 20)));
    this.stages.push(new BuildStageModel("Bid Submitted", RandomNumber.randomInt(1, 50), 1));
    var p = RandomNumber.randomIntPercent;
    if (p > 60) {
      this.stages.push(new BuildStageModel("Bid Won", RandomNumber.randomInt(1, 50), 1));
    }
    if (p > 25) {
      this.stages.push(new BuildStageModel("Bid Lost", RandomNumber.randomInt(1, 50), 1));
    }
  }

  private addStageProposal() {
    this.stages.push(new BuildStageModel("Creating Proposal", 0, RandomNumber.randomInt(2, 15)));
  }
  private addStageDiscovery() {
    this.stages.push(new BuildStageModel("Discovery", RandomNumber.randomInt(15, 25), RandomNumber.randomWeeksInDays(1, 8)));
  }
  private addStageBuild() {
    this.stages.push(new BuildStageModel("Build", RandomNumber.randomWeeksInDays(0, 5), RandomNumber.randomWeeksInDays(6, 200)));
  }
  private addStageSupport() {
    this.stages.push(new BuildStageModel("Support", 0, RandomNumber.randomWeeksInDays(6, 200)));
  }
  private addStageHandover() {
    this.stages.push(new BuildStageModel("Support", 0, RandomNumber.randomWeeksInDays(1, 4)));
  }
}
