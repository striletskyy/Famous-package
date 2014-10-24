Builder = (function() {
  function Builder() {
    this.Engine = famous.core.Engine;
    this.Surface = famous.core.Surface;
    this.HeaderFooterLayout = famous.views.HeaderFooterLayout;
    this.GridLayout = famous.views.GridLayout;
    this.layout = null;
    this.mainContext = null;
  };
  Builder.prototype = {
    build: function() {
      this.mainContext = this.Engine.createContext();
      this._createLayout();
      this._addHeader();
      this._addContent();
      this._addFooter();
    },
    _createLayout: function() {
      this.layout = new this.HeaderFooterLayout({
        headerSize: 100,
        footerSize: 50
      });

      this.mainContext.add(this.layout);
    },
    _addHeader: function(content) {
      this.layout.header.add(new this.Surface({
        content: content || "Hot pushes test",
        properties: {
          backgroundColor: 'gray',
          lineHeight: "100px",
          textAlign: "center"
        }
      }));
    },
    _addContent: function() {
      this.layout.content.add(this._createGrid('content', [7, 1]));
    },
    _addFooter: function() {
      this.layout.footer.add(this._createGrid( 'footer', [3, 1] ));
    },
    _createGrid: function(section, dimensions) {
      var grid = new this.GridLayout({
        dimensions: dimensions
      });
      var surfaces = [];
      grid.sequenceFrom(surfaces);
      Grid.create(surfaces, section, dimensions[0], this.Surface);

      return grid;
    }
  };

  return Builder;
})();
