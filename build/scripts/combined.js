function addCommas(e){e+="";for(var i=e.split("."),a=i[0],t=i.length>1?"."+i[1]:"",o=/(\d+)(\d{3})/;o.test(a);)a=a.replace(o,"$1,$2");return a+t}function camelize(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,i){return 0==i?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")}var allLayers;require(["esri/geometry/Extent","esri/layers/WMSLayerInfo","esri/layers/FeatureLayer","dojo/domReady!"],function(e,i,a){allLayers=[{groupHeading:"Selected FEMA NFHL Layers",showGroupHeading:!0,includeInLayerList:!0,layers:{"Flood hazard availability":{url:"http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",visibleLayers:[0],options:{id:"floodHazAvail",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",moreinfoText:"The National Flood Hazard Layer (NFHL) dataset represents the current effective flood data for the country, where maps have been modernized. It is a compilation of effective Flood Insurance Rate Map (FIRM) databases and Letters of Map Change (LOMCs). The NFHL is updated as studies go effective. For more information, visit FEMA's Map Service Center (MSC). Indicates availability of NFHL data by jurisdiction. https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",includeLegend:!0}},"Flood hazard boundaries":{url:"http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",visibleLayers:[27],options:{id:"floodHazBound",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",moreinfoText:"The National Flood Hazard Layer (NFHL) dataset represents the current effective flood data for the country, where maps have been modernized. It is a compilation of effective Flood Insurance Rate Map (FIRM) databases and Letters of Map Change (LOMCs). The NFHL is updated as studies go effective. For more information, visit FEMA's Map Service Center (MSC). Indicates availability of NFHL data by jurisdiction. https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",includeLegend:!0}},"Flood hazard zones":{url:"http://hazards.fema.gov/gis/nfhl/rest/services/public/NFHL/MapServer",visibleLayers:[28],options:{id:"floodHazardZones",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",moreinfoText:"The National Flood Hazard Layer (NFHL) dataset represents the current effective flood data for the country, where maps have been modernized. It is a compilation of effective Flood Insurance Rate Map (FIRM) databases and Letters of Map Change (LOMCs). The NFHL is updated as studies go effective. For more information, visit FEMA's Map Service Center (MSC). Indicates availability of NFHL data by jurisdiction. https://www.arcgis.com/home/item.html?id=cbe088e7c8704464aa0fc34eb99e7f30",includeLegend:!0}}}},{groupHeading:"US Drought Monitor weekly update",showGroupHeading:!0,includeInLayerList:!0,layers:{"October 6, 2015":{url:"http://commons.wim.usgs.gov/arcgis/rest/services/WesternHazards2015/USDroughtMonitor/MapServer",visibleLayers:[0],options:{id:"usDroughtMonitor",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://droughtmonitor.unl.edu/MapsAndData/GISData.aspx",moreinfoText:"National drought mitigation center: The U.S. Drought Monitor is produced through a partnership between the National Drought Mitigation Center at the University of Nebraska-Lincoln, the United States Department of Agriculture, and the National Oceanic and Atmospheric Administration. http://droughtmonitor.unl.edu/MapsAndData/GISData.aspx",includeLegend:!0}}}},{groupHeading:"NOAA Coastal Prediction Center Layers Selected Extended Range Outlook",showGroupHeading:!0,includeInLayerList:!0,layers:{"3-7 Day Temperature Outlook":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[0],options:{id:"temp3day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",moreinfoText:"US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",includeLegend:!0}},"8-14 Day Temperature Outlook":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[1],options:{id:"temp8day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",moreinfoText:"US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",includeLegend:!0}},"6-10 Day Precipitation Outlook":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/610day/610prcp_latest.kml",options:{id:"precip6day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"8-14 Day Precipitation Outlook":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/814day/814prcp_latest.kml",options:{id:"precip8day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"3-7 Day Wildfire and Drought":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[4],options:{id:"wildfire3day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",moreinfoText:"US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",includeLegend:!0}},"8-14 Day Wildfire and Drought":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[5],options:{id:"wildfire8day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",moreinfoText:"US Hazards (temp, precip, wind, drought, etc). http://www.cpcpara.ncep.noaa.gov/  http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",includeLegend:!0}}}},{groupHeading:"Selected Long Lead Outlook for Precipitation",showGroupHeading:!0,includeInLayerList:!0,layers:{Monthly:{url:"http://www.cpc.ncep.noaa.gov/products/predictions/30day/lead14_prcp.kml",options:{id:"monthly",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"1.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead2_prcp.kml",options:{id:"15month",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"2.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead3_prcp.kml",options:{id:"25month",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"3.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead4_prcp.kml",options:{id:"35month",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"4.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead5_prcp.kml",options:{id:"45month",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}},"5.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead6_prcp.kml",options:{id:"55month",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://www.cpcpara.ncep.noaa.gov/",moreinfoText:"NOAA Climate Prediction Center (CPC) Outlook. http://www.cpcpara.ncep.noaa.gov/",includeLegend:!0}}}},{groupHeading:"Situational awareness",showGroupHeading:!0,includeInLayerList:!0,layers:{"NOAA Current Radar":{url:"http://gis.srh.noaa.gov/ArcGIS/rest/services/RIDGERadar/MapServer",options:{id:"noaaRadar",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"NWIS surface water gages":{url:"http://fim.wimcloud.usgs.gov/arcgis/rest/services/FIMTest/nwisSites/MapServer",visibleLayers:[0],options:{id:"nwisSW",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://waterdata.usgs.gov/nwis",moreinfoText:"USGS National Water Information System (NWIS). Surface-water data, such as gage height (stage) and streamflow (discharge), are collected at major rivers, lakes, and reservoirs. Groundwater data, such as water level, are collected at wells and springs. http://waterdata.usgs.gov/nwis",includeLegend:!0}},"AHPS flood flow prediction points":{url:"http://gis.srh.noaa.gov/ArcGIS/rest/services/ahps_gauges/MapServer",visibleLayers:[1],options:{id:"ahpsFloodFlowPredict",opacity:.8,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://water.weather.gov/precip/",moreinfoText:"NOAA NWS Advanced Hydrologic Prediction Service (AHPS) is a web-based suite of accurate and information-rich forecast products. http://water.weather.gov/precip/",includeLegend:!0}},"USGS FIM":{url:"http://fim.wimcloud.usgs.gov/arcgis/rest/services/FIMMapper/sites/MapServer",visibleLayers:[0],options:{id:"usgsFIM",opacity:.8,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,moreinfo:"http://water.usgs.gov/osw/flood_inundation/",moreinfoText:"NOAA and USGS Flood Inundation Mapper (FIM). Reach-scale detailed flood inundation maps that are available for all flood levels. Available for 170 locations around the US in two datasetspoint locations are in FIM mapper and NWS is on http://water.usgs.gov/osw/flood_inundation/",includeLegend:!0}}}},{groupHeading:"IGEMS Hazards Layers",showGroupHeading:!0,includeInLayerList:!0,layers:{Floods:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[0],options:{id:"floods",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},Wildfires:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[10],options:{id:"wildfires",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},"Wildfire perimeters":{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[11],options:{id:"wildfirePerimeters",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},Severe:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[12],options:{id:"severe",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},Warnings:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[13],options:{id:"warnings",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},Watches:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[14],options:{id:"watches",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},Advisories:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[15],options:{id:"advisories",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,moreinfo:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",moreinfoText:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",includeLegend:!0}},"Significant River Flood Outlook":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/FOP/MapServer",visibleLayers:[0],options:{id:"sigRiverFloodOutlook",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}}}}]});var map,allLayers,maxLegendHeight,maxLegendDivHeight,dragInfoWindows=!0,legendLayers=[];require(["esri/arcgis/utils","esri/map","esri/dijit/HomeButton","esri/dijit/Legend","esri/dijit/LocateButton","esri/layers/ArcGISTiledMapServiceLayer","esri/dijit/Geocoder","esri/dijit/PopupTemplate","esri/graphic","esri/geometry/Extent","esri/geometry/Multipoint","esri/SpatialReference","esri/symbols/PictureMarkerSymbol","esri/geometry/webMercatorUtils","esri/urlUtils","dojo/dnd/Moveable","dojo/query","dojo/dom","dojo/dom-class","dojo/on","dojo/domReady!"],function(e,i,a,t,o,s,r,n,l,p,c,d,g,y,m,h,u,v,f,w){function b(){1===v.byId("chkExtent").checked?C.activeGeocoder.searchExtent=map.extent:C.activeGeocoder.searchExtent=null}function L(){b();var e=C.find();e.then(function(e){O(e)}),$("#geosearchModal").modal("hide")}function S(e){I();var i=e.graphic?e.graphic:e.result.feature;i.setSymbol(k)}function O(e){if(e=e.results,e.length>0){I();for(var i=0;i<e.length;i++);var a=new Point(e[0].feature.geometry);map.centerAndZoom(a,17)}}function I(){map.infoWindow.hide(),map.graphics.clear()}function M(e,i,a,t,o){return new g({angle:0,xoffset:i,yoffset:a,type:"esriPMS",url:e,contentType:"image/png",width:t,height:o})}m.addProxyRule({urlPrefix:"www.cpc.ncep.noaa.gov",proxyUrl:"http://107.20.228.18/serviceProxy/proxy.ashx"}),map=i("mapDiv",{basemap:"topo",extent:new p(-18638882.65481101,2641706.3772205533,-7221514.898031538,6403631.161302788,new d({wkid:3857}))});var x=new a({map:map},"homeButton");x.startup();var T=new o({map:map,scale:4514},"locateButton");T.startup(),$(window).resize(function(){$("#legendCollapse").hasClass("in")?(maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("height",maxLegendHeight),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=$("#legendElement").height()-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight)):$("#legendElement").css("height","initial")}),w(map,"load",function(){var e=map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e);var i=y.webMercatorToGeographic(map.extent.getCenter());if($("#latitude").html(i.y.toFixed(3)),$("#longitude").html(i.x.toFixed(3)),1==dragInfoWindows){var a=u(".title",map.infoWindow.domNode)[0],t=new h(map.infoWindow.domNode,{handle:a});w(t,"FirstMove",function(){var e=u(".outerPointer",map.infoWindow.domNode)[0];f.add(e,"hidden");var e=u(".pointer",map.infoWindow.domNode)[0];f.add(e,"hidden")}.bind(this))}}),$(window).resize(function(){$("#legendCollapse").hasClass("in")?(maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("height",maxLegendHeight),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=$("#legendElement").height()-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight)):$("#legendElement").css("height","initial")}),w(map,"zoom-end",function(){var e=map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e)}),w(map,"mouse-move",function(e){if($("#mapCenterLabel").css("display","none"),null!=e.mapPoint){var i=y.webMercatorToGeographic(e.mapPoint);$("#latitude").html(i.y.toFixed(3)),$("#longitude").html(i.x.toFixed(3))}}),w(map,"pan-end",function(){$("#mapCenterLabel").css("display","inline");var e=y.webMercatorToGeographic(map.extent.getCenter());$("#latitude").html(e.y.toFixed(3)),$("#longitude").html(e.x.toFixed(3))});var z=new s("http://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer");w(v.byId("btnStreets"),"click",function(){map.setBasemap("streets"),map.removeLayer(z)}),w(v.byId("btnSatellite"),"click",function(){map.setBasemap("satellite"),map.removeLayer(z)}),w(v.byId("btnHybrid"),"click",function(){map.setBasemap("hybrid"),map.removeLayer(z)}),w(v.byId("btnTerrain"),"click",function(){map.setBasemap("terrain"),map.removeLayer(z)}),w(v.byId("btnGray"),"click",function(){map.setBasemap("gray"),map.removeLayer(z)}),w(v.byId("btnNatGeo"),"click",function(){map.setBasemap("national-geographic"),map.removeLayer(z)}),w(v.byId("btnOSM"),"click",function(){map.setBasemap("osm"),map.removeLayer(z)}),w(v.byId("btnTopo"),"click",function(){map.setBasemap("topo"),map.removeLayer(z)}),w(v.byId("btnNatlMap"),"click",function(){map.addLayer(z)}),w(map,"click",function(e){var i=new l,a=i,t=new esri.InfoTemplate("test popup","attributes appear here");a.setInfoTemplate(t),map.infoWindow.setFeatures([a]),map.infoWindow.show(e.mapPoint),map.infoWindow.show()});var C=new r({value:"",maxLocations:25,autoComplete:!0,arcgisGeocoder:!0,autoNavigate:!1,map:map},"geosearch");C.startup(),C.on("select",S),C.on("findResults",O),C.on("clear",I),w(C.inputNode,"keydown",function(e){13==e.keyCode&&b()});var k=M("../images/purple-pin.png",0,12,13,24);map.on("load",function(){map.infoWindow.set("highlight",!1),map.infoWindow.set("titleInBody",!1)}),w(v.byId("btnGeosearch"),"click",L),$(document).ready(function(){function e(){$("#geosearchModal").modal("show")}$("#geosearchNav").click(function(){e()}),$("#html").niceScroll(),$("#sidebar").niceScroll(),$("#sidebar").scroll(function(){$("#sidebar").getNiceScroll().resize()}),maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=maxLegendHeight-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight),$("#legendCollapse").on("shown.bs.collapse",function(){if(0==legendDiv.innerHTML.length){var e=new t({map:map,layerInfos:legendLayers},"legendDiv");e.startup(),$("#legendDiv").niceScroll()}}),$("#legendCollapse").on("hide.bs.collapse",function(){$("#legendElement").css("height","initial")})}),require(["esri/tasks/locator","esri/tasks/query","esri/tasks/QueryTask","esri/graphicsUtils","esri/geometry/Point","esri/geometry/Extent","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/FeatureLayer","esri/layers/KMLLayer","esri/layers/WMSLayer","esri/layers/WMSLayerInfo","dijit/form/CheckBox","dijit/form/RadioButton","dojo/query","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on"],function(e,i,a,t,o,s,r,n,l,p,c,d,g,y,m,h,u,v,f){function w(e,i,a,t,o,s,r){if(map.addLayer(a),b.push([o,camelize(t),a]),o){if(!$("#"+camelize(o)).length){var n=$('<div id="'+camelize(o+" Root")+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+o+"</button> </div>");n.click(function(e){n.find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$.each(b,function(e,i){var a=map.getLayer(i[2].id);if(i[0]==o)if($("#"+i[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&n.find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",i[1]),map.addLayer(i[2]);var a=map.getLayer(i[2].id);a.setVisibility(!0)}else n.find("i.glyphspan").hasClass("fa-square-o")&&(console.log("removing layer: ",i[1]),map.removeLayer(i[2]))})});var l=$('<div id="'+camelize(o)+'" class="btn-group-vertical" data-toggle="buttons"></div');$("#toggle").append(l)}if(a.visible)var p=$('<div id="'+camelize(t)+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(o)+'" autocomplete="off"><i class="glyphspan fa fa-dot-circle-o '+camelize(o)+'"></i>&nbsp;&nbsp;'+t+"</label> </div>");else var p=$('<div id="'+camelize(t)+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(o)+'" autocomplete="off"><i class="glyphspan fa fa-circle-o '+camelize(o)+'"></i>&nbsp;&nbsp;'+t+"</label> </div>");$("#"+camelize(o)).append(p),p.click(function(e){if($(this).find("i.glyphspan").hasClass("fa-circle-o")){$(this).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o");var i=$(this)[0].id;$.each(b,function(e,a){if(a[0]==o)if(a[1]==i&&$("#"+camelize(o+" Root")).find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",a[1]),map.addLayer(a[2]);var t=map.getLayer(a[2].id);t.setVisibility(!0)}else a[1]==i&&$("#"+camelize(o+" Root")).find("i.glyphspan").hasClass("fa-square-o")?console.log("groud heading not checked"):(console.log("removing layer: ",a[1]),map.removeLayer(a[2]),$("#"+a[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&$("#"+a[1]).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o"))})}})}else{if(a.visible&&void 0!==r.hasOpacitySlider&&1==r.hasOpacitySlider&&void 0!==r.moreinfo&&r.moreinfo)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="'+r.moreinfoText+'" class="glyphspan glyphicon glyphicon-question-sign pull-right"><span id="opacity'+camelize(t)+'" style="padding-left: 5px" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');else if(!a.visible&&void 0!==r.hasOpacitySlider&&1==r.hasOpacitySlider&&void 0!==r.moreinfo&&r.moreinfo)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="'+r.moreinfoText+'" class="glyphspan glyphicon glyphicon-question-sign pull-right"><span id="opacity'+camelize(t)+'" style="padding-left: 5px" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');else if(a.visible&&void 0!==r.hasOpacitySlider&&1==r.hasOpacitySlider)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" style="padding-left: 5px" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');else if(a.visible||void 0===r.hasOpacitySlider||1!=r.hasOpacitySlider)if(a.visible&&void 0!==r.moreinfo&&r.moreinfo)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"><span id="info'+camelize(t)+'" title="'+r.moreinfoText+'" class="glyphspan glyphicon glyphicon-question-sign pull-right"></button></span></div>');else if(!a.visible&&void 0!==r.moreinfo&&r.moreinfo)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="info'+camelize(t)+'" title="'+r.moreinfoText+'" class="glyphspan glyphicon glyphicon-question-sign pull-right"></button></span></div>');else if(a.visible)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+"</button></span></div>");else var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+"</button> </div>");else var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');p.click(function(e){$(this).find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$(this).find("button").button("toggle"),e.preventDefault(),e.stopPropagation(),$("#"+camelize(t)).toggle(),a.visible?a.setVisibility(!1):a.setVisibility(!0)})}if(i){var c=camelize(e);if(!$("#"+c).length){var d=$('<div id="'+c+'"><div class="alert alert-info" role="alert"><strong>'+e+"</strong></div></div>");$("#toggle").append(d)}if(o)$("#"+c).append(n),$("#"+c).append(l);else{if($("#"+c).append(p),void 0!==r.moreinfo&&r.moreinfo){var g="#info"+camelize(t),y=$(g);y.click(function(e){window.open(r.moreinfo,"_blank"),e.preventDefault(),e.stopPropagation()})}$("#opacity"+camelize(t)).length>0&&$("#opacity"+camelize(t)).hover(function(){$(".opacitySlider").remove();var e=map.getLayer(s.id).opacity,i=$('<div class="opacitySlider"><label id="opacityValue">Opacity: '+e+'</label><label class="opacityClose pull-right">X</label><input id="slider" type="range"></div>');$("body").append(i),$("#slider")[0].value=100*e,$(".opacitySlider").css("left",event.clientX-180),$(".opacitySlider").css("top",event.clientY-50),$(".opacitySlider").mouseleave(function(){$(".opacitySlider").remove()}),$(".opacityClose").click(function(){$(".opacitySlider").remove()}),$("#slider").change(function(e){var i=$("#slider")[0].value/100;console.log("o: "+i),$("#opacityValue").html("Opacity: "+i),map.getLayer(s.id).setOpacity(i)})})}}else $("#toggle").append(p)}var b=[];$.each(allLayers,function(e,i){console.log("processing: ",i.groupHeading),$.each(i.layers,function(e,a){var t="";if(a.wimOptions.exclusiveGroupName&&(t=a.wimOptions.exclusiveGroupName),"agisFeature"===a.wimOptions.layerType){var o=new n(a.url,a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:o,title:e}),w(i.groupHeading,i.showGroupHeading,o,e,t,a.options,a.wimOptions)}else if("agisWMS"===a.wimOptions.layerType){var o=new p(a.url,{resourceInfo:a.options.resourceInfo,visibleLayers:a.options.visibleLayers},a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:o,title:e}),w(i.groupHeading,i.showGroupHeading,o,e,t,a.options,a.wimOptions)}else if("agisDynamic"===a.wimOptions.layerType){var o=new r(a.url,a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:o,title:e}),a.visibleLayers&&o.setVisibleLayers(a.visibleLayers),w(i.groupHeading,i.showGroupHeading,o,e,t,a.options,a.wimOptions)}else if("kml"===a.wimOptions.layerType){var o=new l(a.url,a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:o,title:e}),w(i.groupHeading,i.showGroupHeading,o,e,t,a.options,a.wimOptions)}})}),require(["esri/map","esri/layers/KMLLayer","dojo/domReady!"],function(e,i){var a=new i("http://droughtmonitor.unl.edu/data/kmz/usdm_20151006.kmz",{id:"droughttest"});a.setVisibility(!0),map.addLayer(a)})})}),$(document).ready(function(){});