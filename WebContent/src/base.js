var v = {
	scale: 1,
	gameWidth: 1280,
	gameHeight: 720,
	scrollX: 0,
	scrollY: 0,	
};

var game = new Phaser.Game(v.gameWidth, v.gameHeight, Phaser.CANVAS, "game");
//var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'game');
game.state.add("Boot", boot);
game.state.add("Preload", preload);
game.state.add("titleMenu", titleMenu);
game.state.add("theGame", theGame);
game.state.start("Boot");