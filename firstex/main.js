
$(document).ready(function () {
  'use strict';
  console.log('main.js loaded');

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool = new Tool();

  tool.onMouseDown = function(event)  {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'red';
  };

  //TODO
  var c = Shape.Circle(200, 200, 50);
  var d = Shape.Rectangle(250, 150, 50, 50);

  c.fillColor = 'green';
  d.fillColor = 'blue';

  for (var x = 25; x<400; x+=50) {
    for (var y = 25; y<400; y+=50) {
      c = Shape.Circle(x,y,20);
      c.fillColor = 'pink';
    }
  }

  var e = Shape.Rectangle(250,250, 50, 50);
  e.fillColor = 'yellow';

  paper.view.draw();

});
