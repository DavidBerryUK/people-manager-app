import ProjectApiModel from "./ProjectApiModel";

export default class ProjectEventsApiModel {

    id: number;
    name: string;
    startDate: Date;
    endDate: Date | undefined;
    project: ProjectApiModel;

    constructor(project: ProjectApiModel, id: number, name: string, startDate: Date, endDate?: Date | undefined) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.project = project;
    }
}