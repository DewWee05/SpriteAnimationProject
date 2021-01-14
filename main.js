var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./jugger.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	canvas.focus();
	gameEngine.init(ctx);
	gameEngine.addEntity(new Juggernaut(gameEngine));
	gameEngine.start();
});
