// relMouseCoords from http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
function relMouseCoords(event) {
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;

  do {
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  }
  while (currentElement = currentElement.offsetParent)

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;

  return {
    x: canvasX,
    y: canvasY
  }
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

function calcRect(event, pixSize) {
  coord = this.relMouseCoords(event);

  function calcPix(x) {
    x = x - 5;
    return x - x % pixSize
  };
  return {
    x: calcPix(coord.x),
    y: calcPix(coord.y)
  }
}
HTMLCanvasElement.prototype.calcRect = calcRect;

function placeRect(event, pixSize) {
  coords = this.calcRect(event, pixSize);
  this.getContext("2d")
    .fillRect(coords.x, coords.y, pixSize, pixSize);
}
HTMLCanvasElement.prototype.placeRect = placeRect;
