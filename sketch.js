let polygons = [];
let colors = ['#edafb8', '#f7e1d7', '#dedbd2', '#b0c4b1', '#4a5759']; // 指定的顏色範圍

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#eae2b7');

  // 產生40個多邊形的資料
  for (let i = 0; i < 40; i++) {
    let polygon = {
      x: random(width),
      y: random(height),
      size: random(30, 50),
      sides: floor(random(3, 8)), // 隨機邊數，3到7邊
      color: color(random(colors)) // 隨機選擇顏色
    };
    polygons.push(polygon);
  }
}

function draw() {
  background('#eae2b7');

  // 根據滑鼠位置調整多邊形的大小
  let sizeOffset = map(mouseX, 0, width, 10, 30);

  // 繪製多邊形
  for (let polygon of polygons) {
    fill(polygon.color);
    noStroke();
    drawPolygon(polygon.x, polygon.y, polygon.size + sizeOffset, polygon.sides);
  }
}

function drawPolygon(x, y, radius, sides) {
  beginShape();
  for (let i = 0; i < TWO_PI; i += TWO_PI / sides) {
    let randomRadius = radius * random(0.8, 1.2); // 隨機調整每個頂點的半徑
    let px = x + cos(i) * randomRadius;
    let py = y + sin(i) * randomRadius;
    vertex(px, py);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
