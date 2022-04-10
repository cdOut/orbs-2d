import { Point } from '../other/Interfaces';

export class MouseHandler {
    static pos : Point = { x: 0, y: 0 };
    static clicked : boolean;
    
    static setPosition(x : number, y : number) : void {
        this.pos = { x: x, y: y };
    }

    static getPosition(canvas : HTMLCanvasElement) : Point {
        let cBox : DOMRect = canvas.getBoundingClientRect();
        let nPos : Point = {
            x: (this.pos.x || 0) - (cBox.left + window.scrollX),
            y: (this.pos.y || 0) - (cBox.top + window.scrollY)
        }
        return nPos;
    }

    static setClicked(value : boolean) : void {
        this.clicked = value;
    }

    static isClicked() : boolean {
        return this.clicked;
    }
}