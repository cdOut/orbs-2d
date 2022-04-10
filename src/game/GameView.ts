
import { Point, DebugPrint, IGameView } from '../other/Interfaces';
import { MouseHandler } from './EventHandler';
import { Pathfind } from '../pathfind/Pathfind';
import { Log, Test } from '../other/Decorators';

// Zastosowanie jednego dekoratora metody

@Test
export class GameView implements IGameView {
    private readonly width : number;
    private readonly height : number;
    private cellSize : number;

    private gameData : number[][];
    private upcomingOrbs : number[];

    private colors : string[] = [
        '#FFEB3B', '#FF9800', '#f44336',
        '#2196F3', '#4CAF50', '#9C27B0',
        '#FF80AB'
    ]

    private readonly nWidth : number;
    private readonly nHeight : number;

    private selected : Point | null = null;
    private path : Point[] | null = null;

    private lastOver : Point;

    private state : string = 'game';
    private stateChange : any;

    private score : number = 0;

    public testVar : string = 'Testowa wartość public';
    protected anotherVar : string = 'Testowa protected';
    readonly weirdVar : string = 'Testowa wartość readonly';

    protected debug : DebugPrint;

    public decoratorValue : string;

    constructor(width : number, height : number, cells : number) {
        this.width = width;
        this.height = height;
        this.cellSize = width / cells;

        this.gameData = [];
        this.upcomingOrbs = [];
        for(let x = 0; x < cells; x++) {
            this.gameData[x] = [];
            for(let y = 0; y < cells; y++) {
                this.gameData[x][y] = 0;
            }
        }

        this.generateOrbs();
        this.placeOrbs();
        this.generateOrbs();

        this.nWidth = this.cellSize * 3;
        this.nHeight = this.cellSize;

        this.debug = (value : any) => {
            console.log('Interface debug: ' + value);
        };

        this.debug(width);
        this.debug(height);
    }

    @Log
    generateOrbs() : void {
        for(let i = 0; i < 3; i++) {
            this.upcomingOrbs[i] = Math.floor(Math.random() * 7) + 1
        } 
    }

    canPlaceOrb() : boolean {
        return [].concat.apply([], ([].concat.apply([], this.gameData))).indexOf(0) != -1;
    }

    placeOrbs() : void {
        let placed : boolean;
        let x : number, y : number;
        for(let i = 0; i < 3; i++) {
            if(!this.canPlaceOrb()) {
                this.state = 'lost';
                break;
            }
            placed = false;
            do {
                x = Math.floor(Math.random() * (this.width / this.cellSize));
                y = Math.floor(Math.random() * (this.height / this.cellSize));

                if(this.gameData[x][y] == 0) {
                    this.gameData[x][y] = this.upcomingOrbs[i];
                    this.checkAllMatching({ x: x, y: y });
                    placed = true;
                }
            } while(!placed);
        }
        if(!this.canPlaceOrb()) {
            this.state = 'lost';
            alert("Game over! You've earned " + this.score + " points!");
        }
    }

    getScore() : number {
        return this.score;
    }

    update(canvas : HTMLCanvasElement) : void {
        if(this.state == 'game') {
            let over = MouseHandler.getPosition(canvas);
            over.x = Math.floor(over.x / this.cellSize);
            over.y = Math.floor(over.y / this.cellSize);

            if(this.checkBounds(over.x, over.y)) {

                if(this.selected) {
                    if(JSON.stringify(over) != JSON.stringify(this.lastOver)) {
                        this.path = Pathfind.Astar(this.gameData, this.selected, over);
                    }
                }

                if(MouseHandler.isClicked()) {
                    if(this.selected != null) {
                        if(JSON.stringify(this.selected) == JSON.stringify(over)) {
                            this.selected = null;
                        } else if(this.gameData[over.x][over.y] == 0 && this.path != null) {
                            this.gameData[over.x][over.y] = this.gameData[this.selected.x][this.selected.y];
                            this.gameData[this.selected.x][this.selected.y] = 0;

                            this.state = 'path';
                            this.selected = over;

                            this.stateChange = setTimeout(function() {
                                if(!this.checkAllMatching(this.selected)) {
                                    this.placeOrbs();
                                    this.generateOrbs();
                                }

                                this.state = 'game';
                                this.selected = null;
                                this.path = null;
                            }.bind(this), 1000);
                        } else if(this.gameData[over.x][over.y] != 0) {
                            if(this.checkNeighbors(over)) {
                                this.selected = over;
                            }
                        } else {
                            this.selected = null;
                        }
                    } else {
                        this.path = null;
                        this.selected = null;
                        if(this.gameData[over.x][over.y] != 0 && this.checkNeighbors(over)) {
                            this.selected = over;
                        }
                    }
                    MouseHandler.setClicked(false);
                }
                this.lastOver = over;
            }
        }
    }

