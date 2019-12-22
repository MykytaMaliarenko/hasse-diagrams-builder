declare type Coords = {
    x: number;
    y: number;
};
export declare class Point {
    private _id;
    private _value;
    active: boolean;
    private _coords;
    constructor(_id: number, _value: number);
    eq(p: Point): boolean;
    get coords(): Coords;
    set coords(v: {
        x: number;
        y: number;
    });
    get id(): number;
    get value(): number;
}
export {};
