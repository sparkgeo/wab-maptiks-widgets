define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'maptiks-widget',
    // this property is set by the framework when widget is loaded.
    // name: 'MaptiksWidget',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      
      this.inherited(arguments);

      require(["//cdn.maptiks.com/esri3/mapWrapper.js"], (mapWrapper) => {
        var container = this.map.container;
        var maptiksMapOptions = {
          maptiks_trackcode: this.config.maptiksTrackcode,
          maptiks_id: this.config.maptiksId
        };
        mapWrapper(container, maptiksMapOptions, this.map);
      });
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('MaptiksWidget::startup');
    // },

    // onOpen: function(){
    //   console.log('MaptiksWidget::onOpen');
    // },

    // onClose: function(){
    //   console.log('MaptiksWidget::onClose');
    // },

    // onMinimize: function(){
    //   console.log('MaptiksWidget::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('MaptiksWidget::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('MaptiksWidget::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('MaptiksWidget::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('MaptiksWidget::onPositionChange');
    // },

    // resize: function(){
    //   console.log('MaptiksWidget::resize');
    // }

    //methods to communication between widgets:

  });

});
