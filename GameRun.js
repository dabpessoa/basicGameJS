var GameRun = function() {
  if (GameLoop && GameCanvas && GameLogics) {
    const gameCanvas = new GameCanvas('myCanvas', '2d');
    const gameLogics = new GameLogics();

    const balls = gameLogics.createBalls(gameCanvas);
    const functionRender = gameLogics.render(gameCanvas, balls);
    const functionUpdate = gameLogics.update(balls);

    const gameLoop = new GameLoop(functionRender, functionUpdate);

    this.init = function() {
      gameLoop.start();
    };

    this.stop = function() {
      gameLoop.stop();
    };

    this.fullscreen = function() {
      gameLoop.fullScreen(gameCanvas.getCanvas());
    }
  }
}
const gameRun = new GameRun();