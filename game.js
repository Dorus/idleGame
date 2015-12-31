$(window).load(function() {
  Rx.Observable.fromEvent($("#theFlight"), 'click')
    .subscribe(function(result) {
      alert('blaat');
    });

  Rx.Observable.fromEvent($("#theCity"), 'click')
    .subscribe(function(result) {
      alert('ee');
    });

  Rx.Observable.fromEvent($("#theGame")[0], 'click')
    .subscribe(function(e) {
      var canvas = $("#theGame")[0];
      canvas.placeRect(e, 4);
    });

  function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")"
  }

  var colors = {
    'red': rgb(255, 0, 0),
    'blue': rgb(0, 160, 200),
    'green': rgb(0, 255, 0)
  };

  $('input[name=color]', '#color').on('change', function() {
    var ctx = $("#theGame")[0].getContext("2d");
    switch ($('input[name=color]:checked', '#color').val()) {
      case "red":
        ctx.fillStyle = colors.red;
        break;
      case "blue":
        ctx.fillStyle = color.blue;
        break;
      case "green":
        ctx.fillStyle = colors.green;
        break;
    }
  });

  $('input:radio[name=color][value=red]').click();

});
