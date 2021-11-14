import { EnumDetailViewType } from "../../../constants/enums/EnumDetailViewType";

export default class DetailViewStateModel {
  private _customerId: number | undefined;
  private _personId: number | undefined;
  private _projectId: number | undefined;
  private _projectStatusId: number | undefined;
  private _roleId: number | undefined;
  private _skillId: number | undefined;
  private _teamId: number | undefined;
  viewType: EnumDetailViewType = EnumDetailViewType.none;

  constructor() {
    this.clearAllKeys();
  }

  clone(): DetailViewStateModel {
    var model = new DetailViewStateModel();
    model._customerId = this._customerId;
    model._personId = this._personId;
    model._projectId = this._projectId;
    model._projectStatusId = this._projectStatusId;
    model._roleId = this._roleId;
    model._skillId = this._skillId;
    model._teamId = this._teamId;
    model.viewType = this.viewType;
    return model;
  }

  //
  // getters and setters to ensure only 1 detail key
  // is set at a time, this also sets the detail view
  // type
  //
  get personId(): number | undefined {
    return this._personId;
  }

  set personId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.person;
    this._personId = value;
  }

  get customerId(): number | undefined {
    return this._customerId;
  }

  set customerId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.customer;
    this._customerId = value;
  }

  get projectId(): number | undefined {
    return this._projectId;
  }

  set projectId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.project;
    this._projectId = value;
  }

  get projectStatusId(): number | undefined {
    return this._projectStatusId;
  }

  set projectStatusId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.projectStatus;
    this._projectStatusId = value;
  }

  get skillId(): number | undefined {
    return this._skillId;
  }

  set skillId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.skill;
    this._skillId = value;
  }

  get teamId(): number | undefined {
    return this._teamId;
  }

  set teamId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.team;
    this._teamId = value;
  }

  get roleId(): number | undefined {
    return this._roleId;
  }

  set roleId(value: number | undefined) {
    this.clearAllKeys();
    this.viewType = EnumDetailViewType.role;
    this._roleId = value;
  }

  // get detail key for
  //  which view is selected
  get detailKey(): number | undefined {
    switch (this.viewType) {
      case EnumDetailViewType.person:
        return this._personId;
      case EnumDetailViewType.role:
        return this._roleId;
      case EnumDetailViewType.skill:
        return this._skillId;
      case EnumDetailViewType.team:
        return this._teamId;
      case EnumDetailViewType.customer:
        return this._customerId;
      case EnumDetailViewType.project:
        return this._projectId;
      case EnumDetailViewType.projectStatus:
        return this._projectStatusId;
    }
    return undefined;
  }

  set detailKey(value: number | undefined) {
    switch (this.viewType) {
      case EnumDetailViewType.person:
        this.personId = value;
        break;
      case EnumDetailViewType.role:
        this.roleId = value;
        break;
      case EnumDetailViewType.skill:
        this.skillId = value;
        break;
      case EnumDetailViewType.team:
        this.teamId = value;
        break;
      case EnumDetailViewType.customer:
        this.customerId = value;
        break;
      case EnumDetailViewType.project:
        this.projectId = value;
        break;
      case EnumDetailViewType.projectStatus:
        this.projectStatusId = value;
        break;
    }
  }

  private clearAllKeys() {
    this._customerId = undefined;
    this._personId = undefined;
    this._projectId = undefined;
    this._projectStatusId = undefined;
    this._roleId = undefined;
    this._skillId = undefined;
    this._teamId = undefined;
  }
}
