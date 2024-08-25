var Ball = function(posX, posY, speedX, speedY, canvas, context, collideSound) {
    this.speedPosition = new SpeedPosition(posX, posY, speedX, speedY);
    this.objectStyle = new ObjectStyle();
    this.radius = 6;
    this.bouncing = false;
    this.collideSound = collideSound;

    this.draw = function () {
      context.beginPath();
      // Starting angle = 0; Ending angle = 2 * PI
      context.arc(this.speedPosition.posX, this.speedPosition.posY, this.radius, 0, 2 * Math.PI, false);

      // Checking and filling styles.
      this.objectStyle.checkStyle(context);
    };

    this.bounce = function(time) {
      // pixels / second
      this.speedPosition.proccessPositionByTime(time);
      this.checkEdgeCollision();
    };

    this.checkEdgeCollision = function() {
		  if ((this.speedPosition.posX - this.radius) <= 0) { //Lateral esquerda
			  this.speedPosition.speedX = -this.speedPosition.speedX;
			  this.speedPosition.posX = 0 + this.radius;
        this.makeCollideSound();
		  } else if ((this.speedPosition.posX + this.radius) >= canvas.width) { //Lateral direita
			  this.speedPosition.speedX = -this.speedPosition.speedX;
			  this.speedPosition.posX = canvas.width - this.radius;
        this.makeCollideSound();
	  	}
		
		  if ((this.speedPosition.posY - this.radius) <= 0) { //topo
			  this.speedPosition.speedY = -this.speedPosition.speedY;
			  this.speedPosition.posY = 0 + this.radius;
        this.makeCollideSound();
		  } else if ((this.speedPosition.posY + this.radius) >= canvas.height) { //baixo
			  this.speedPosition.speedY = -this.speedPosition.speedY;
			  this.speedPosition.posY = canvas.height - this.radius;
        this.makeCollideSound();
	  	}
  	};

    this.makeCollideSound = function() {
      collideSound.currentTime = 0;
      collideSound.play();
    };
}