    checkAllMatching(pos: Point) : boolean {
        let matched : boolean = false;
        let matching : Point[] = [];
        let type : number = this.gameData[pos.x][pos.y];

        this.checkLine(pos, 1, 0, type, matching);
        this.checkLine(pos, -1, 0, type, matching);
        if(matching.length >= 4) {
            matched = true;
            matching.forEach(match => {
                this.gameData[match.x][match.y] = 0;
                this.score++;
            });
        }
        matching = [];

        this.checkLine(pos, 0, 1, type, matching);
        this.checkLine(pos, 0, -1, type, matching);
        if(matching.length >= 4) {
            matched = true;
            matching.forEach(match => {
                this.gameData[match.x][match.y] = 0;
                this.score++;
            });
        }
        matching = [];

        this.checkLine(pos, 1, 1, type, matching);
        this.checkLine(pos, -1, -1, type, matching);
        if(matching.length >= 4) {
            matched = true;
            matching.forEach(match => {
                this.gameData[match.x][match.y] = 0;
                this.score++;
            });
        }
        matching = [];

        this.checkLine(pos, 1, -1, type, matching);
        this.checkLine(pos, -1, 1, type, matching);
        if(matching.length >= 4) {
            matched = true;
            matching.forEach(match => {
                this.gameData[match.x][match.y] = 0;
                this.score++;
            });
        }
        matching = [];

        if(matched) {
            this.score++;
            this.gameData[pos.x][pos.y] = 0;
        }

        return matched;
    }

    checkLine(pos : Point, dx : number, dy : number, type : number, checked : Point[]) : void {
        let nPos : Point = { x: pos.x + dx, y: pos.y + dy };
        if(this.checkBounds(nPos.x, nPos.y)) {
            if(this.gameData[nPos.x][nPos.y] == type) {
                checked.push(nPos);
                this.checkLine(nPos, dx, dy, type, checked);
            }
        }
    }

    checkBounds(x : number, y : number) : boolean {
        if(x >= 0 && y >= 0 && x < this.width / this.cellSize && y < this.height / this.cellSize)
            return true;
        return false;
    }

    checkNeighbors(pos : Point) : boolean {
        for(let i = -1; i <= 1; i += 2) {
            if(this.checkBounds(pos.x + i, pos.y))
                if(this.gameData[pos.x + i][pos.y] == 0)
                    return true;
            if(this.checkBounds(pos.x, pos.y + i))
                if(this.gameData[pos.x][pos.y + i] == 0)
                    return true;
        }
        return false;
    }

    drawGrid(ctx : CanvasRenderingContext2D, width : number, height : number) : void {
        ctx.beginPath();
        ctx.lineWidth = 2;
        for(let x = this.cellSize; x < width; x += this.cellSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }

        for(let y = this.cellSize; y < height; y += this.cellSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }

        ctx.strokeStyle = '#000';
        ctx.stroke();
    }

    drawPath(ctx : CanvasRenderingContext2D) : void {
        if(this.path != null) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this.state == 'game' ? '#E0E0E0' : '#BDBDBD';
            this.path.forEach(pos => {
                ctx.fillRect(pos.x * this.cellSize, pos.y * this.cellSize, this.cellSize, this.cellSize);
            });
            ctx.restore();
        }
    }

    drawOrb(ctx : CanvasRenderingContext2D, x : number, y : number, t : number, main : boolean) {
        ctx.beginPath();
        ctx.arc(this.cellSize / 2 + this.cellSize * x, this.cellSize / 2 + this.cellSize * y,
             this.cellSize * (this.selected && main ? (this.selected.x == x && this.selected.y == y ? 0.4 : 0.3) : 0.3), 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fillStyle = this.colors[t - 1];
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }

    drawUpcoming(ctx : CanvasRenderingContext2D) : void {
        for(let i = 0; i < 3; i++) {
            this.drawOrb(ctx, i, 0, this.upcomingOrbs[i], false);
        }
    }

    drawPlayfield(ctx : CanvasRenderingContext2D) : void {
        for(let x = 0; x < this.width / this.cellSize; x++) {
            for(let y = 0; y < this.height / this.cellSize; y++) {
                if(this.gameData[x][y] != 0) {
                    this.drawOrb(ctx, x, y, this.gameData[x][y], true);
                }
            }
        }
    }

    render(nCtx : CanvasRenderingContext2D, rCtx : CanvasRenderingContext2D) : void {
        nCtx.clearRect(0, 0, this.nWidth, this.nHeight);
        rCtx.clearRect(0, 0, this.width, this.height);

        this.drawPath(rCtx);

        this.drawUpcoming(nCtx);
        this.drawPlayfield(rCtx);

        this.drawGrid(nCtx, this.nWidth, this.nHeight);
        this.drawGrid(rCtx, this.width, this.height);
    }
}