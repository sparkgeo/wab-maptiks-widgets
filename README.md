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
3. Create a new app or import an existing app.
4. Download MaptiksWidget and copy into the `widgets` folder of the app: {path/to/WAB}/server/apps/{appid}/widgets
5. Register MaptiksWidget as an off-panel widget, in the `widgets` object in: {path/to/WAB}/server/apps/{appid}/config.json

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

6. In Web AppBuilder, configure the app. MaptiksWidget should appear in the available widgets. Configure the widget with the trackcode for your domain, obtained from your [Maptiks](https://maptiks.com/) account, and an ID of your choice, which will appear in your list of tracked maps in your Maptiks account.
7. Save the changes.
8. Deploy your app.
