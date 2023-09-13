var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3 = format_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1225568 101.6342516'
            });
var format_PINCoord312255681016342516Jalan1713_4 = new ol.format.GeoJSON();
var features_PINCoord312255681016342516Jalan1713_4 = format_PINCoord312255681016342516Jalan1713_4.readFeatures(json_PINCoord312255681016342516Jalan1713_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord312255681016342516Jalan1713_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord312255681016342516Jalan1713_4.addFeatures(features_PINCoord312255681016342516Jalan1713_4);
var lyr_PINCoord312255681016342516Jalan1713_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord312255681016342516Jalan1713_4, 
                style: style_PINCoord312255681016342516Jalan1713_4,
                interactive: true,
                title: '<img src="styles/legend/PINCoord312255681016342516Jalan1713_4.png" /> PIN:  Coord: 3.1225568 101.6342516 (Jalan 17/13)'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5 = format_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1705264 101.696063'
            });
var format_PINCoord31705264101696063wayunknow_6 = new ol.format.GeoJSON();
var features_PINCoord31705264101696063wayunknow_6 = format_PINCoord31705264101696063wayunknow_6.readFeatures(json_PINCoord31705264101696063wayunknow_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord31705264101696063wayunknow_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord31705264101696063wayunknow_6.addFeatures(features_PINCoord31705264101696063wayunknow_6);
var lyr_PINCoord31705264101696063wayunknow_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord31705264101696063wayunknow_6, 
                style: style_PINCoord31705264101696063wayunknow_6,
                interactive: true,
                title: '<img src="styles/legend/PINCoord31705264101696063wayunknow_6.png" /> PIN:  Coord: 3.1705264 101.696063 (way unknow)'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7 = format_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1601126 101.6959692'
            });
var format_PINCoord316011261016959692wayunknow_8 = new ol.format.GeoJSON();
var features_PINCoord316011261016959692wayunknow_8 = format_PINCoord316011261016959692wayunknow_8.readFeatures(json_PINCoord316011261016959692wayunknow_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord316011261016959692wayunknow_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord316011261016959692wayunknow_8.addFeatures(features_PINCoord316011261016959692wayunknow_8);
var lyr_PINCoord316011261016959692wayunknow_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord316011261016959692wayunknow_8, 
                style: style_PINCoord316011261016959692wayunknow_8,
                interactive: true,
                title: '<img src="styles/legend/PINCoord316011261016959692wayunknow_8.png" /> PIN:  Coord: 3.1601126 101.6959692 (way unknow)'
            });
var format_ISOCHRONEPolygon6000secondsCoord317191021017216753_9 = new ol.format.GeoJSON();
var features_ISOCHRONEPolygon6000secondsCoord317191021017216753_9 = format_ISOCHRONEPolygon6000secondsCoord317191021017216753_9.readFeatures(json_ISOCHRONEPolygon6000secondsCoord317191021017216753_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEPolygon6000secondsCoord317191021017216753_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEPolygon6000secondsCoord317191021017216753_9.addFeatures(features_ISOCHRONEPolygon6000secondsCoord317191021017216753_9);
var lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEPolygon6000secondsCoord317191021017216753_9, 
                style: style_ISOCHRONEPolygon6000secondsCoord317191021017216753_9,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEPolygon6000secondsCoord317191021017216753_9.png" /> ISOCHRONE(Polygon): 600.0 seconds. Coord: 3.1719102 101.7216753'
            });
var format_PINCoord317191021017216753wayunknow_10 = new ol.format.GeoJSON();
var features_PINCoord317191021017216753wayunknow_10 = format_PINCoord317191021017216753wayunknow_10.readFeatures(json_PINCoord317191021017216753wayunknow_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord317191021017216753wayunknow_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord317191021017216753wayunknow_10.addFeatures(features_PINCoord317191021017216753wayunknow_10);
var lyr_PINCoord317191021017216753wayunknow_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord317191021017216753wayunknow_10, 
                style: style_PINCoord317191021017216753wayunknow_10,
                interactive: true,
                title: '<img src="styles/legend/PINCoord317191021017216753wayunknow_10.png" /> PIN:  Coord: 3.1719102 101.7216753 (way unknow)'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11 = format_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1719131 101.7216782'
            });
