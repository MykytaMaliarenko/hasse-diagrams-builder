export class Point {
    name: string;
    x: number;
    y: number;
    isActive: boolean = true;

    constructor(name: string) {
        this.name = name;
        this.x = 0;
        this.y = 0;
    }
}