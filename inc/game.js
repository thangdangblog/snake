class Game{
  constructor(){
    this.canvas = document.getElementById('screen');
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;

    this.canvas.background = "#fff";
    this.ctx = this.canvas.getContext('2d');

    this.snake = new Snake(this);
    this.food = new Food(this);
  }

  clearBlock(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  checkCollision(){
    return this.snake.head.headX == this.food.xF && this.snake.head.headY ==  this.food.yF
    || this.snake.head.headY == this.food.yF && this.snake.head.headX ==  this.food.xF;
  }

}

const game = new Game();