
function Node(x, y, sx, sy) {
    this.x = x || 0;
    this.y = y || 0;
    this.sx = sx || 0;
    this.sy = sy || 0;
    this.resource = {};
}

Node.prototype.draw = function (ctx, fill) {

    ctx.strokeStyle = "#3c3b3b";
    ctx.strokeWidth = "2px";
    ctx.rect(this.x, this.y, this.sx, this.sy);
    ctx.stroke();

    if (fill) {
        ctx.fillStyle = this.resource.color;
        ctx.fillRect(this.x + 1, this.y + 1, this.sx - 2, this.sy - 2);
    }
}

Node.prototype.update = function () {

}

export default Node;