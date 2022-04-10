
// Cell (Node) class containing important information for a* algorithm

import { Point } from "../other/Interfaces";

export class Cell {
    private _pos : Point;
    private _parent : number;
    private _g : number;
    private _f : number;
    constructor(pos : Point, parent : number, end : Point, arr : Cell[]) {
        this._pos = pos;
        this._parent = parent;
        if(this._parent > -1) {
            this._g = arr[parent].g + 1;
            this._f = this._g + Math.sqrt(Math.pow(end.x - pos.x, 2) + Math.pow(end.y - pos.y, 2));
        } else {
            this._g = 0;
            this._f = 0;
        }
    }
    public get pos() : Point {
        return this._pos;
    }
    public get parent() {
        return this._parent;
    }
    public get g() {
        return this._g;
    }
    public get f() {
        return this._f;
    }
}