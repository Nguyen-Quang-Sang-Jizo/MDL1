class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle= this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let canvas = document.getElementById('canvas');
let rectangle = new Rectangle(10, 10, 200, 100, '#ff0000');
rectangle.render(canvas);
