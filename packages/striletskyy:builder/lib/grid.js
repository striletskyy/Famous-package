Grid = (function() {
  function Grid() {

  };
  Grid.create = function(surfaces, section, cols, Surface) {
    for(var i = 0; i < cols; i++) {
      var prop = {
        content: section + ' ' + (i + 1),
        size: [undefined, undefined],
        properties: {
          backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
          color: "#404040",
          textAlign: 'center'
        }
      };
      surfaces.push(new Surface(prop));
    }
  };
  return Grid;
})();