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

  Rx.Observable.fromEvent($('input[name=color]', '#color'), 'change')
    .map(_ => $('input[name=color]:checked', '#color').val())
    .map(color => colors[color])
    .subscribe(color => $("#theGame")[0].getContext("2d").fillStyle = color);

  $('input:radio[name=color][value=red]').click();

});
