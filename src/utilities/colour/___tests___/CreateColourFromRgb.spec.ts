import ColourModel from "../ColourModel";

describe('Create Colour From Rgb', () => {

    test('Create Black', () => {
        const colour = ColourModel.rgb(0, 0, 0);
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#000000');
        expect(colour.hue).toBe(0);
        expect(colour.saturation).toBe(0);
        expect(colour.luminosity).toBe(0);
    });

    test('Create White', () => {
        const colour = ColourModel.rgb(255, 255, 255);
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#FFFFFF');
        expect(colour.hue).toBe(0);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(1);
    });

    test('Create Red', () => {
        const colour = ColourModel.rgb(255, 0, 0);
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#FF0000');
        expect(colour.hue).toBe(0);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Green', () => {
        const colour = ColourModel.rgb(0, 255, 0);
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#00FF00');
        expect(colour.hue).toBe(120);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Blue', () => {
        const colour = ColourModel.rgb(0, 0, 255);
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#0000FF');
        expect(colour.hue).toBe(240);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Yellow', () => {
        const colour = ColourModel.rgb(255, 255, 0);
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#FFFF00');
        expect(colour.hue).toBe(60);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Purple', () => {
        const colour = ColourModel.rgb(255, 0, 255);
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#FF00FF');
        expect(colour.hue).toBe(300);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Cyan', () => {
        const colour = ColourModel.rgb(0, 255, 255);
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#00FFFF');
        expect(colour.hue).toBe(180);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

})