class Snake {

	constructor(game) {
		this.game = game;
		this.direction = 'right';
		this.head = {
			headX: 0,
			headY: 0,
		};
		this.body = {
			
		};
		this.moveSize = SNAKE_WIDTH;
		this.loop();
		this.initEvent();
	}

	initEvent() {
		window.addEventListener('keydown', (e) => {
			switch (e.keyCode) {
				case 37:
					this.direction = 'left';
					break;

				case 38:
					this.direction = 'top';
					break;

				case 39:
					this.direction = 'right';
					break;

				case 40:
					this.direction = 'down';
					break;
			}
		});
	}

	update() {
		this.game.clearBlock();
		this.drawBlock();
		switch (this.direction) {
			case 'left':
				this.head.headX += -this.moveSize;
				break;

			case 'right':
				this.head.headX += this.moveSize;
				break;

			case 'top':
				this.head.headY += - this.moveSize;
				break;

			case 'down':
				this.head.headY +=  this.moveSize;
				break;
		}
	}

	drawBlock() {
		this.game.ctx.beginPath();
		this.game.ctx.fillRect(this.head.headX, this.head.headY, SNAKE_WIDTH, SNAKE_WIDTH);
		this.game.ctx.fillStyle = "#FF0000";
		this.game.ctx.fill();
		this.game.ctx.closePath();
	}

	loop() {
		clearInterval(this.loopSnake);
		this.loopSnake = setInterval(() => {
			this.update();
		}, 300);
	}
}