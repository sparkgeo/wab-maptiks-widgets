define([
  'dojo/_base/declare',
  'jimu/BaseWidgetSetting'
],
function(declare, BaseWidgetSetting) {

  return declare([BaseWidgetSetting], {
    baseClass: 'maptiks-widget-setting',

    postCreate: function(){
      //the config object is passed in
      this.setConfig(this.config);
    },

    setConfig: function(config){
      this.maptiksTrackcode.value = config.maptiksTrackcode;
      this.maptiksId.value = config.maptiksId;
    },

    getConfig: function(){
      //WAB will get config object through this method
      return {
        maptiksTrackcode: this.maptiksTrackcode.value,
        maptiksId: this.maptiksId.value
      };
    }
  });
});
