import ColourModel from "./ColourModel";

export default class GradientUtilities {


    static mix(c1: ColourModel, c2: ColourModel, percentage: number) {

        const percentageInverse = 1 - percentage;

        const hue = c1.hue * percentageInverse + (c2.hue * percentage);
        const saturation = c1.saturation * percentageInverse + (c2.saturation * percentage);
        const luminosity = c1.luminosity * percentageInverse + (c2.luminosity * percentage);

        return ColourModel.hsl(hue, saturation, luminosity);
    }

}