PImage hero, food, background, enemy;
float x, y, foodX, foodY, enemyX, enemyY;
int dx = 10;
int dy = 10;
int health = 100;
int dHealth;

void setup() {
  size(1024, 786);
  hero = loadImage("hero.png");
  //enemyX = loadImage("enemy.png");
  enemy = loadImage("enemy.gif");
  foodX = random(100, 700);
  foodY = random(100, 700);
  enemyX = random(500, 700);
  enemyY = random(500, 700);
  food = loadImage("food.png");
  background = loadImage("background.jpg");
  noStroke();
}


void draw() {
  image(background, 0, 0);
  background.resize(1024, 786);
  //background(255);
  hero.resize(0, 100);
  image(hero, x, y);
  enemy.resize(0, 100);
  image(enemy, enemyX, enemyY);
  food.resize(0, 75);
  image(food, foodX, foodY);

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
  fill(#67E836);
  if (health < 20) {
    fill(#FA0D0D);
  }
  health = 100 - millis() / 1000 + dHealth;
  if (health > 100) {
    health = 100;
  }
  rect(width - 130, 30, health, 30);
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + dx;
  } else if (keyCode == LEFT) {
    x = x - dx;
  } else if (keyCode == UP) {
    y = y - dy;
  } else if (keyCode == DOWN) {
    y = y + dy;
  }
}