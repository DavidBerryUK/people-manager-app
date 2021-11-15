import { stat } from "fs";
import { EnumRagStatus } from "../../constants/enums/EnumRagStatus";
import ProjectApiModel from "./ProjectApiModel";

export default class ProjectHealthApiModel {

    project: ProjectApiModel;
    statusDateTime: Date;

    RagTimeScale: EnumRagStatus;
    ragScope: EnumRagStatus;
    ragQuality: EnumRagStatus;
    ragRelationship: EnumRagStatus;
    ragResources: EnumRagStatus;
    ragBudget: EnumRagStatus;

    constructor(project: ProjectApiModel,
        statusDateTime: Date,
        RagTimeScale: EnumRagStatus,
        RagScope: EnumRagStatus,
        RagQuality: EnumRagStatus,
        RagRelationship: EnumRagStatus,
        ragResources: EnumRagStatus,
        ragBudget: EnumRagStatus) {

        this.project = project;
        this.statusDateTime = statusDateTime;
        this.RagTimeScale = RagTimeScale;
        this.ragScope = RagScope;
        this.ragQuality = RagQuality;
        this.ragRelationship = RagRelationship;
        this.ragResources = ragResources;
        this.ragBudget = ragBudget;

    }
}