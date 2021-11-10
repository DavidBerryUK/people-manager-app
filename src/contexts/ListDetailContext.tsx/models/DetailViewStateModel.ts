import { EnumDetailViewType } from "../../../constants/EnumDetailViewType";

export default class DetailViewStateModel {
    private _personId: number | undefined;
    private _skillId: number | undefined;
    private _teamId: number | undefined;
    private _roleId: number | undefined;
    viewType: EnumDetailViewType = EnumDetailViewType.none;

    constructor() {
        this.clearAllKeys();
    }

    clone(): DetailViewStateModel {
        var model = new DetailViewStateModel();
        model._personId = this._personId;
        model._skillId = this._skillId;
        model._teamId = this._teamId;
        model._roleId = this._roleId;
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
        this._teamId = value;
    }

    // get detail key for 
    //  which view is selecgted
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
        }
    }

    private clearAllKeys() {
        this._personId = undefined;
        this._skillId = undefined;
        this._teamId = undefined;
        this._roleId = undefined;
    }
}