 //create a new Game instance
 //set the game dimensions and set the Phaser.AUTO (OpenGL or Canvas)
 var game = new Phaser.Game(640, 360, Phaser.AUTO);

//create a game state (this contains the logic of the game)
var GameState = {
	//assets are loaded in this function
	preload: function(){
        this.load.image('backgroundImageKey', 'assets/images/background.png');
	},
	//after preloading create function is called
	create: function(){
        this.background = this.game.add.sprite(0,0, 'backgroundImageKey');
	},
	//this function is called multiple times to handle the requests when game is live
	update: function(){

	}
};

//add state to the main game
game.state.add('GameState', GameState);

//to launch the game
game.state.start('GameState');