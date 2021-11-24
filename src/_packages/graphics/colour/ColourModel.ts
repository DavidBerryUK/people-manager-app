import ColourUtilities from "./ColourUtilities";

// imutable colour class
//
export default class ColourModel {
    readonly red: number = 0;
    readonly blue: number = 0;
    readonly green: number = 0;
    readonly hue: number = 0;
    readonly saturation: number = 0;
    readonly luminosity: number = 0;
    readonly hex: string = '';

    // a colour is always created with red, green and blue
    // - Hue, saturation, Luminosity and Hex are calculated in the constructor
    // Static methods allow colour models to be created by rgb, hsl or hex values
    private constructor(red: number, green: number, blue: number) {

        this.red = red;
        this.green = green;
        this.blue = blue;

        const hsl = ColourUtilities.hslFromRgb(red, green, blue);
        this.hue = hsl.hue;
        this.saturation = hsl.saturation;
        this.luminosity = hsl.luminosity;

        this.hex = ColourUtilities.hexFromRgb(red, green, blue);
    }

    // Create from RGB
    static rgb(red: number, green: number, blue: number): ColourModel {
        return new ColourModel(red, green, blue);
    }

    // Create from Hex
    static hex(hex: string): ColourModel {
        const rgb = ColourUtilities.rbgFromHex(hex);
        return new ColourModel(rgb.red, rgb.green, rgb.blue);
    }

    // Create from HSL
    static hsl(hue: number, saturation: number, luminosity: number): ColourModel {
        const rgb = ColourUtilities.rgbFromHsl(hue, saturation, luminosity);
        return new ColourModel(rgb.red, rgb.green, rgb.blue);
    }


}