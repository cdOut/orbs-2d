/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_GameView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/GameView */ \"./src/game/GameView.ts\");\n/* harmony import */ var _game_EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/EventHandler */ \"./src/game/EventHandler.ts\");\n\r\n\r\nvar cellSize = 50;\r\nvar cellAmount = 9;\r\nvar nextOrbsCanvas = document.getElementById('upcoming-orbs');\r\nvar nextOrbsCtx = nextOrbsCanvas.getContext('2d');\r\nnextOrbsCanvas.width = cellSize * 3;\r\nnextOrbsCanvas.height = cellSize;\r\nvar gameCanvas = document.getElementById('root');\r\nvar gameCtx = gameCanvas.getContext('2d');\r\ngameCanvas.width = cellSize * cellAmount;\r\ngameCanvas.height = cellSize * cellAmount;\r\nvar pointsCont = document.getElementById('points');\r\nvar game = new _game_GameView__WEBPACK_IMPORTED_MODULE_0__[\"GameView\"](cellSize * cellAmount, cellSize * cellAmount, cellAmount);\r\nwindow.addEventListener('mousemove', function (e) {\r\n    _game_EventHandler__WEBPACK_IMPORTED_MODULE_1__[\"MouseHandler\"].setPosition(e.pageX, e.pageY);\r\n});\r\nwindow.addEventListener('mousedown', function () {\r\n    _game_EventHandler__WEBPACK_IMPORTED_MODULE_1__[\"MouseHandler\"].setClicked(true);\r\n});\r\nwindow.addEventListener('mouseup', function () {\r\n    _game_EventHandler__WEBPACK_IMPORTED_MODULE_1__[\"MouseHandler\"].setClicked(false);\r\n});\r\ngame.testVar = 'Zmiana wartości public';\r\nconsole.log(game.testVar);\r\nconsole.log(game.weirdVar);\r\nvar decoratorContainer = document.getElementById('decorator');\r\ndecoratorContainer.textContent = game.decoratorValue;\r\nvar run = function () {\r\n    requestAnimationFrame(run);\r\n    game.update(gameCanvas);\r\n    pointsCont.textContent = game.getScore().toString();\r\n    game.render(nextOrbsCtx, gameCtx);\r\n};\r\nrun();\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ }),

/***/ "./src/game/EventHandler.ts":
/*!**********************************!*\
  !*** ./src/game/EventHandler.ts ***!
  \**********************************/
/*! exports provided: MouseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MouseHandler\", function() { return MouseHandler; });\nvar MouseHandler = /** @class */ (function () {\r\n    function MouseHandler() {\r\n    }\r\n    MouseHandler.setPosition = function (x, y) {\r\n        this.pos = { x: x, y: y };\r\n    };\r\n    MouseHandler.getPosition = function (canvas) {\r\n        var cBox = canvas.getBoundingClientRect();\r\n        var nPos = {\r\n            x: (this.pos.x || 0) - (cBox.left + window.scrollX),\r\n            y: (this.pos.y || 0) - (cBox.top + window.scrollY)\r\n        };\r\n        return nPos;\r\n    };\r\n    MouseHandler.setClicked = function (value) {\r\n        this.clicked = value;\r\n    };\r\n    MouseHandler.isClicked = function () {\r\n        return this.clicked;\r\n    };\r\n    MouseHandler.pos = { x: 0, y: 0 };\r\n    return MouseHandler;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/game/EventHandler.ts?");

/***/ }),

/***/ "./src/game/GameView.ts":
/*!******************************!*\
  !*** ./src/game/GameView.ts ***!
  \******************************/
