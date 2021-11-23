interface IRedGreenBlue {
    red: number;
    green: number;
    blue: number;
}

interface IHueSaturationLuminosity {
    hue: number;
    saturation: number;
    luminosity: number;
}

export default class ColourUtilities {

    static hexFromRgb(red: number, blue: number, green: number) {
        var hex = '#' +
            this.zeroPadHex(Math.abs(Math.round(red)).toString(16)) +
            this.zeroPadHex(Math.abs(Math.round(blue)).toString(16)) +
            this.zeroPadHex(Math.abs(Math.round(green)).toString(16));
        return hex.toUpperCase();
    }

    private static zeroPadHex(value: string): string {
        if (value.length < 2) {
            return `0${value}`;
        }
        return value;
    }

    static hslFromRgb(red: number, blue: number, green: number): IHueSaturationLuminosity {
        const localRed = red / 255;
        const localGreen = green / 255;
        const localBlue = blue / 255;
        const max = Math.max(localRed, localGreen, localBlue);
        const min = Math.min(localRed, localGreen, localBlue);
        const l = (max + min) / 2;
        const d = max - min;
        let h = 0;
        if (max === min) {
            h = 0;
        } else {
            switch (max) {
                case localRed:
                    // h = (localGreen - localBlue) / d % 6;
                    h = (localGreen - localBlue) / d % 6 + (localGreen < localBlue ? 6 : 0);
                    break;

                case localGreen:
                    h = (localBlue - localRed) / d + 2;
                    break;

                case localBlue:
                    h = (localRed - localGreen) / d + 4;
                    break;
            }
        }

        var luminosity = l;
        var saturation = 0;

        if (l > 0.5) {
            saturation = (max + min === 2) ? 1 : d / (2 - max - min);
        } else {
            saturation = ((max + min) === 0) ? 0 : d / (max + min);
        }
        var hue = h * 60;

        return {
            hue: hue,
            saturation: saturation,
            luminosity: luminosity
        }

    }

    static rbgFromHex(hex: string): IRedGreenBlue {
        const localHex = hex.replace('#', '');
        const red = parseInt(localHex.substring(0, 2), 16);
        const green = parseInt(localHex.substring(2, 4), 16);
        const blue = parseInt(localHex.substring(4, 6), 16);

        return {
            red: red,
            green: green,
            blue: blue
        }
    }

    static rgbFromHsl(hue: number, saturation: number, luminosity: number): IRedGreenBlue {

        const localHue = hue / 360;
        const localSaturation = saturation;
        const localLuminosity = luminosity;
        let red = 0;
        let green = 0;
        let blue = 0;

        if (localSaturation === 0) {
            red = localLuminosity * 255;
            green = localLuminosity * 255;
            blue = localLuminosity * 255;
        } else {

            const q = localLuminosity < 0.5 ?
                localLuminosity * (1 + localSaturation)
                : localLuminosity + localSaturation - localLuminosity * localSaturation;

            const p = 2 * localLuminosity - q;

            const localRed = this.hueToRgb(p, q, localHue + 1 / 3);
            const localGreen = this.hueToRgb(p, q, localHue);
            const localBlue = this.hueToRgb(p, q, localHue - 1 / 3);

            red = Math.round(localRed * 255);
            green = Math.round(localGreen * 255);
            blue = Math.round(localBlue * 255);
        }

        return {
            red: red,
            green: green,
            blue: blue
        }
    }

    private static hueToRgb(p: number, q: number, t: number) {
        if (t < 0) { t += 1; }
        if (t > 1) { t -= 1; }
        if (t < 1 / 6) { return p + (q - p) * 6 * t; }
        if (t < 1 / 2) { return q; }
        if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6; }
        return p;
    }
}