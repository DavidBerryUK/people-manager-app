import { EnumTheme } from "../../../constants/EnumeTheme";
import ThemeConfigModel from "./models/ThemeConfigModel";

export default class FactoryThemes {

    static get(): Array<ThemeConfigModel> {
        var list = new Array<ThemeConfigModel>();

        list.push(new ThemeConfigModel('Red', EnumTheme.red));
        list.push(new ThemeConfigModel('Blue', EnumTheme.blue));
        list.push(new ThemeConfigModel('Green', EnumTheme.green));
        list.push(new ThemeConfigModel('Dark Blue', EnumTheme.blueDark));

        return list;
    }
}