var format_PINCoord317191311017216782wayunknow_12 = new ol.format.GeoJSON();
var features_PINCoord317191311017216782wayunknow_12 = format_PINCoord317191311017216782wayunknow_12.readFeatures(json_PINCoord317191311017216782wayunknow_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord317191311017216782wayunknow_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord317191311017216782wayunknow_12.addFeatures(features_PINCoord317191311017216782wayunknow_12);
var lyr_PINCoord317191311017216782wayunknow_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord317191311017216782wayunknow_12, 
                style: style_PINCoord317191311017216782wayunknow_12,
                interactive: true,
                title: '<img src="styles/legend/PINCoord317191311017216782wayunknow_12.png" /> PIN:  Coord: 3.1719131 101.7216782 (way unknow)'
            });
var format_CyclingRoad_Time_13 = new ol.format.GeoJSON();
var features_CyclingRoad_Time_13 = format_CyclingRoad_Time_13.readFeatures(json_CyclingRoad_Time_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CyclingRoad_Time_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CyclingRoad_Time_13.addFeatures(features_CyclingRoad_Time_13);
var lyr_CyclingRoad_Time_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CyclingRoad_Time_13, 
                style: style_CyclingRoad_Time_13,
                interactive: true,
                title: '<img src="styles/legend/CyclingRoad_Time_13.png" /> Cycling Road_Time'
            });
var format_FootWalking_Distance_14 = new ol.format.GeoJSON();
var features_FootWalking_Distance_14 = format_FootWalking_Distance_14.readFeatures(json_FootWalking_Distance_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootWalking_Distance_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootWalking_Distance_14.addFeatures(features_FootWalking_Distance_14);
var lyr_FootWalking_Distance_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootWalking_Distance_14, 
                style: style_FootWalking_Distance_14,
                interactive: true,
                title: '<img src="styles/legend/FootWalking_Distance_14.png" /> Foot Walking_Distance'
            });
var format_FootWalking_Time_15 = new ol.format.GeoJSON();
var features_FootWalking_Time_15 = format_FootWalking_Time_15.readFeatures(json_FootWalking_Time_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootWalking_Time_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootWalking_Time_15.addFeatures(features_FootWalking_Time_15);
var lyr_FootWalking_Time_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootWalking_Time_15, 
                style: style_FootWalking_Time_15,
                interactive: true,
                title: '<img src="styles/legend/FootWalking_Time_15.png" /> Foot Walking_Time'
            });
var format_Pedestrian_Isochrone_16 = new ol.format.GeoJSON();
var features_Pedestrian_Isochrone_16 = format_Pedestrian_Isochrone_16.readFeatures(json_Pedestrian_Isochrone_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Isochrone_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Isochrone_16.addFeatures(features_Pedestrian_Isochrone_16);
var lyr_Pedestrian_Isochrone_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedestrian_Isochrone_16, 
                style: style_Pedestrian_Isochrone_16,
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Isochrone_16.png" /> Pedestrian_Isochrone'
            });
var format_FootWalking_Time_Isochrone_17 = new ol.format.GeoJSON();
var features_FootWalking_Time_Isochrone_17 = format_FootWalking_Time_Isochrone_17.readFeatures(json_FootWalking_Time_Isochrone_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootWalking_Time_Isochrone_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootWalking_Time_Isochrone_17.addFeatures(features_FootWalking_Time_Isochrone_17);
var lyr_FootWalking_Time_Isochrone_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootWalking_Time_Isochrone_17, 
                style: style_FootWalking_Time_Isochrone_17,
                interactive: true,
    title: 'Foot Walking_Time_Isochrone<br />\
    <img src="styles/legend/FootWalking_Time_Isochrone_17_0.png" /> 5 min<br />\
    <img src="styles/legend/FootWalking_Time_Isochrone_17_1.png" /> 10 min<br />'
        });
