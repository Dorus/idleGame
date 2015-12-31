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

  var colors = {
    'red': "rgba(" + 255 + "," + 0 + "," + 0 + "," + 1 + ")",
    'blue': "rgba(" + 0 + "," + 160 + "," + 200 + "," + 1 + ")",
    'green': "rgba(" + 0 + "," + 255 + "," + 0 + "," + 1 + ")"
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
