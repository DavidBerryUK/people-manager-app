import { EnumTheme } from "../../../../constants/enums/EnumTheme";

export default class ThemeConfigModel {
  name: string;
  theme: EnumTheme;

  constructor(name: string, theme: EnumTheme) {
    this.name = name;
    this.theme = theme;
  }
}
