export default class RepositoryPeopleListFilters {
    name: string = '';

    isEqualTo(model: RepositoryPeopleListFilters): boolean {
        return this.name === model.name;
    }
    
    clone(): RepositoryPeopleListFilters {
        const model = new RepositoryPeopleListFilters();
        model.name = this.name;
        return model;
    }
}