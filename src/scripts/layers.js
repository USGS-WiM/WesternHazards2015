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
            'groupHeading': 'NFHL Layers',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                "Flood hazard availability" : {
                    "url": "http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",
                    "visibleLayers": [0],
                    "options": {
                        "id": "floodHazAvail",
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
                "Flood hazard boundaries" : {
                    "url": "http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",
                    "visibleLayers": [27],
                    "options": {
                        "id": "floodHazBound",
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
                "Flood hazard zones" : {
                    "url": "http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",
                    "visibleLayers": [28],
                    "options": {
                        "id": "floodHazardZones",
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
                "6-10 Day Precipitation Outlook" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/610day/610prcp_latest.kml",
                    "options": {
                        "id": "precip6day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "8-14 Day Precipitation Outlook" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/814day/814prcp_latest.kml",
                    "options": {
                        "id": "precip8day",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
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
        },
        {
            'groupHeading': 'Long Lead Outlook Precipitation',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                "Monthly" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/30day/lead14_prcp.kml"+new Date().getTime(),
                    "visibleLayers": [0],
                    "options": {
                        "id": "monthly",
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
                },
                "1.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead2_prcp.kml",
                    "visibleLayers": [1],
                    "options": {
                        "id": "15month",
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
                },
                "2.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead3_prcp.kml",
                    "options": {
                        "id": "25month",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "3.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead4_prcp.kml",
                    "options": {
                        "id": "35month",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                },
                "4.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead5_prcp.kml",
                    "visibleLayers": [4],
                    "options": {
                        "id": "45month",
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
                },
                "5.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead6_prcp.kml",
                    "visibleLayers": [5],
                    "options": {
                        "id": "55month",
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
            'groupHeading': 'Situational awareness',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                "NWIS surface water gages" : {
                    "url": "http://fim.wimcloud.usgs.gov/arcgis/rest/services/FIMTest/nwisSites/MapServer",
                    "visibleLayers": [0],
                    "options": {
                        "id": "nwisSW",
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





