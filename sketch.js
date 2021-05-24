var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg, fairy;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	bgImg = loadImage("starNight.png");
	sound = loadSound("JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	//create fairy sprite and add animation for fairy
    sound.play()
	fairy = createSprite(100,410);
	fairy.addAnimation("fairy", fairyImg);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if (starBody.position.y>470){
  Matter.Body.setStatic(starBody, true)
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	fairy.velocityX= 2
	if (keyCode === RIGHT_ARROW) {
		fairy.velocityX= 4
	}
	if (keyCode === LEFT_ARROW) {
		fairy.velocityX= -4
	}
}
