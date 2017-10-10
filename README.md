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

### Instructions (using Web AppBuilder for ArcGIS (Developer Edition))
1. Sign up for a [Maptiks](https://maptiks.com/) account.
2. Download, install, and start [Web AppBuilder for ArcGIS (Developer Edition)](https://developers.arcgis.com/web-appbuilder/)
3. Create a [new app or import an existing app](https://developers.arcgis.com/web-appbuilder/guide/create-import-app.htm).
4. Download MaptiksWidget and copy into the `widgets` folder in either:
  * the WAB: `{path/to/WAB}/client/stemapp/widgets`
  * an individual app: `{path/to/WAB}/server/apps/{appid}/widgets`
  
    Note that the widgets folder automatically re-populates each time the [theme](https://developers.arcgis.com/web-appbuilder/guide/themes-tab.htm) of the app is changed. If you change the theme of the app after updating the widgets folder, it will be overwritten, and this modification will be lost.
  
5. Register MaptiksWidget as an off-panel widget in the `widgets` object in either:
  * the WAB: `{path/to/WAB}/client/stemapp/predefined-apps/default/config.json`
  * an individual app: `{path/to/WAB}/server/apps/{appid}/config.json`

    Note that widgets are associated with the [theme](https://developers.arcgis.com/web-appbuilder/guide/themes-tab.htm) in the config file - the default theme if added to the WAB file, or the current theme if added to the app file. If you change the theme of the app after updating the config file, it will be overwritten, and this modification will be lost.


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
7. In WAB, configure the app. Depending on which app template/theme you use, the widget may or may not appear in the configuration UI.
  * If you use the `Default (2D)` template, the MaptiksWidget should appear in the available widgets. Configure the widget with the Maptiks trackcode and ID.
  * Templates such as `Infographic`, `Ground Zero`, `Editor`, and `Maplet`, as well as various [themes](https://developers.arcgis.com/web-appbuilder/guide/themes-tab.htm), do not show available custom widgets in the UI. To enable Maptiks on these templates, enter the Maptiks trackcode and ID in the widget config file: `{path/to/WAB}/server/apps/{appid}/widgets/MaptiksWidget/config.json`:
  
```
{
  "maptiksTrackcode": "your Maptiks trackcode",
  "maptiksId": "ID of your choice"
}
```
  
8. Save the changes.
9. Deploy your app.

![gif](gif/maptiks_demo.gif)

### Instructions (using Web AppBuilder for ArcGIS (ArcGIS Online WAB))
1. Sign up for a [Maptiks](https://maptiks.com/) account.
2. Create an app in the ArcGIS Online version of WAB.
3. Once complete, download the app as a zip folder from the app item page. Unzip the app.
4. Download MaptiksWidget and copy into the app's `widgets` folder.
5. Obtain a trackcode for your domain from your [Maptiks](https://maptiks.com/) account, and choose an ID that will appear in the list of tracked maps in your Maptiks account.
6. Open the app's `config.json` file in a text editor. There is a section in the file that lists the app's widgets. The list starts with `"widgetOnScreen":{"widgets":[`. We need to include the following information in that list (make sure to substitute your trackcode and ID). It should look like this:

```
"widgetOnScreen":{"widgets":[{
    "uri": "widgets/MaptiksWidget/Widget",
    "id": "widgets_MaptiksWidget_Widget",
    "IsController": false,
    "openAtStart": true,
    "name": "MaptiksWidget",
    "version": "0.0.1",
    "config": {
      "maptiksTrackcode": "your Maptiks trackcode",
      "maptiksId": "ID of your choice"
    },
    "position": {
      "relativeTo": "map"
    }
  },
      
  ... the rest of the widgets
```

7. Save the changes.
8. Deploy your app.
