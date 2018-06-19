/**
 * Imports
 */
import Node from './Node';

/**
 * 
 * @param {*} id 
 * @param {*} size 
 */
function Board(id, size) {
    this.canvas = document.getElementById(id);
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx = this.canvas.getContext('2d');
    this.gridSize = size || 40;
    this.nodes = [];
    this.activeResource = {};
}

Board.prototype.init = function () {

    this.drawGrid();
    this.draw();
    this.registerEvents();

}

Board.prototype.registerEvents = function () {

    this.canvas.onclick = e => {

        let rect = this.canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let pos = this.getNodePosFromCoord(x, y);
        this.nodes[pos].resource = resources[0];
        this.nodes[pos].draw(this.ctx, true);
    }


}


Board.prototype.getNodePosFromCoord = function (x, y) {
    let px = parseInt((this.width / this.gridSize) * (((x * 100) / this.width) * 0.01)) + 1,
        py = parseInt((this.height / this.gridSize) * (((y * 100) / this.height) * 0.01)) + 1,
        p = (((this.height / this.gridSize) * (py - 1)) + px) - 1;
    return p;
}

Board.prototype.draw = function () {

    this.ctx.fillStyle = "#fff";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].draw(this.ctx);
    }

}

Board.prototype.drawGrid = function () {

    for (let j = 0; j < this.height / this.gridSize; j++) {
        for (var i = 0; i < this.width / this.gridSize; i++) {
            let node = new Node(this.gridSize * i, this.gridSize * j, this.gridSize, this.gridSize);
            this.nodes.push(node);
        }
    }


}

export default Board;