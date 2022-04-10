
import { GameView } from './game/GameView';
import { MouseHandler } from './game/EventHandler';

const cellSize = 50;
const cellAmount = 9;

const nextOrbsCanvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('upcoming-orbs');
const nextOrbsCtx : CanvasRenderingContext2D = nextOrbsCanvas.getContext('2d');
nextOrbsCanvas.width = cellSize * 3;
nextOrbsCanvas.height = cellSize;

const gameCanvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('root');
const gameCtx : CanvasRenderingContext2D = gameCanvas.getContext('2d');
gameCanvas.width = cellSize * cellAmount;
gameCanvas.height = cellSize * cellAmount;

const pointsCont : HTMLSpanElement = <HTMLSpanElement> document.getElementById('points');

const game : GameView = new GameView(cellSize * cellAmount, cellSize * cellAmount, cellAmount);

window.addEventListener('mousemove', e => {
    MouseHandler.setPosition(e.pageX, e.pageY);
});

window.addEventListener('mousedown', () => {
    MouseHandler.setClicked(true);
});

window.addEventListener('mouseup', () => {
    MouseHandler.setClicked(false);
});

game.testVar = 'Zmiana wartości public';
console.log(game.testVar);
console.log(game.weirdVar);

const decoratorContainer = document.getElementById('decorator');
decoratorContainer.textContent = game.decoratorValue;

const run = () => {
    requestAnimationFrame(run);
    
    game.update(gameCanvas);
    pointsCont.textContent = game.getScore().toString();
    game.render(nextOrbsCtx, gameCtx);
};

run();