/*! exports provided: GameView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameView\", function() { return GameView; });\n/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandler */ \"./src/game/EventHandler.ts\");\n/* harmony import */ var _pathfind_Pathfind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pathfind/Pathfind */ \"./src/pathfind/Pathfind.ts\");\n/* harmony import */ var _other_Decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../other/Decorators */ \"./src/other/Decorators.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\n// Zastosowanie jednego dekoratora metody\r\nvar GameView = /** @class */ (function () {\r\n    function GameView(width, height, cells) {\r\n        this.colors = [\r\n            '#FFEB3B', '#FF9800', '#f44336',\r\n            '#2196F3', '#4CAF50', '#9C27B0',\r\n            '#FF80AB'\r\n        ];\r\n        this.selected = null;\r\n        this.path = null;\r\n        this.state = 'game';\r\n        this.score = 0;\r\n        this.testVar = 'Testowa wartość public';\r\n        this.anotherVar = 'Testowa protected';\r\n        this.weirdVar = 'Testowa wartość readonly';\r\n        this.width = width;\r\n        this.height = height;\r\n        this.cellSize = width / cells;\r\n        this.gameData = [];\r\n        this.upcomingOrbs = [];\r\n        for (var x = 0; x < cells; x++) {\r\n            this.gameData[x] = [];\r\n            for (var y = 0; y < cells; y++) {\r\n                this.gameData[x][y] = 0;\r\n            }\r\n        }\r\n        this.generateOrbs();\r\n        this.placeOrbs();\r\n        this.generateOrbs();\r\n        this.nWidth = this.cellSize * 3;\r\n        this.nHeight = this.cellSize;\r\n        this.debug = function (value) {\r\n            console.log('Interface debug: ' + value);\r\n        };\r\n        this.debug(width);\r\n        this.debug(height);\r\n    }\r\n    GameView.prototype.generateOrbs = function () {\r\n        for (var i = 0; i < 3; i++) {\r\n            this.upcomingOrbs[i] = Math.floor(Math.random() * 7) + 1;\r\n        }\r\n    };\r\n    GameView.prototype.canPlaceOrb = function () {\r\n        return [].concat.apply([], ([].concat.apply([], this.gameData))).indexOf(0) != -1;\r\n    };\r\n    GameView.prototype.placeOrbs = function () {\r\n        var placed;\r\n        var x, y;\r\n        for (var i = 0; i < 3; i++) {\r\n            if (!this.canPlaceOrb()) {\r\n                this.state = 'lost';\r\n                break;\r\n            }\r\n            placed = false;\r\n            do {\r\n                x = Math.floor(Math.random() * (this.width / this.cellSize));\r\n                y = Math.floor(Math.random() * (this.height / this.cellSize));\r\n                if (this.gameData[x][y] == 0) {\r\n                    this.gameData[x][y] = this.upcomingOrbs[i];\r\n                    this.checkAllMatching({ x: x, y: y });\r\n                    placed = true;\r\n                }\r\n            } while (!placed);\r\n        }\r\n        if (!this.canPlaceOrb()) {\r\n            this.state = 'lost';\r\n            alert(\"Game over! You've earned \" + this.score + \" points!\");\r\n        }\r\n    };\r\n    GameView.prototype.getScore = function () {\r\n        return this.score;\r\n    };\r\n    GameView.prototype.update = function (canvas) {\r\n        if (this.state == 'game') {\r\n            var over = _EventHandler__WEBPACK_IMPORTED_MODULE_0__[\"MouseHandler\"].getPosition(canvas);\r\n            over.x = Math.floor(over.x / this.cellSize);\r\n            over.y = Math.floor(over.y / this.cellSize);\r\n            if (this.checkBounds(over.x, over.y)) {\r\n                if (this.selected) {\r\n                    if (JSON.stringify(over) != JSON.stringify(this.lastOver)) {\r\n                        this.path = _pathfind_Pathfind__WEBPACK_IMPORTED_MODULE_1__[\"Pathfind\"].Astar(this.gameData, this.selected, over);\r\n                    }\r\n                }\r\n                if (_EventHandler__WEBPACK_IMPORTED_MODULE_0__[\"MouseHandler\"].isClicked()) {\r\n                    if (this.selected != null) {\r\n                        if (JSON.stringify(this.selected) == JSON.stringify(over)) {\r\n                            this.selected = null;\r\n                        }\r\n                        else if (this.gameData[over.x][over.y] == 0 && this.path != null) {\r\n                            this.gameData[over.x][over.y] = this.gameData[this.selected.x][this.selected.y];\r\n                            this.gameData[this.selected.x][this.selected.y] = 0;\r\n                            this.state = 'path';\r\n                            this.selected = over;\r\n                            this.stateChange = setTimeout(function () {\r\n                                if (!this.checkAllMatching(this.selected)) {\r\n                                    this.placeOrbs();\r\n                                    this.generateOrbs();\r\n                                }\r\n                                this.state = 'game';\r\n                                this.selected = null;\r\n                                this.path = null;\r\n                            }.bind(this), 1000);\r\n                        }\r\n                        else if (this.gameData[over.x][over.y] != 0) {\r\n                            if (this.checkNeighbors(over)) {\r\n                                this.selected = over;\r\n                            }\r\n                        }\r\n                        else {\r\n                            this.selected = null;\r\n                        }\r\n                    }\r\n                    else {\r\n                        this.path = null;\r\n                        this.selected = null;\r\n                        if (this.gameData[over.x][over.y] != 0 && this.checkNeighbors(over)) {\r\n                            this.selected = over;\r\n                        }\r\n                    }\r\n                    _EventHandler__WEBPACK_IMPORTED_MODULE_0__[\"MouseHandler\"].setClicked(false);\r\n                }\r\n                this.lastOver = over;\r\n            }\r\n        }\r\n    };\r\n    GameView.prototype.checkAllMatching = function (pos) {\r\n        var _this = this;\r\n        var matched = false;\r\n        var matching = [];\r\n        var type = this.gameData[pos.x][pos.y];\r\n        this.checkLine(pos, 1, 0, type, matching);\r\n        this.checkLine(pos, -1, 0, type, matching);\r\n        if (matching.length >= 4) {\r\n            matched = true;\r\n            matching.forEach(function (match) {\r\n                _this.gameData[match.x][match.y] = 0;\r\n                _this.score++;\r\n            });\r\n        }\r\n        matching = [];\r\n        this.checkLine(pos, 0, 1, type, matching);\r\n        this.checkLine(pos, 0, -1, type, matching);\r\n        if (matching.length >= 4) {\r\n            matched = true;\r\n            matching.forEach(function (match) {\r\n                _this.gameData[match.x][match.y] = 0;\r\n                _this.score++;\r\n            });\r\n        }\r\n        matching = [];\r\n        this.checkLine(pos, 1, 1, type, matching);\r\n        this.checkLine(pos, -1, -1, type, matching);\r\n        if (matching.length >= 4) {\r\n            matched = true;\r\n            matching.forEach(function (match) {\r\n                _this.gameData[match.x][match.y] = 0;\r\n                _this.score++;\r\n            });\r\n        }\r\n        matching = [];\r\n        this.checkLine(pos, 1, -1, type, matching);\r\n        this.checkLine(pos, -1, 1, type, matching);\r\n        if (matching.length >= 4) {\r\n            matched = true;\r\n            matching.forEach(function (match) {\r\n                _this.gameData[match.x][match.y] = 0;\r\n                _this.score++;\r\n            });\r\n        }\r\n        matching = [];\r\n        if (matched) {\r\n            this.score++;\r\n            this.gameData[pos.x][pos.y] = 0;\r\n        }\r\n        return matched;\r\n    };\r\n    GameView.prototype.checkLine = function (pos, dx, dy, type, checked) {\r\n        var nPos = { x: pos.x + dx, y: pos.y + dy };\r\n        if (this.checkBounds(nPos.x, nPos.y)) {\r\n            if (this.gameData[nPos.x][nPos.y] == type) {\r\n                checked.push(nPos);\r\n                this.checkLine(nPos, dx, dy, type, checked);\r\n            }\r\n        }\r\n    };\r\n    GameView.prototype.checkBounds = function (x, y) {\r\n        if (x >= 0 && y >= 0 && x < this.width / this.cellSize && y < this.height / this.cellSize)\r\n            return true;\r\n        return false;\r\n    };\r\n    GameView.prototype.checkNeighbors = function (pos) {\r\n        for (var i = -1; i <= 1; i += 2) {\r\n            if (this.checkBounds(pos.x + i, pos.y))\r\n                if (this.gameData[pos.x + i][pos.y] == 0)\r\n                    return true;\r\n            if (this.checkBounds(pos.x, pos.y + i))\r\n                if (this.gameData[pos.x][pos.y + i] == 0)\r\n                    return true;\r\n        }\r\n        return false;\r\n    };\r\n    GameView.prototype.drawGrid = function (ctx, width, height) {\r\n        ctx.beginPath();\r\n        ctx.lineWidth = 2;\r\n        for (var x = this.cellSize; x < width; x += this.cellSize) {\r\n            ctx.moveTo(x, 0);\r\n            ctx.lineTo(x, height);\r\n        }\r\n        for (var y = this.cellSize; y < height; y += this.cellSize) {\r\n            ctx.moveTo(0, y);\r\n            ctx.lineTo(width, y);\r\n        }\r\n        ctx.strokeStyle = '#000';\r\n        ctx.stroke();\r\n    };\r\n    GameView.prototype.drawPath = function (ctx) {\r\n        var _this = this;\r\n        if (this.path != null) {\r\n            ctx.save();\r\n            ctx.beginPath();\r\n            ctx.fillStyle = this.state == 'game' ? '#E0E0E0' : '#BDBDBD';\r\n            this.path.forEach(function (pos) {\r\n                ctx.fillRect(pos.x * _this.cellSize, pos.y * _this.cellSize, _this.cellSize, _this.cellSize);\r\n            });\r\n            ctx.restore();\r\n        }\r\n    };\r\n    GameView.prototype.drawOrb = function (ctx, x, y, t, main) {\r\n        ctx.beginPath();\r\n        ctx.arc(this.cellSize / 2 + this.cellSize * x, this.cellSize / 2 + this.cellSize * y, this.cellSize * (this.selected && main ? (this.selected.x == x && this.selected.y == y ? 0.4 : 0.3) : 0.3), 0, 2 * Math.PI, false);\r\n        ctx.closePath();\r\n        ctx.fillStyle = this.colors[t - 1];\r\n        ctx.lineWidth = 2;\r\n        ctx.fill();\r\n        ctx.stroke();\r\n    };\r\n    GameView.prototype.drawUpcoming = function (ctx) {\r\n        for (var i = 0; i < 3; i++) {\r\n            this.drawOrb(ctx, i, 0, this.upcomingOrbs[i], false);\r\n        }\r\n    };\r\n    GameView.prototype.drawPlayfield = function (ctx) {\r\n        for (var x = 0; x < this.width / this.cellSize; x++) {\r\n            for (var y = 0; y < this.height / this.cellSize; y++) {\r\n                if (this.gameData[x][y] != 0) {\r\n                    this.drawOrb(ctx, x, y, this.gameData[x][y], true);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    GameView.prototype.render = function (nCtx, rCtx) {\r\n        nCtx.clearRect(0, 0, this.nWidth, this.nHeight);\r\n        rCtx.clearRect(0, 0, this.width, this.height);\r\n        this.drawPath(rCtx);\r\n        this.drawUpcoming(nCtx);\r\n        this.drawPlayfield(rCtx);\r\n        this.drawGrid(nCtx, this.nWidth, this.nHeight);\r\n        this.drawGrid(rCtx, this.width, this.height);\r\n    };\r\n    __decorate([\r\n        _other_Decorators__WEBPACK_IMPORTED_MODULE_2__[\"Log\"],\r\n        __metadata(\"design:type\", Function),\r\n        __metadata(\"design:paramtypes\", []),\r\n        __metadata(\"design:returntype\", void 0)\r\n    ], GameView.prototype, \"generateOrbs\", null);\r\n    GameView = __decorate([\r\n        _other_Decorators__WEBPACK_IMPORTED_MODULE_2__[\"Test\"],\r\n        __metadata(\"design:paramtypes\", [Number, Number, Number])\r\n    ], GameView);\r\n    return GameView;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/game/GameView.ts?");