var format_Monorail_18 = new ol.format.GeoJSON();
var features_Monorail_18 = format_Monorail_18.readFeatures(json_Monorail_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monorail_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monorail_18.addFeatures(features_Monorail_18);
var lyr_Monorail_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monorail_18, 
                style: style_Monorail_18,
                interactive: true,
                title: '<img src="styles/legend/Monorail_18.png" /> Monorail'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.setVisible(true);lyr_PINCoord312255681016342516Jalan1713_4.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.setVisible(true);lyr_PINCoord31705264101696063wayunknow_6.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.setVisible(true);lyr_PINCoord316011261016959692wayunknow_8.setVisible(true);lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_9.setVisible(true);lyr_PINCoord317191021017216753wayunknow_10.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.setVisible(true);lyr_PINCoord317191311017216782wayunknow_12.setVisible(true);lyr_CyclingRoad_Time_13.setVisible(true);lyr_FootWalking_Distance_14.setVisible(true);lyr_FootWalking_Time_15.setVisible(true);lyr_Pedestrian_Isochrone_16.setVisible(true);lyr_FootWalking_Time_Isochrone_17.setVisible(true);lyr_Monorail_18.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleHybrid_1,lyr_OSMStandard_2,lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3,lyr_PINCoord312255681016342516Jalan1713_4,lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5,lyr_PINCoord31705264101696063wayunknow_6,lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7,lyr_PINCoord316011261016959692wayunknow_8,lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_9,lyr_PINCoord317191021017216753wayunknow_10,lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11,lyr_PINCoord317191311017216782wayunknow_12,lyr_CyclingRoad_Time_13,lyr_FootWalking_Distance_14,lyr_FootWalking_Time_15,lyr_Pedestrian_Isochrone_16,lyr_FootWalking_Time_Isochrone_17,lyr_Monorail_18];
lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord312255681016342516Jalan1713_4.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord31705264101696063wayunknow_6.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord316011261016959692wayunknow_8.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_9.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord317191021017216753wayunknow_10.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord317191311017216782wayunknow_12.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_CyclingRoad_Time_13.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_FootWalking_Distance_14.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_FootWalking_Time_15.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Pedestrian_Isochrone_16.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', 'layer': 'layer', 'path': 'path', });
lyr_FootWalking_Time_Isochrone_17.set('fieldAliases', {'Station': 'Station', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Monorail_18.set('fieldAliases', {'Code': 'Code', 'Station': 'Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'Id': 'Id', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord312255681016342516Jalan1713_4.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord31705264101696063wayunknow_6.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord316011261016959692wayunknow_8.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_9.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord317191021017216753wayunknow_10.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord317191311017216782wayunknow_12.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_CyclingRoad_Time_13.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_FootWalking_Distance_14.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_METERS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_FootWalking_Time_15.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Pedestrian_Isochrone_16.set('fieldImages', {'IsolineTyp': 'TextEdit', 'IsolineDis': 'TextEdit', 'IsolineD_1': 'TextEdit', 'IsolineMob': 'TextEdit', 'IsolineSta': 'TextEdit', 'IsolineS_1': 'TextEdit', 'IsolineInp': 'TextEdit', 'IsolineI_1': 'TextEdit', 'IsolineS_2': 'TextEdit', 'Visualizat': 'TextEdit', 'Population': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FootWalking_Time_Isochrone_17.set('fieldImages', {'Station': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Monorail_18.set('fieldImages', {'Code': 'TextEdit', 'Station': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude': 'TextEdit', 'Id': 'TextEdit', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_3.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord312255681016342516Jalan1713_4.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_5.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord31705264101696063wayunknow_6.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_7.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord316011261016959692wayunknow_8.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_9.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord317191021017216753wayunknow_10.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_11.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord317191311017216782wayunknow_12.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_CyclingRoad_Time_13.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_FootWalking_Distance_14.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_METERS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_FootWalking_Time_15.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Pedestrian_Isochrone_16.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_FootWalking_Time_Isochrone_17.set('fieldLabels', {'Station': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Monorail_18.set('fieldLabels', {'Code': 'header label', 'Station': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'Altitude': 'header label', 'Id': 'header label', });
lyr_Monorail_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});