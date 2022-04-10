
// interface containing x and y coordinates of a point

export interface Point {
    x : number,
    y : number
};

export interface DebugPrint {
    (value : any) : void;
};

export interface IGameView {
    generateOrbs() : void;
    canPlaceOrb() : boolean;
    placeOrbs() : void;
    getScore() : number;

    update(canvas : HTMLCanvasElement) : void;
    checkAllMatching(pos: Point) : boolean;
    checkLine(pos : Point, dx : number, dy : number, type : number, checked : Point[]) : void;
    checkBounds(x : number, y : number) : boolean;
    checkNeighbors(pos : Point) : boolean;

    drawGrid(ctx : CanvasRenderingContext2D, width : number, height : number) : void;
    drawPath(ctx : CanvasRenderingContext2D) : void;
    drawOrb(ctx : CanvasRenderingContext2D, x : number, y : number, t : number, main : boolean) : void;
    drawUpcoming(ctx : CanvasRenderingContext2D) : void;
    drawPlayfield(ctx : CanvasRenderingContext2D) : void;
    render(nCtx : CanvasRenderingContext2D, rCtx : CanvasRenderingContext2D) : void;
};