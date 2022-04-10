
// Pathfinder class containing static methods for calculating the shortest path using a*

import { Point } from "../other/Interfaces"; 
import { Cell } from "./Cell";

export class Pathfind {
    static Astar(grid : number[][], start : Point, end : Point) : any {

        if(grid[end.x][end.y] != 0)
            return null;

        let openList : number[] = [];
        let closedList : number[] = [];

        let cells : Cell[] = [];

        cells.push(new Cell(start, -1, end, cells));
        let found : boolean = false;

        let cId = cells.length - 1;

        openList.push(cId);
        while(openList.length > 0) {
            cId = openList.reduce((prev, curr) => { return (cells[prev].f < cells[curr].f) ? prev : curr; });
            openList.splice(openList.indexOf(cId), 1);
            closedList.push(cId);

            if(cells[cId].pos.x == end.x && cells[cId].pos.y == end.y) {
                found = true;
                break;
            }

            let children : number[] = [];
            let newX : number, newY : number;
            let childCell : Cell;
            for(let i : number = -1; i <= 1; i += 2) {
                newX = cells[cId].pos.x + i;
                if(newX >= 0 && newX < grid.length && grid[newX][cells[cId].pos.y] == 0) {
                    childCell = new Cell({x: newX, y: cells[cId].pos.y}, cId, end, cells);
                    if(cells.filter(cell => { return cell.pos.x == childCell.pos.x && cell.pos.y == childCell.pos.y}).length == 0) {
                        cells.push(childCell);
                        children.push(cells.length - 1);
                    }
                }
                
                newY = cells[cId].pos.y + i;
                if(newY >= 0 && newY < grid[cells[cId].pos.x].length && grid[cells[cId].pos.x][newY] == 0) {
                    childCell = new Cell({x: cells[cId].pos.x, y: newY}, cId, end, cells);
                    if(cells.filter(cell => { return cell.pos.x == childCell.pos.x && cell.pos.y == childCell.pos.y}).length == 0) {
                        cells.push(childCell);
                        children.push(cells.length - 1);
                    }
                }
            }

            children.forEach(child => {
                if(closedList.filter(searched => { 
                    return JSON.stringify(cells[searched].pos) == JSON.stringify(cells[child].pos); })[0] != undefined)
                        return;

                let openSearched : number | undefined = openList.filter(searched => { 
                    return JSON.stringify(cells[searched].pos) == JSON.stringify(cells[child].pos); })[0];
                if(openSearched != undefined)
                    if(cells[child].g > cells[openSearched].g)
                        return;
                
                openList.push(child);
            });
        }

        if(found) {
            let path : Point[] = [];
            path.push(cells[cId].pos);
            while(cells[cId].parent > -1) {
                cId = cells[cId].parent;
                path.push(cells[cId].pos);
            }
            return path.reverse();
        } else {
            return null;
        }
    }
}