/***/ }),

/***/ "./src/other/Decorators.ts":
/*!*********************************!*\
  !*** ./src/other/Decorators.ts ***!
  \*********************************/
/*! exports provided: Log, Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Log\", function() { return Log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Test\", function() { return Test; });\n// Dekoratory (metody oraz klasy)\r\nfunction Log(target, name, descriptor) {\r\n    var originalMethod = descriptor.value;\r\n    descriptor.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var result = originalMethod.apply(this, args);\r\n        console.log(\"Executed function: \" + name + \". New orbs successfully generated!\");\r\n        return result;\r\n    };\r\n}\r\nfunction Test(target) {\r\n    target.prototype.decoratorValue = 'TK4ID1 | Made using a decorator ;)';\r\n    console.log(target.prototype.decoratorValue);\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/other/Decorators.ts?");

/***/ }),

/***/ "./src/pathfind/Cell.ts":
/*!******************************!*\
  !*** ./src/pathfind/Cell.ts ***!
  \******************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n// Cell (Node) class containing important information for a* algorithm\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(pos, parent, end, arr) {\r\n        this._pos = pos;\r\n        this._parent = parent;\r\n        if (this._parent > -1) {\r\n            this._g = arr[parent].g + 1;\r\n            this._f = this._g + Math.sqrt(Math.pow(end.x - pos.x, 2) + Math.pow(end.y - pos.y, 2));\r\n        }\r\n        else {\r\n            this._g = 0;\r\n            this._f = 0;\r\n        }\r\n    }\r\n    Object.defineProperty(Cell.prototype, \"pos\", {\r\n        get: function () {\r\n            return this._pos;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Cell.prototype, \"parent\", {\r\n        get: function () {\r\n            return this._parent;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Cell.prototype, \"g\", {\r\n        get: function () {\r\n            return this._g;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Cell.prototype, \"f\", {\r\n        get: function () {\r\n            return this._f;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Cell;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/pathfind/Cell.ts?");

/***/ }),

