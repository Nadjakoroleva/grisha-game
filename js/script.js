let hero;
let food;
let background; 
let enemy;
let x = 0;
let y = 0;
let foodX = 0;
let foodY = 0;
let enemyX = 0;
let enemyY = 0;
let dx = 30;
let dy = 30;
let health = 100;
let dHealth = 0;

function setup() {
	createCanvas(1024, 786);
	foodX = random(100, 700);
  foodY = random(100, 700);
  enemyX = random(500, 700);
	enemyY = random(500, 700);
	noStroke();
}

function preload() {  // preload() runs once
	  hero = loadImage("hero.png");
	enemy = loadImage("enemy.gif");
	food = loadImage("food.png");
  background = loadImage("background.jpg");
		}


function draw() {
  image(background, 0, 0);
  background.resize(1024, 786);
  //background(255);
  hero.resize(0, 100);
  image(hero, x, y);
  enemy.resize(0, 100);
  image(enemy, enemyX, enemyY);
  food.resize(0, 75);
	image(food, foodX, foodY);
	rect(width - 130, 30, health, 30);

  //функция, чтобы герой ел еду
  if (x > foodX - 50 && x < foodX + 90) { 
    if (y > foodY - 10 && y < foodY + 50) {
      foodX = random(100, 700);
      foodY = random(100, 700);
      dHealth = dHealth + 20;
    }
  }
  //движение врага
  if (x > enemyX) {
    enemyX = enemyX + 1;
  } else if (x < enemyX) {
    enemyX = enemyX - 1;
  }
  if (y > enemyY) {
    enemyY = enemyY + 1;
  } else if (y < enemyY) {
    enemyY = enemyY - 1;
  }

  if (x > enemyX - 30 && x < enemyX + 30) {
    if (y > enemyY - 30 && y < enemyY + 30) {
      dHealth = dHealth - 1;
    }
  }


  // условие поражения
  if (health <= 0) {
    health = 0;
    textSize(100);
    text("TRY AGAIN", 30, 400);
  }
  // оставшиеся жизни
  fill('#67E836');
  if (health < 20) {
    fill('#FA0D0D');
  }
  health = 100 - millis() / 1000 + dHealth;
  if (health > 100) {
    health = 100;
  }
  
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  } else if (keyCode == UP_ARROW) {
    y = y - dy;
  } else if (keyCode == DOWN_ARROW) {
    y = y + dy;
  }
}