/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;

require([
    "esri/geometry/Extent",
    "esri/layers/WMSLayerInfo",
    "esri/layers/FeatureLayer",
    'dojo/domReady!'
], function(
    Extent,
    WMSLayerInfo,
    FeatureLayer
) {

    allLayers = [
        {
            "groupHeading": "Hazards",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "Floods" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    'visibleLayers': [0],
                    "options": {
                        "id": "floods",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Wildfires" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    'visibleLayers': [10],
                    "options": {
                        "id": "wildfires",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Wildfire perimeters" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    'visibleLayers': [11],
                    "options": {
                        "id": "wildfirePerimeters",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Severe" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    "visibleLayers": [12],
                    "options": {
                        "id": "severe",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Warnings" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    "visibleLayers": [13],
                    "options": {
                        "id": "warnings",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Watches" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    "visibleLayers": [14],
                    "options": {
                        "id": "watches",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Advisories" : {
                    "url": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                    "visibleLayers": [15],
                    "options": {
                        "id": "advisories",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "Significant River Flood Outlook" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/FOP/MapServer",
                    "visibleLayers": [0],
                    "options": {
                        "id": "sigRiverFloodOutlook",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            'groupHeading': 'CPC Layers',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                "3-7 Day Temperature Outlook" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                    "visibleLayers": [0],
                    "options": {
                        "id": "temp3day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "8-14 Day Temperature Outlook" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                    "visibleLayers": [1],
                    "options": {
                        "id": "temp8day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "3-7 Day Precipitation Outlook" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                    "visibleLayers": [2],
                    "options": {
                        "id": "precip3day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "8-14 Day Precipitation Outlook" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                    "visibleLayers": [3],
                    "options": {
                        "id": "precip8day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "3-7 Day Wildfire and Drought" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                    "visibleLayers": [4],
                    "options": {
                        "id": "wildfire3day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "8-14 Day Wildfire and Drought" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                    "visibleLayers": [5],
                    "options": {
                        "id": "wildfire8day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        }
    ]

});





