import ColourModel from "../ColourModel";

describe('Create Colour From Hex', () => {

    test('Create Black', () => {
        const colour = ColourModel.hex('#000000');
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#000000');
        expect(colour.hue).toBe(0);
        expect(colour.saturation).toBe(0);
        expect(colour.luminosity).toBe(0);
    });

    test('Create White', () => {
        const colour = ColourModel.hex('#FFFFFF');
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#FFFFFF');
        expect(colour.hue).toBe(0);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(1);
    });

    test('Create Red', () => {
        const colour = ColourModel.hex('#FF0000');
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#FF0000');
        expect(colour.hue).toBe(0);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Green', () => {
        const colour = ColourModel.hex('#00FF00');
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#00FF00');
        expect(colour.hue).toBe(120);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Blue', () => {
        const colour = ColourModel.hex('#0000FF');
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#0000FF');
        expect(colour.hue).toBe(240);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Yellow', () => {
        const colour = ColourModel.hex('#FFFF00');
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(0);
        expect(colour.hex).toBe('#FFFF00');
        expect(colour.hue).toBe(60);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Purple', () => {
        const colour = ColourModel.hex('#FF00FF');
        expect(colour.red).toBe(255);
        expect(colour.green).toBe(0);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#FF00FF');
        expect(colour.hue).toBe(300);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

    test('Create Cyan', () => {
        const colour = ColourModel.hex('#00FFFF');
        expect(colour.red).toBe(0);
        expect(colour.green).toBe(255);
        expect(colour.blue).toBe(255);
        expect(colour.hex).toBe('#00FFFF');
        expect(colour.hue).toBe(180);
        expect(colour.saturation).toBe(1);
        expect(colour.luminosity).toBe(0.5);
    });

})