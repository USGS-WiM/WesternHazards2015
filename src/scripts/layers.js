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
            'groupHeading': 'Selected FEMA NFHL Layers',
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
                        "moreinfo": "https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",
                        "moreinfoText": "The National Flood Hazard Layer (NFHL) dataset represents the current effective flood data for the country, where maps have been modernized. It is a compilation of effective Flood Insurance Rate Map (FIRM) databases and Letters of Map Change (LOMCs). The NFHL is updated as studies go effective. For more information, visit FEMA's Map Service Center (MSC). Indicates availability of NFHL data by jurisdiction. https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",
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
                        "moreinfo": "https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",
                        "moreinfoText": "The National Flood Hazard Layer (NFHL) dataset represents the current effective flood data for the country, where maps have been modernized. It is a compilation of effective Flood Insurance Rate Map (FIRM) databases and Letters of Map Change (LOMCs). The NFHL is updated as studies go effective. For more information, visit FEMA's Map Service Center (MSC). Indicates availability of NFHL data by jurisdiction. https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",
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
                        "moreinfo": "https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",
                        "moreinfoText": "The National Flood Hazard Layer (NFHL) dataset represents the current effective flood data for the country, where maps have been modernized. It is a compilation of effective Flood Insurance Rate Map (FIRM) databases and Letters of Map Change (LOMCs). The NFHL is updated as studies go effective. For more information, visit FEMA's Map Service Center (MSC). Indicates availability of NFHL data by jurisdiction. https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            'groupHeading': 'US Drought Monitor weekly update',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                "October 6, 2015" : {
                    "url": "http://commons.wim.usgs.gov/arcgis/rest/services/WesternHazards2015/USDroughtMonitor/MapServer",
                    'visibleLayers': [0],
                    "options": {
                        "id": "usDroughtMonitor",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://droughtmonitor.unl.edu/MapsAndData/GISData.aspx",
                        "moreinfoText": "National drought mitigation center: The U.S. Drought Monitor is produced through a partnership between the National Drought Mitigation Center at the University of Nebraska-Lincoln, the United States Department of Agriculture, and the National Oceanic and Atmospheric Administration. http://droughtmonitor.unl.edu/MapsAndData/GISData.aspx",
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            'groupHeading': 'NOAA Coastal Prediction Center Layers Selected Extended Range Outlook',
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
                        "moreinfo": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                        "moreinfoText": "US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
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
                        "moreinfo": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                        "moreinfoText": "US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
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
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
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
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
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
                        "moreinfo": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                        "moreinfoText": "US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
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
                        "moreinfo": "http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                        "moreinfoText": "US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            'groupHeading': 'Selected Long Lead Outlook for Precipitation',
            'showGroupHeading': true,
            'includeInLayerList': true,
            'layers': {
                "Monthly" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/30day/lead14_prcp.kml",
                    "options": {
                        "id": "monthly",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
                        "includeLegend" : true
                    }
                },
                "1.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead2_prcp.kml",
                    "options": {
                        "id": "15month",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
                        "includeLegend" : true
                    }
                },
                "2.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead3_prcp.kml",
                    "options": {
                        "id": "25month",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
                        "includeLegend" : true
                    }
                },
                "3.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead4_prcp.kml",
                    "options": {
                        "id": "35month",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
                        "includeLegend" : true
                    }
                },
                "4.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead5_prcp.kml",
                    "options": {
                        "id": "45month",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
                        "includeLegend" : true
                    }
                },
                "5.5 month" : {
                    "url": "http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead6_prcp.kml",
                    "options": {
                        "id": "55month",
                        "opacity": 0.75,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "kml",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://www.cpcpara.ncep.noaa.gov/",
                        "moreinfoText": "NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",
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
                "NOAA Current Radar" : {
                    "url": "http://gis.srh.noaa.gov/ArcGIS/rest/services/RIDGERadar/MapServer",
                    "options": {
                        "id": "noaaRadar",
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
                        "moreinfo": "http://waterdata.usgs.gov/nwis",
                        "moreinfoText": "USGS National Water Information System (NWIS). Surface-water data, such as gage height (stage) and streamflow (discharge), are collected at major rivers, lakes, and reservoirs. Groundwater data, such as water level, are collected at wells and springs. http://waterdata.usgs.gov/nwis",
                        "includeLegend" : true
                    }
                },
                "AHPS flood flow prediction points" : {
                    "url": "http://gis.srh.noaa.gov/ArcGIS/rest/services/ahps_gauges/MapServer",
                    "visibleLayers": [1],
                    "options": {
                        "id": "ahpsFloodFlowPredict",
                        "opacity": 0.80,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://water.weather.gov/precip/",
                        "moreinfoText": "NOAA NWS Advanced Hydrologic Prediction Service (AHPS) is a web-based suite of accurate and information-rich forecast products. http://water.weather.gov/precip/",
                        "includeLegend" : true
                    }
                },
                "USGS FIM" : {
                    "url": "http://fim.wimcloud.usgs.gov/arcgis/rest/services/FIMMapper/sites/MapServer",
                    "visibleLayers": [0],
                    "options": {
                        "id": "usgsFIM",
                        "opacity": 0.80,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "moreinfo": "http://water.usgs.gov/osw/flood_inundation/",
                        "moreinfoText": "NOAA and USGS Flood Inundation Mapper (FIM). Reach-scale detailed flood inundation maps that are available for all flood levels. Available for 170 locations around the US in two datasetspoint locations are in FIM mapper and NWS is on http://water.usgs.gov/osw/flood_inundation/",
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            "groupHeading": "IGEMS Hazards Layers",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
                        "moreinfo": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
                        "moreinfoText": "http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",
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
    ]

});





