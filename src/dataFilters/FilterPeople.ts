import PersonApiModel from "../apiRepository/entities/PersonApiModel";

export default class FilterPeople {

    static byName(data: Array<PersonApiModel>, name: string): Array<PersonApiModel> {
        if (name.length > 0) {
            const filterValue = name.toLocaleLowerCase();
            data = data.filter((row) => {
                return row.fullName.toLocaleLowerCase().indexOf(filterValue) >= 0
            });
        }
        return data;
    }
    
}