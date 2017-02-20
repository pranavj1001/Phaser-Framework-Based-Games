 //create a new Game instance
 //set the game dimensions and set the Phaser.AUTO (OpenGL or Canvas)
 var game = new Phaser.Game(640, 360, Phaser.AUTO);

//create a game state (this contains the logic of the game)
var GameState = {
    
	//assets are loaded in this function
	preload: function(){
        
        //load the images from the assets folder
        this.load.image('backgroundImageKey', 'assets/images/background.png');
        this.load.image('chickenImageKey', 'assets/images/chicken.png');
        this.load.image('horseImageKey', 'assets/images/horse.png');
        this.load.image('pigImageKey', 'assets/images/pig.png');
        this.load.image('sheepImageKey', 'assets/images/sheep.png');
        
	},
	//after preloading create function is called
	create: function(){
        
        //to make the game responsive i.e. make it viewable on different types of devices
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //to align the game in the center
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        //this will create a sprite for the background
        this.background = this.game.add.sprite(0,0, 'backgroundImageKey');
        
        //this will create a sprite for the chicken
        this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chickenImageKey');
        //by default the anchor point is top left corner of the image
        //inorder to change it we do it so with the following code
        this.chicken.anchor.setTo(0.5, 0.5);//takes two arguments for X and Y, if both X and Y values are same then one argument will do the job
        
	},
	//this function is called multiple times to handle the requests when game is live
	update: function(){

	}
};

//add state to the main game
game.state.add('GameState', GameState);

//to launch the game
game.state.start('GameState');