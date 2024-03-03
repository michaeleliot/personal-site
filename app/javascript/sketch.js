var points = []
var mult

var r1
var r2
var g1
var g2
var b1
var b2

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent("background-canvas");
    background(150)
    background(15, 23, 42)
    textSize(100);
    strokeWeight(0.1)
    angleMode(DEGREES)
    noiseDetail(1)

    setPoints()

    r1 = random(100, 255)
    r2 = random(100, 255)
    g1 = random(100, 255)
    g2 = random(100, 255)
    b1 = random(100, 255)
    b2 = random(100, 255)

    mult = random(0.002, 0.01)
}

function setPoints() {
  points = []
  var space = 10

  for (var x = 0; x < width; x += space) {
      for (var y = 0; y < height; y += space) {
          var p = createVector(x + random(-10, 10), y + random(-10, 10))
          points.push(p)
      }
  }

  shuffle(points, true)
}

function draw() {
    // console.log(frameCount)
    noStroke()

    if (frameCount * 5 <= points.length) {
        var max = frameCount * 5
    } else {
        var max = points.length
    }
    
    for (var i = 0; i < max; i++) {
        var r = map(points[i].x, 0, width, r1, r2)
        var g = map(points[i].y, 0, height, g1, g2)
        var b = map(points[i].x, 0, width, b1, b2)

        fill(r, g, b)

        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

        points[i].add(createVector(cos(angle), sin(angle)))

        ellipse(points[i].x, points[i].y, 1)
    }
}