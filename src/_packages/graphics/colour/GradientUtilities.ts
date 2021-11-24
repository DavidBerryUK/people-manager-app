import ColourModel from "./ColourModel";

export default class GradientUtilities {

    // mix 2 colours, with a given percentage, 
    //   0% = fully colour 1
    //  50% = equal blend of both colours
    // 100% = fully colour 2
    static mix(colour1: ColourModel, colour2: ColourModel, percentage: number) {

        const percentageInverse = 1 - percentage;

        const hue = (colour1.hue * percentageInverse) + (colour2.hue * percentage);
        const saturation = (colour1.saturation * percentageInverse) + (colour2.saturation * percentage);
        const luminosity = (colour1.luminosity * percentageInverse) + (colour2.luminosity * percentage);

        return ColourModel.hsl(hue, saturation, luminosity);
    }
}