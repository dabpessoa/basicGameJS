var GameLogics = function() {
  this.render = function(gameCanvas, balls) { 
    return function() {
      // Clear screen.
      gameCanvas.clear();
  
      // Draw balls.
      for(var i = 0; i < balls.length; i++) {
        balls[i].draw();
      }
    }
  };

  this.update = function(balls) {
    return function(time) {
      // update balls
      for(var i = 0; i < balls.length; i++) {
        balls[i].bounce(time);
      }
    }
  };

  this.createBalls = function(gameCanvas) {
    var balls = [];
    var collideSound = document.getElementById('collideSoundId');
  
    balls.push(new Ball(gameCanvas.getCanvas().width/2, gameCanvas.getCanvas().height/2, 300, 150, gameCanvas.getCanvas(), gameCanvas.getContext(), collideSound));
    balls.push(new Ball(0, 0, 100, 300, gameCanvas.getCanvas(), gameCanvas.getContext(), collideSound));
    balls.push(new Ball(gameCanvas.getCanvas().width, gameCanvas.getCanvas().height, 50, 10, gameCanvas.getCanvas(), gameCanvas.getContext(), collideSound));
    
    return balls;
  }
}