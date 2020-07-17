class Food{
  constructor(game){
    this.game = game;
    this.xF = 0;
    this.yF = 0;
    this.loop();
  }


  drawFood(){
    this.game.ctx.beginPath();
		this.game.ctx.fillRect(this.xF, this.yF, SNAKE_WIDTH, SNAKE_WIDTH);
		this.game.ctx.fillStyle = "#4caf50";
		this.game.ctx.fill();
		this.game.ctx.closePath();
  }

  loop(){
    this.xF = Math.round(Math.random() * Math.round(SCREEN_WIDTH/10)) * 10;
    console.log(this.xF);
    this.yF = Math.round(Math.random() * Math.round(SCREEN_HEIGHT/10)) * 10;
    console.log(this.yF);
    this.position = setInterval(() => {
      this.update();
      if(this.game.checkCollision()){
        clearInterval(this.position);
        this.loop();
      }
    },300);
  }

  update(){
    this.drawFood();
  }

}