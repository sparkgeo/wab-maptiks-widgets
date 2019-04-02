define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {

  return declare([BaseWidget], {

    baseClass: 'maptiks-widget',

    postCreate: function() {
      
      this.inherited(arguments);
      var self = this;

      require(["//cdn.maptiks.com/esri3/mapWrapper.js"], function(mapWrapper) {
        var container = self.map.container;
        var maptiksMapOptions = {
          maptiks_trackcode: self.config.maptiksTrackcode,
          maptiks_id: self.config.maptiksId
        };
        mapWrapper(container, maptiksMapOptions, self.map);
      });
    }
  });
});
