# Maptiks WAB Widgets
Web AppBuilder for ArcGIS (WAB) widgets enabling Maptiks map analytics on maps authored in ArcGIS Online and embedded in WAB apps.

## Help content
* [WAB Resources](#wab-resources)
* [MaptiksWidget](#maptikswidget)

## WAB Resources
* [Web AppBuilder for ArcGIS](http://doc.arcgis.com/en/web-appbuilder/)
* [Web AppBuilder for ArcGIS (Developer Edition)](https://developers.arcgis.com/web-appbuilder/)

## MaptiksWidget
A Web Appbuilder for ArcGIS widget that enables Maptiks analytics on map.

### Instructions
1. Sign up for a [Maptiks](https://maptiks.com/) account.
2. Download, install, and start [Web AppBuilder for ArcGIS (Developer Edition)](https://developers.arcgis.com/web-appbuilder/)
3. Create a [new app or import an existing app](https://developers.arcgis.com/web-appbuilder/guide/create-import-app.htm).
4. Download MaptiksWidget and copy into the `widgets` folder in either:
  * the WAB: `{path/to/WAB}/client/stemapp/widgets`
  * an individual app: `{path/to/WAB}/server/apps/{appid}/widgets`
5. Register MaptiksWidget as an off-panel widget in the `widgets` object in either:
  * the WAB: `{path/to/WAB}/client/stemapp/predefined-apps/default/config.json`
  * an individual app: `{path/to/WAB}/server/apps/{appid}/config.json`

    Note that widgets are associated with the *theme* in the config file - the default theme if added to the WAB file, or the current theme if added to the app file. If you change the theme of the app after updating the config file, it will be overwritten, and this modification will be lost.


```
"widgetsOnScreen": {
  "widgets": [
    ...
    {
      "uri": "widgets/MaptiksWidget/Widget"
    },
    ...
  ]
  ...
}
```

6. Obtain a trackcode for your domain from your [Maptiks](https://maptiks.com/) account, and choose an ID that will appear in the list of tracked maps in your Maptiks account.
7. In WAB, configure the app. Depending on which app template you use, the widget may or may not appear in the configuration UI.
  * If you use the `Default (2D)` template, the MaptiksWidget should appear in the available widgets. Configure the widget with the Maptiks trackcode and ID.
  * Templates such as `Infographic`, `Ground Zero`, `Editor`, and `Maplet` do not show available custom widgets in the UI. To enable Maptiks on these templates, enter the Maptiks trackcode and ID in the widget config file: `{path/to/WAB}/server/apps/{appid}/widgets/MaptiksWidget/config.json`:
  
```
{
  "maptiksTrackcode": "{your Maptiks trackcode}",
  "maptiksId": "{ID of your choice}"
}
```
  
8. Save the changes.
9. Deploy your app.

![gif](gif/maptiks_demo.gif)