/***/ "./src/pathfind/Pathfind.ts":
/*!**********************************!*\
  !*** ./src/pathfind/Pathfind.ts ***!
  \**********************************/
/*! exports provided: Pathfind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pathfind\", function() { return Pathfind; });\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/pathfind/Cell.ts\");\n// Pathfinder class containing static methods for calculating the shortest path using a*\r\n\r\nvar Pathfind = /** @class */ (function () {\r\n    function Pathfind() {\r\n    }\r\n    Pathfind.Astar = function (grid, start, end) {\r\n        if (grid[end.x][end.y] != 0)\r\n            return null;\r\n        var openList = [];\r\n        var closedList = [];\r\n        var cells = [];\r\n        cells.push(new _Cell__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"](start, -1, end, cells));\r\n        var found = false;\r\n        var cId = cells.length - 1;\r\n        openList.push(cId);\r\n        var _loop_1 = function () {\r\n            cId = openList.reduce(function (prev, curr) { return (cells[prev].f < cells[curr].f) ? prev : curr; });\r\n            openList.splice(openList.indexOf(cId), 1);\r\n            closedList.push(cId);\r\n            if (cells[cId].pos.x == end.x && cells[cId].pos.y == end.y) {\r\n                found = true;\r\n                return \"break\";\r\n            }\r\n            var children = [];\r\n            var newX = void 0, newY = void 0;\r\n            var childCell;\r\n            for (var i = -1; i <= 1; i += 2) {\r\n                newX = cells[cId].pos.x + i;\r\n                if (newX >= 0 && newX < grid.length && grid[newX][cells[cId].pos.y] == 0) {\r\n                    childCell = new _Cell__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"]({ x: newX, y: cells[cId].pos.y }, cId, end, cells);\r\n                    if (cells.filter(function (cell) { return cell.pos.x == childCell.pos.x && cell.pos.y == childCell.pos.y; }).length == 0) {\r\n                        cells.push(childCell);\r\n                        children.push(cells.length - 1);\r\n                    }\r\n                }\r\n                newY = cells[cId].pos.y + i;\r\n                if (newY >= 0 && newY < grid[cells[cId].pos.x].length && grid[cells[cId].pos.x][newY] == 0) {\r\n                    childCell = new _Cell__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"]({ x: cells[cId].pos.x, y: newY }, cId, end, cells);\r\n                    if (cells.filter(function (cell) { return cell.pos.x == childCell.pos.x && cell.pos.y == childCell.pos.y; }).length == 0) {\r\n                        cells.push(childCell);\r\n                        children.push(cells.length - 1);\r\n                    }\r\n                }\r\n            }\r\n            children.forEach(function (child) {\r\n                if (closedList.filter(function (searched) {\r\n                    return JSON.stringify(cells[searched].pos) == JSON.stringify(cells[child].pos);\r\n                })[0] != undefined)\r\n                    return;\r\n                var openSearched = openList.filter(function (searched) {\r\n                    return JSON.stringify(cells[searched].pos) == JSON.stringify(cells[child].pos);\r\n                })[0];\r\n                if (openSearched != undefined)\r\n                    if (cells[child].g > cells[openSearched].g)\r\n                        return;\r\n                openList.push(child);\r\n            });\r\n        };\r\n        while (openList.length > 0) {\r\n            var state_1 = _loop_1();\r\n            if (state_1 === \"break\")\r\n                break;\r\n        }\r\n        if (found) {\r\n            var path = [];\r\n            path.push(cells[cId].pos);\r\n            while (cells[cId].parent > -1) {\r\n                cId = cells[cId].parent;\r\n                path.push(cells[cId].pos);\r\n            }\r\n            return path.reverse();\r\n        }\r\n        else {\r\n            return null;\r\n        }\r\n    };\r\n    return Pathfind;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/pathfind/Pathfind.ts?");

/***/ })

/******/ });