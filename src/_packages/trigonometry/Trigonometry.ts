export interface IPoint {
    x: number;
    y: number;
}

export default class Trigonometry {

    static degreesToRadians(degrees: number): number {
        return degrees * Math.PI / 180
    }

    static offsetPoint(point: IPoint, radians: number, distance: number) {
        const offsetPoint: IPoint = {
            x: point.x + Math.cos(radians) * distance,
            y: point.y + Math.sin(radians) * distance
        };
        return offsetPoint;
    }

}