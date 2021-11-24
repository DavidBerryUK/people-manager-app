import ColourModel from "../ColourModel";
import GradientUtilities from "../GradientUtilities";

describe('Colour Mix', () => {

    test('Mix Red to Blue 0%', () => {
        const colourRed = ColourModel.rgb(255, 0, 0);
        const colourBlue = ColourModel.rgb(0, 0, 255);
        const mixed = GradientUtilities.mix(colourRed, colourBlue, 0);
        expect(mixed.red).toBe(255);
        expect(mixed.green).toBe(0);
        expect(mixed.blue).toBe(0);
    });

    test('Mix Red to Blue 100%', () => {
        const colourRed = ColourModel.rgb(255, 0, 0);
        const colourBlue = ColourModel.rgb(0, 0, 255);
        const mixed = GradientUtilities.mix(colourRed, colourBlue, 1);
        expect(mixed.red).toBe(0);
        expect(mixed.green).toBe(0);
        expect(mixed.blue).toBe(255);
    });




})