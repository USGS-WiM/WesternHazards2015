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
                }
            }
        }
    ]

});





