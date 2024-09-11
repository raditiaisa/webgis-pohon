var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTraffic_3 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTrafficRoadmap_4 = new ol.layer.Tile({
            'title': 'Google Traffic Roadmap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt?lyrs=m@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_JalurTrack_5 = new ol.format.GeoJSON();
var features_JalurTrack_5 = format_JalurTrack_5.readFeatures(json_JalurTrack_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurTrack_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurTrack_5.addFeatures(features_JalurTrack_5);
var lyr_JalurTrack_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurTrack_5, 
                style: style_JalurTrack_5,
                popuplayertitle: "Jalur Track",
                interactive: false,
                title: '<img src="styles/legend/JalurTrack_5.png" /> Jalur Track'
            });
var format_LokasiPenyimpananPohon_6 = new ol.format.GeoJSON();
var features_LokasiPenyimpananPohon_6 = format_LokasiPenyimpananPohon_6.readFeatures(json_LokasiPenyimpananPohon_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiPenyimpananPohon_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiPenyimpananPohon_6.addFeatures(features_LokasiPenyimpananPohon_6);
var lyr_LokasiPenyimpananPohon_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiPenyimpananPohon_6, 
                style: style_LokasiPenyimpananPohon_6,
                popuplayertitle: "Lokasi Penyimpanan Pohon",
                interactive: false,
                title: '<img src="styles/legend/LokasiPenyimpananPohon_6.png" /> Lokasi Penyimpanan Pohon'
            });
var format_LokasiKantor_7 = new ol.format.GeoJSON();
var features_LokasiKantor_7 = format_LokasiKantor_7.readFeatures(json_LokasiKantor_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiKantor_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiKantor_7.addFeatures(features_LokasiKantor_7);
var lyr_LokasiKantor_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiKantor_7, 
                style: style_LokasiKantor_7,
                popuplayertitle: "Lokasi Kantor",
                interactive: false,
                title: '<img src="styles/legend/LokasiKantor_7.png" /> Lokasi Kantor'
            });
var format_ASN4BoundaryJan7_8 = new ol.format.GeoJSON();
var features_ASN4BoundaryJan7_8 = format_ASN4BoundaryJan7_8.readFeatures(json_ASN4BoundaryJan7_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN4BoundaryJan7_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN4BoundaryJan7_8.addFeatures(features_ASN4BoundaryJan7_8);
var lyr_ASN4BoundaryJan7_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN4BoundaryJan7_8, 
                style: style_ASN4BoundaryJan7_8,
                popuplayertitle: "ASN 4 Boundary Jan 7",
                interactive: false,
                title: '<img src="styles/legend/ASN4BoundaryJan7_8.png" /> ASN 4 Boundary Jan 7'
            });
var format_ASN4JalanPolygonJan7_9 = new ol.format.GeoJSON();
var features_ASN4JalanPolygonJan7_9 = format_ASN4JalanPolygonJan7_9.readFeatures(json_ASN4JalanPolygonJan7_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN4JalanPolygonJan7_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN4JalanPolygonJan7_9.addFeatures(features_ASN4JalanPolygonJan7_9);
var lyr_ASN4JalanPolygonJan7_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN4JalanPolygonJan7_9,
maxResolution:3.3605359382714357,
 
                style: style_ASN4JalanPolygonJan7_9,
                popuplayertitle: "ASN 4 Jalan Polygon Jan 7",
                interactive: false,
                title: '<img src="styles/legend/ASN4JalanPolygonJan7_9.png" /> ASN 4 Jalan Polygon Jan 7'
            });
var format_ASN4BangunanJan7_10 = new ol.format.GeoJSON();
var features_ASN4BangunanJan7_10 = format_ASN4BangunanJan7_10.readFeatures(json_ASN4BangunanJan7_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN4BangunanJan7_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN4BangunanJan7_10.addFeatures(features_ASN4BangunanJan7_10);
var lyr_ASN4BangunanJan7_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN4BangunanJan7_10,
maxResolution:3.3605359382714357,
 
                style: style_ASN4BangunanJan7_10,
                popuplayertitle: "ASN 4 Bangunan Jan 7",
                interactive: false,
                title: '<img src="styles/legend/ASN4BangunanJan7_10.png" /> ASN 4 Bangunan Jan 7'
            });
var format_ASN4Text_11 = new ol.format.GeoJSON();
var features_ASN4Text_11 = format_ASN4Text_11.readFeatures(json_ASN4Text_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN4Text_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN4Text_11.addFeatures(features_ASN4Text_11);
var lyr_ASN4Text_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN4Text_11,
maxResolution:3.3605359382714357,
 
                style: style_ASN4Text_11,
                popuplayertitle: "ASN 4 Text",
                interactive: false,
                title: '<img src="styles/legend/ASN4Text_11.png" /> ASN 4 Text'
            });
var format_ASN3Boundary_12 = new ol.format.GeoJSON();
var features_ASN3Boundary_12 = format_ASN3Boundary_12.readFeatures(json_ASN3Boundary_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN3Boundary_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN3Boundary_12.addFeatures(features_ASN3Boundary_12);
var lyr_ASN3Boundary_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN3Boundary_12, 
                style: style_ASN3Boundary_12,
                popuplayertitle: "ASN 3 Boundary",
                interactive: false,
                title: '<img src="styles/legend/ASN3Boundary_12.png" /> ASN 3 Boundary'
            });
var format_ASN3JalanPolygon_13 = new ol.format.GeoJSON();
var features_ASN3JalanPolygon_13 = format_ASN3JalanPolygon_13.readFeatures(json_ASN3JalanPolygon_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN3JalanPolygon_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN3JalanPolygon_13.addFeatures(features_ASN3JalanPolygon_13);
var lyr_ASN3JalanPolygon_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN3JalanPolygon_13,
maxResolution:3.3605359382714357,
 
                style: style_ASN3JalanPolygon_13,
                popuplayertitle: "ASN 3 Jalan Polygon",
                interactive: false,
                title: '<img src="styles/legend/ASN3JalanPolygon_13.png" /> ASN 3 Jalan Polygon'
            });
var format_ASN3Bangunan_14 = new ol.format.GeoJSON();
var features_ASN3Bangunan_14 = format_ASN3Bangunan_14.readFeatures(json_ASN3Bangunan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN3Bangunan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN3Bangunan_14.addFeatures(features_ASN3Bangunan_14);
var lyr_ASN3Bangunan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN3Bangunan_14,
maxResolution:3.3605359382714357,
 
                style: style_ASN3Bangunan_14,
                popuplayertitle: "ASN 3 Bangunan",
                interactive: false,
                title: '<img src="styles/legend/ASN3Bangunan_14.png" /> ASN 3 Bangunan'
            });
var format_ASN3Text_15 = new ol.format.GeoJSON();
var features_ASN3Text_15 = format_ASN3Text_15.readFeatures(json_ASN3Text_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN3Text_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN3Text_15.addFeatures(features_ASN3Text_15);
var lyr_ASN3Text_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN3Text_15,
maxResolution:3.3605359382714357,
 
                style: style_ASN3Text_15,
                popuplayertitle: "ASN 3 Text",
                interactive: false,
                title: '<img src="styles/legend/ASN3Text_15.png" /> ASN 3 Text'
            });
var format_ASN2Boundary_16 = new ol.format.GeoJSON();
var features_ASN2Boundary_16 = format_ASN2Boundary_16.readFeatures(json_ASN2Boundary_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN2Boundary_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN2Boundary_16.addFeatures(features_ASN2Boundary_16);
var lyr_ASN2Boundary_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN2Boundary_16, 
                style: style_ASN2Boundary_16,
                popuplayertitle: "ASN 2 Boundary",
                interactive: false,
                title: '<img src="styles/legend/ASN2Boundary_16.png" /> ASN 2 Boundary'
            });
var format_ASN2JalanPolygon_17 = new ol.format.GeoJSON();
var features_ASN2JalanPolygon_17 = format_ASN2JalanPolygon_17.readFeatures(json_ASN2JalanPolygon_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN2JalanPolygon_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN2JalanPolygon_17.addFeatures(features_ASN2JalanPolygon_17);
var lyr_ASN2JalanPolygon_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN2JalanPolygon_17,
maxResolution:3.3605359382714357,
 
                style: style_ASN2JalanPolygon_17,
                popuplayertitle: "ASN 2 Jalan Polygon",
                interactive: false,
                title: '<img src="styles/legend/ASN2JalanPolygon_17.png" /> ASN 2 Jalan Polygon'
            });
var format_ASN2Bangunan_18 = new ol.format.GeoJSON();
var features_ASN2Bangunan_18 = format_ASN2Bangunan_18.readFeatures(json_ASN2Bangunan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN2Bangunan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN2Bangunan_18.addFeatures(features_ASN2Bangunan_18);
var lyr_ASN2Bangunan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN2Bangunan_18,
maxResolution:3.3605359382714357,
 
                style: style_ASN2Bangunan_18,
                popuplayertitle: "ASN 2 Bangunan",
                interactive: false,
                title: '<img src="styles/legend/ASN2Bangunan_18.png" /> ASN 2 Bangunan'
            });
var format_ASN2Text_19 = new ol.format.GeoJSON();
var features_ASN2Text_19 = format_ASN2Text_19.readFeatures(json_ASN2Text_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN2Text_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN2Text_19.addFeatures(features_ASN2Text_19);
var lyr_ASN2Text_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN2Text_19,
maxResolution:3.3605359382714357,
 
                style: style_ASN2Text_19,
                popuplayertitle: "ASN 2 Text",
                interactive: false,
                title: '<img src="styles/legend/ASN2Text_19.png" /> ASN 2 Text'
            });
var format_ASN1WestResidenceBoundary_20 = new ol.format.GeoJSON();
var features_ASN1WestResidenceBoundary_20 = format_ASN1WestResidenceBoundary_20.readFeatures(json_ASN1WestResidenceBoundary_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1WestResidenceBoundary_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1WestResidenceBoundary_20.addFeatures(features_ASN1WestResidenceBoundary_20);
var lyr_ASN1WestResidenceBoundary_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1WestResidenceBoundary_20, 
                style: style_ASN1WestResidenceBoundary_20,
                popuplayertitle: "ASN 1 West Residence Boundary",
                interactive: false,
                title: '<img src="styles/legend/ASN1WestResidenceBoundary_20.png" /> ASN 1 West Residence Boundary'
            });
var format_ASN1WestResidenceJalanPolygon_21 = new ol.format.GeoJSON();
var features_ASN1WestResidenceJalanPolygon_21 = format_ASN1WestResidenceJalanPolygon_21.readFeatures(json_ASN1WestResidenceJalanPolygon_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1WestResidenceJalanPolygon_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1WestResidenceJalanPolygon_21.addFeatures(features_ASN1WestResidenceJalanPolygon_21);
var lyr_ASN1WestResidenceJalanPolygon_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1WestResidenceJalanPolygon_21,
maxResolution:3.3605359382714357,
 
                style: style_ASN1WestResidenceJalanPolygon_21,
                popuplayertitle: "ASN 1 West Residence Jalan Polygon",
                interactive: false,
                title: '<img src="styles/legend/ASN1WestResidenceJalanPolygon_21.png" /> ASN 1 West Residence Jalan Polygon'
            });
var format_ASN1WestResidenceBangunan_22 = new ol.format.GeoJSON();
var features_ASN1WestResidenceBangunan_22 = format_ASN1WestResidenceBangunan_22.readFeatures(json_ASN1WestResidenceBangunan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1WestResidenceBangunan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1WestResidenceBangunan_22.addFeatures(features_ASN1WestResidenceBangunan_22);
var lyr_ASN1WestResidenceBangunan_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1WestResidenceBangunan_22,
maxResolution:3.3605359382714357,
 
                style: style_ASN1WestResidenceBangunan_22,
                popuplayertitle: "ASN 1 West Residence Bangunan",
                interactive: false,
                title: '<img src="styles/legend/ASN1WestResidenceBangunan_22.png" /> ASN 1 West Residence Bangunan'
            });
var format_ASN1WestResidenceBangunanText_23 = new ol.format.GeoJSON();
var features_ASN1WestResidenceBangunanText_23 = format_ASN1WestResidenceBangunanText_23.readFeatures(json_ASN1WestResidenceBangunanText_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1WestResidenceBangunanText_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1WestResidenceBangunanText_23.addFeatures(features_ASN1WestResidenceBangunanText_23);
var lyr_ASN1WestResidenceBangunanText_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1WestResidenceBangunanText_23,
maxResolution:3.3605359382714357,
 
                style: style_ASN1WestResidenceBangunanText_23,
                popuplayertitle: "ASN 1 West Residence Bangunan Text",
                interactive: false,
                title: '<img src="styles/legend/ASN1WestResidenceBangunanText_23.png" /> ASN 1 West Residence Bangunan Text'
            });
var format_ASN1PrecinctCoreBoundary_24 = new ol.format.GeoJSON();
var features_ASN1PrecinctCoreBoundary_24 = format_ASN1PrecinctCoreBoundary_24.readFeatures(json_ASN1PrecinctCoreBoundary_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1PrecinctCoreBoundary_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1PrecinctCoreBoundary_24.addFeatures(features_ASN1PrecinctCoreBoundary_24);
var lyr_ASN1PrecinctCoreBoundary_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1PrecinctCoreBoundary_24, 
                style: style_ASN1PrecinctCoreBoundary_24,
                popuplayertitle: "ASN 1 Precinct Core Boundary",
                interactive: false,
                title: '<img src="styles/legend/ASN1PrecinctCoreBoundary_24.png" /> ASN 1 Precinct Core Boundary'
            });
var format_ASN1PrecinctCoreJalanPolygon_25 = new ol.format.GeoJSON();
var features_ASN1PrecinctCoreJalanPolygon_25 = format_ASN1PrecinctCoreJalanPolygon_25.readFeatures(json_ASN1PrecinctCoreJalanPolygon_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1PrecinctCoreJalanPolygon_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1PrecinctCoreJalanPolygon_25.addFeatures(features_ASN1PrecinctCoreJalanPolygon_25);
var lyr_ASN1PrecinctCoreJalanPolygon_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1PrecinctCoreJalanPolygon_25,
maxResolution:3.3605359382714357,
 
                style: style_ASN1PrecinctCoreJalanPolygon_25,
                popuplayertitle: "ASN 1 Precinct Core Jalan Polygon",
                interactive: false,
                title: '<img src="styles/legend/ASN1PrecinctCoreJalanPolygon_25.png" /> ASN 1 Precinct Core Jalan Polygon'
            });
var format_ASN1PrecinctCoreBangunan_26 = new ol.format.GeoJSON();
var features_ASN1PrecinctCoreBangunan_26 = format_ASN1PrecinctCoreBangunan_26.readFeatures(json_ASN1PrecinctCoreBangunan_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1PrecinctCoreBangunan_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1PrecinctCoreBangunan_26.addFeatures(features_ASN1PrecinctCoreBangunan_26);
var lyr_ASN1PrecinctCoreBangunan_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1PrecinctCoreBangunan_26,
maxResolution:3.3605359382714357,
 
                style: style_ASN1PrecinctCoreBangunan_26,
                popuplayertitle: "ASN 1 Precinct Core Bangunan",
                interactive: false,
                title: '<img src="styles/legend/ASN1PrecinctCoreBangunan_26.png" /> ASN 1 Precinct Core Bangunan'
            });
var format_ASN1PrecinctCoreBangunanText_27 = new ol.format.GeoJSON();
var features_ASN1PrecinctCoreBangunanText_27 = format_ASN1PrecinctCoreBangunanText_27.readFeatures(json_ASN1PrecinctCoreBangunanText_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASN1PrecinctCoreBangunanText_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASN1PrecinctCoreBangunanText_27.addFeatures(features_ASN1PrecinctCoreBangunanText_27);
var lyr_ASN1PrecinctCoreBangunanText_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASN1PrecinctCoreBangunanText_27,
maxResolution:3.3605359382714357,
 
                style: style_ASN1PrecinctCoreBangunanText_27,
                popuplayertitle: "ASN 1 Precinct Core Bangunan Text",
                interactive: false,
                title: '<img src="styles/legend/ASN1PrecinctCoreBangunanText_27.png" /> ASN 1 Precinct Core Bangunan Text'
            });
var format_PaspampresBoundary_28 = new ol.format.GeoJSON();
var features_PaspampresBoundary_28 = format_PaspampresBoundary_28.readFeatures(json_PaspampresBoundary_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaspampresBoundary_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaspampresBoundary_28.addFeatures(features_PaspampresBoundary_28);
var lyr_PaspampresBoundary_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaspampresBoundary_28, 
                style: style_PaspampresBoundary_28,
                popuplayertitle: "Paspampres Boundary",
                interactive: false,
                title: '<img src="styles/legend/PaspampresBoundary_28.png" /> Paspampres Boundary'
            });
var format_PaspampresJalanLine_29 = new ol.format.GeoJSON();
var features_PaspampresJalanLine_29 = format_PaspampresJalanLine_29.readFeatures(json_PaspampresJalanLine_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaspampresJalanLine_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaspampresJalanLine_29.addFeatures(features_PaspampresJalanLine_29);
var lyr_PaspampresJalanLine_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaspampresJalanLine_29,
maxResolution:3.3605359382714357,
 
                style: style_PaspampresJalanLine_29,
                popuplayertitle: "Paspampres Jalan Line",
                interactive: false,
                title: '<img src="styles/legend/PaspampresJalanLine_29.png" /> Paspampres Jalan Line'
            });
var format_PaspampresBangunan_30 = new ol.format.GeoJSON();
var features_PaspampresBangunan_30 = format_PaspampresBangunan_30.readFeatures(json_PaspampresBangunan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaspampresBangunan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaspampresBangunan_30.addFeatures(features_PaspampresBangunan_30);
var lyr_PaspampresBangunan_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaspampresBangunan_30,
maxResolution:3.3605359382714357,
 
                style: style_PaspampresBangunan_30,
                popuplayertitle: "Paspampres Bangunan",
                interactive: false,
                title: '<img src="styles/legend/PaspampresBangunan_30.png" /> Paspampres Bangunan'
            });
var format_PaspampresText_31 = new ol.format.GeoJSON();
var features_PaspampresText_31 = format_PaspampresText_31.readFeatures(json_PaspampresText_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaspampresText_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaspampresText_31.addFeatures(features_PaspampresText_31);
var lyr_PaspampresText_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaspampresText_31,
maxResolution:3.3605359382714357,
 
                style: style_PaspampresText_31,
                popuplayertitle: "Paspampres Text",
                interactive: false,
                title: '<img src="styles/legend/PaspampresText_31.png" /> Paspampres Text'
            });
var format_BINPOLRIBoundary_32 = new ol.format.GeoJSON();
var features_BINPOLRIBoundary_32 = format_BINPOLRIBoundary_32.readFeatures(json_BINPOLRIBoundary_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BINPOLRIBoundary_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BINPOLRIBoundary_32.addFeatures(features_BINPOLRIBoundary_32);
var lyr_BINPOLRIBoundary_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BINPOLRIBoundary_32, 
                style: style_BINPOLRIBoundary_32,
                popuplayertitle: "BIN & POLRI Boundary",
                interactive: false,
                title: '<img src="styles/legend/BINPOLRIBoundary_32.png" /> BIN & POLRI Boundary'
            });
var format_BINPOLRIJalanLine_33 = new ol.format.GeoJSON();
var features_BINPOLRIJalanLine_33 = format_BINPOLRIJalanLine_33.readFeatures(json_BINPOLRIJalanLine_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BINPOLRIJalanLine_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BINPOLRIJalanLine_33.addFeatures(features_BINPOLRIJalanLine_33);
var lyr_BINPOLRIJalanLine_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BINPOLRIJalanLine_33,
maxResolution:3.3605359382714357,
 
                style: style_BINPOLRIJalanLine_33,
                popuplayertitle: "BIN & POLRI Jalan Line",
                interactive: false,
                title: '<img src="styles/legend/BINPOLRIJalanLine_33.png" /> BIN & POLRI Jalan Line'
            });
var format_BINPOLRIBangunan_34 = new ol.format.GeoJSON();
var features_BINPOLRIBangunan_34 = format_BINPOLRIBangunan_34.readFeatures(json_BINPOLRIBangunan_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BINPOLRIBangunan_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BINPOLRIBangunan_34.addFeatures(features_BINPOLRIBangunan_34);
var lyr_BINPOLRIBangunan_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BINPOLRIBangunan_34,
maxResolution:3.3605359382714357,
 
                style: style_BINPOLRIBangunan_34,
                popuplayertitle: "BIN & POLRI Bangunan",
                interactive: false,
                title: '<img src="styles/legend/BINPOLRIBangunan_34.png" /> BIN & POLRI Bangunan'
            });
var format_BINPOLRIText_35 = new ol.format.GeoJSON();
var features_BINPOLRIText_35 = format_BINPOLRIText_35.readFeatures(json_BINPOLRIText_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BINPOLRIText_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BINPOLRIText_35.addFeatures(features_BINPOLRIText_35);
var lyr_BINPOLRIText_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BINPOLRIText_35,
maxResolution:3.3605359382714357,
 
                style: style_BINPOLRIText_35,
                popuplayertitle: "BIN & POLRI Text",
                interactive: false,
                title: '<img src="styles/legend/BINPOLRIText_35.png" /> BIN & POLRI Text'
            });
var format_08260910_36 = new ol.format.GeoJSON();
var features_08260910_36 = format_08260910_36.readFeatures(json_08260910_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08260910_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08260910_36.addFeatures(features_08260910_36);
var lyr_08260910_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08260910_36, 
                style: style_08260910_36,
                popuplayertitle: "0826-0910",
                interactive: true,
    title: '0826-0910<br />\
    <img src="styles/legend/08260910_36_0.png" /> 8/26/2024<br />\
    <img src="styles/legend/08260910_36_1.png" /> 8/27/2024<br />\
    <img src="styles/legend/08260910_36_2.png" /> 8/29/2024<br />\
    <img src="styles/legend/08260910_36_3.png" /> 8/30/2024<br />\
    <img src="styles/legend/08260910_36_4.png" /> 8/31/2024<br />\
    <img src="styles/legend/08260910_36_5.png" /> 9/1/2024<br />\
    <img src="styles/legend/08260910_36_6.png" /> 9/10/2024<br />\
    <img src="styles/legend/08260910_36_7.png" /> 9/2/2024<br />\
    <img src="styles/legend/08260910_36_8.png" /> 9/4/2024<br />\
    <img src="styles/legend/08260910_36_9.png" /> 9/6/2024<br />\
    <img src="styles/legend/08260910_36_10.png" /> 9/7/2024<br />\
    <img src="styles/legend/08260910_36_11.png" /> <br />'
        });
var group_PemasanganPohon = new ol.layer.Group({
                                layers: [lyr_08260910_36,],
                                fold: "open",
                                title: "Pemasangan Pohon"});
var group_BINPOLRI = new ol.layer.Group({
                                layers: [lyr_BINPOLRIBoundary_32,lyr_BINPOLRIJalanLine_33,lyr_BINPOLRIBangunan_34,lyr_BINPOLRIText_35,],
                                fold: "open",
                                title: "BIN & POLRI"});
var group_Paspampres = new ol.layer.Group({
                                layers: [lyr_PaspampresBoundary_28,lyr_PaspampresJalanLine_29,lyr_PaspampresBangunan_30,lyr_PaspampresText_31,],
                                fold: "open",
                                title: "Paspampres"});
var group_ASN1PrecinctCore = new ol.layer.Group({
                                layers: [lyr_ASN1PrecinctCoreBoundary_24,lyr_ASN1PrecinctCoreJalanPolygon_25,lyr_ASN1PrecinctCoreBangunan_26,lyr_ASN1PrecinctCoreBangunanText_27,],
                                fold: "open",
                                title: "ASN 1 Precinct Core"});
var group_ASN1WestResidence = new ol.layer.Group({
                                layers: [lyr_ASN1WestResidenceBoundary_20,lyr_ASN1WestResidenceJalanPolygon_21,lyr_ASN1WestResidenceBangunan_22,lyr_ASN1WestResidenceBangunanText_23,],
                                fold: "open",
                                title: "ASN 1 West Residence"});
var group_ASN2 = new ol.layer.Group({
                                layers: [lyr_ASN2Boundary_16,lyr_ASN2JalanPolygon_17,lyr_ASN2Bangunan_18,lyr_ASN2Text_19,],
                                fold: "open",
                                title: "ASN 2"});
var group_ASN3 = new ol.layer.Group({
                                layers: [lyr_ASN3Boundary_12,lyr_ASN3JalanPolygon_13,lyr_ASN3Bangunan_14,lyr_ASN3Text_15,],
                                fold: "open",
                                title: "ASN 3"});
var group_ASN4 = new ol.layer.Group({
                                layers: [lyr_ASN4BoundaryJan7_8,lyr_ASN4JalanPolygonJan7_9,lyr_ASN4BangunanJan7_10,lyr_ASN4Text_11,],
                                fold: "open",
                                title: "ASN 4"});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_GoogleTraffic_3.setVisible(true);lyr_GoogleTrafficRoadmap_4.setVisible(true);lyr_JalurTrack_5.setVisible(true);lyr_LokasiPenyimpananPohon_6.setVisible(true);lyr_LokasiKantor_7.setVisible(true);lyr_ASN4BoundaryJan7_8.setVisible(true);lyr_ASN4JalanPolygonJan7_9.setVisible(true);lyr_ASN4BangunanJan7_10.setVisible(true);lyr_ASN4Text_11.setVisible(true);lyr_ASN3Boundary_12.setVisible(true);lyr_ASN3JalanPolygon_13.setVisible(true);lyr_ASN3Bangunan_14.setVisible(true);lyr_ASN3Text_15.setVisible(true);lyr_ASN2Boundary_16.setVisible(true);lyr_ASN2JalanPolygon_17.setVisible(true);lyr_ASN2Bangunan_18.setVisible(true);lyr_ASN2Text_19.setVisible(true);lyr_ASN1WestResidenceBoundary_20.setVisible(true);lyr_ASN1WestResidenceJalanPolygon_21.setVisible(true);lyr_ASN1WestResidenceBangunan_22.setVisible(true);lyr_ASN1WestResidenceBangunanText_23.setVisible(true);lyr_ASN1PrecinctCoreBoundary_24.setVisible(true);lyr_ASN1PrecinctCoreJalanPolygon_25.setVisible(true);lyr_ASN1PrecinctCoreBangunan_26.setVisible(true);lyr_ASN1PrecinctCoreBangunanText_27.setVisible(true);lyr_PaspampresBoundary_28.setVisible(true);lyr_PaspampresJalanLine_29.setVisible(true);lyr_PaspampresBangunan_30.setVisible(true);lyr_PaspampresText_31.setVisible(true);lyr_BINPOLRIBoundary_32.setVisible(true);lyr_BINPOLRIJalanLine_33.setVisible(true);lyr_BINPOLRIBangunan_34.setVisible(true);lyr_BINPOLRIText_35.setVisible(true);lyr_08260910_36.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_GoogleTraffic_3,lyr_GoogleTrafficRoadmap_4,lyr_JalurTrack_5,lyr_LokasiPenyimpananPohon_6,lyr_LokasiKantor_7,group_ASN4,group_ASN3,group_ASN2,group_ASN1WestResidence,group_ASN1PrecinctCore,group_Paspampres,group_BINPOLRI,group_PemasanganPohon];
lyr_JalurTrack_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LokasiPenyimpananPohon_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'com_exlyo_': 'com_exlyo_', 'com_exly_1': 'com_exly_1', 'layer': 'layer', 'path': 'path', });
lyr_LokasiKantor_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'com_exlyo_': 'com_exlyo_', 'com_exly_1': 'com_exly_1', 'layer': 'layer', 'path': 'path', });
lyr_ASN4BoundaryJan7_8.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_ASN4JalanPolygonJan7_9.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', });
lyr_ASN4BangunanJan7_10.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', 'Label': 'Label', 'Name': 'Name', });
lyr_ASN4Text_11.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', 'Label': 'Label', 'Name': 'Name', });
lyr_ASN3Boundary_12.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_ASN3JalanPolygon_13.set('fieldAliases', {'id': 'id', });
lyr_ASN3Bangunan_14.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ASN3Text_15.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ASN2Boundary_16.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_ASN2JalanPolygon_17.set('fieldAliases', {'id': 'id', });
lyr_ASN2Bangunan_18.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ASN2Text_19.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ASN1WestResidenceBoundary_20.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_ASN1WestResidenceJalanPolygon_21.set('fieldAliases', {'id': 'id', });
lyr_ASN1WestResidenceBangunan_22.set('fieldAliases', {'FID_ASN_1': 'FID_ASN_1', 'id': 'id', 'name': 'name', });
lyr_ASN1WestResidenceBangunanText_23.set('fieldAliases', {'FID_ASN_1': 'FID_ASN_1', 'id': 'id', 'name': 'name', });
lyr_ASN1PrecinctCoreBoundary_24.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_ASN1PrecinctCoreJalanPolygon_25.set('fieldAliases', {'id': 'id', });
lyr_ASN1PrecinctCoreBangunan_26.set('fieldAliases', {'FID_ASN_1': 'FID_ASN_1', 'id': 'id', 'name': 'name', });
lyr_ASN1PrecinctCoreBangunanText_27.set('fieldAliases', {'FID_ASN_1': 'FID_ASN_1', 'id': 'id', 'name': 'name', });
lyr_PaspampresBoundary_28.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_PaspampresJalanLine_29.set('fieldAliases', {'name': 'name', 'fill-opaci': 'fill-opaci', 'stroke-opa': 'stroke-opa', 'stroke': 'stroke', 'id': 'id', });
lyr_PaspampresBangunan_30.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_PaspampresText_31.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_BINPOLRIBoundary_32.set('fieldAliases', {'id': 'id', 'Nama_Area': 'Nama_Area', });
lyr_BINPOLRIJalanLine_33.set('fieldAliases', {'FID': 'FID', });
lyr_BINPOLRIBangunan_34.set('fieldAliases', {'name': 'name', 'styleUrl': 'styleUrl', 'fill-opaci': 'fill-opaci', 'fill': 'fill', 'stroke-opa': 'stroke-opa', 'stroke': 'stroke', 'stroke-wid': 'stroke-wid', });
lyr_BINPOLRIText_35.set('fieldAliases', {'name': 'name', 'styleUrl': 'styleUrl', 'fill-opaci': 'fill-opaci', 'fill': 'fill', 'stroke-opa': 'stroke-opa', 'stroke': 'stroke', 'stroke-wid': 'stroke-wid', });
lyr_08260910_36.set('fieldAliases', {'No.': 'No.', 'Date': 'Date', 'Tagger': 'Tagger', 'Kode Pohon': 'Kode Pohon', 'Jenis Pohon': 'Jenis Pohon', 'Location': 'Location', 'Nama Pohon': 'Nama Pohon', 'No._1': 'No._1', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', });
lyr_JalurTrack_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LokasiPenyimpananPohon_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'com_exlyo_': 'TextEdit', 'com_exly_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LokasiKantor_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'com_exlyo_': 'TextEdit', 'com_exly_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ASN4BoundaryJan7_8.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_ASN4JalanPolygonJan7_9.set('fieldImages', {'id': 'TextEdit', 'Jenis': '', });
lyr_ASN4BangunanJan7_10.set('fieldImages', {'id': 'Range', 'Jenis': 'TextEdit', 'Label': 'TextEdit', 'Name': 'TextEdit', });
lyr_ASN4Text_11.set('fieldImages', {'id': 'Range', 'Jenis': 'TextEdit', 'Label': 'TextEdit', 'Name': 'TextEdit', });
lyr_ASN3Boundary_12.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_ASN3JalanPolygon_13.set('fieldImages', {'id': 'TextEdit', });
lyr_ASN3Bangunan_14.set('fieldImages', {'id': 'Range', 'name': '', });
lyr_ASN3Text_15.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', });
lyr_ASN2Boundary_16.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_ASN2JalanPolygon_17.set('fieldImages', {'id': 'TextEdit', });
lyr_ASN2Bangunan_18.set('fieldImages', {'id': 'Range', 'name': '', });
lyr_ASN2Text_19.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', });
lyr_ASN1WestResidenceBoundary_20.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_ASN1WestResidenceJalanPolygon_21.set('fieldImages', {'id': 'TextEdit', });
lyr_ASN1WestResidenceBangunan_22.set('fieldImages', {'FID_ASN_1': '', 'id': 'Range', 'name': '', });
lyr_ASN1WestResidenceBangunanText_23.set('fieldImages', {'FID_ASN_1': '', 'id': 'Range', 'name': 'TextEdit', });
lyr_ASN1PrecinctCoreBoundary_24.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_ASN1PrecinctCoreJalanPolygon_25.set('fieldImages', {'id': 'TextEdit', });
lyr_ASN1PrecinctCoreBangunan_26.set('fieldImages', {'FID_ASN_1': '', 'id': 'Range', 'name': '', });
lyr_ASN1PrecinctCoreBangunanText_27.set('fieldImages', {'FID_ASN_1': '', 'id': 'Range', 'name': 'TextEdit', });
lyr_PaspampresBoundary_28.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_PaspampresJalanLine_29.set('fieldImages', {'name': 'TextEdit', 'fill-opaci': 'TextEdit', 'stroke-opa': 'TextEdit', 'stroke': 'TextEdit', 'id': 'TextEdit', });
lyr_PaspampresBangunan_30.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', });
lyr_PaspampresText_31.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', });
lyr_BINPOLRIBoundary_32.set('fieldImages', {'id': 'TextEdit', 'Nama_Area': 'TextEdit', });
lyr_BINPOLRIJalanLine_33.set('fieldImages', {'FID': '', });
lyr_BINPOLRIBangunan_34.set('fieldImages', {'name': '', 'styleUrl': '', 'fill-opaci': '', 'fill': '', 'stroke-opa': '', 'stroke': '', 'stroke-wid': '', });
lyr_BINPOLRIText_35.set('fieldImages', {'name': 'TextEdit', 'styleUrl': 'TextEdit', 'fill-opaci': 'TextEdit', 'fill': 'TextEdit', 'stroke-opa': 'TextEdit', 'stroke': 'TextEdit', 'stroke-wid': 'TextEdit', });
lyr_08260910_36.set('fieldImages', {'No.': 'Range', 'Date': 'TextEdit', 'Tagger': 'TextEdit', 'Kode Pohon': 'TextEdit', 'Jenis Pohon': 'TextEdit', 'Location': 'TextEdit', 'Nama Pohon': 'TextEdit', 'No._1': 'Range', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', });
lyr_JalurTrack_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LokasiPenyimpananPohon_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'com_exlyo_': 'no label', 'com_exly_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_LokasiKantor_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'com_exlyo_': 'no label', 'com_exly_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ASN4BoundaryJan7_8.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_ASN4JalanPolygonJan7_9.set('fieldLabels', {'id': 'no label', 'Jenis': 'no label', });
lyr_ASN4BangunanJan7_10.set('fieldLabels', {'id': 'no label', 'Jenis': 'no label', 'Label': 'no label', 'Name': 'no label', });
lyr_ASN4Text_11.set('fieldLabels', {'id': 'no label', 'Jenis': 'no label', 'Label': 'no label', 'Name': 'no label', });
lyr_ASN3Boundary_12.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_ASN3JalanPolygon_13.set('fieldLabels', {'id': 'no label', });
lyr_ASN3Bangunan_14.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ASN3Text_15.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ASN2Boundary_16.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_ASN2JalanPolygon_17.set('fieldLabels', {'id': 'no label', });
lyr_ASN2Bangunan_18.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ASN2Text_19.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ASN1WestResidenceBoundary_20.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_ASN1WestResidenceJalanPolygon_21.set('fieldLabels', {'id': 'no label', });
lyr_ASN1WestResidenceBangunan_22.set('fieldLabels', {'FID_ASN_1': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_ASN1WestResidenceBangunanText_23.set('fieldLabels', {'FID_ASN_1': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_ASN1PrecinctCoreBoundary_24.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_ASN1PrecinctCoreJalanPolygon_25.set('fieldLabels', {'id': 'no label', });
lyr_ASN1PrecinctCoreBangunan_26.set('fieldLabels', {'FID_ASN_1': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_ASN1PrecinctCoreBangunanText_27.set('fieldLabels', {'FID_ASN_1': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_PaspampresBoundary_28.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_PaspampresJalanLine_29.set('fieldLabels', {'name': 'no label', 'fill-opaci': 'no label', 'stroke-opa': 'no label', 'stroke': 'no label', 'id': 'no label', });
lyr_PaspampresBangunan_30.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_PaspampresText_31.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_BINPOLRIBoundary_32.set('fieldLabels', {'id': 'no label', 'Nama_Area': 'no label', });
lyr_BINPOLRIJalanLine_33.set('fieldLabels', {'FID': 'no label', });
lyr_BINPOLRIBangunan_34.set('fieldLabels', {'name': 'no label', 'styleUrl': 'no label', 'fill-opaci': 'no label', 'fill': 'no label', 'stroke-opa': 'no label', 'stroke': 'no label', 'stroke-wid': 'no label', });
lyr_BINPOLRIText_35.set('fieldLabels', {'name': 'no label', 'styleUrl': 'no label', 'fill-opaci': 'no label', 'fill': 'no label', 'stroke-opa': 'no label', 'stroke': 'no label', 'stroke-wid': 'no label', });
lyr_08260910_36.set('fieldLabels', {'No.': 'no label', 'Date': 'no label', 'Tagger': 'no label', 'Kode Pohon': 'inline label - visible with data', 'Jenis Pohon': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Nama Pohon': 'inline label - visible with data', 'No._1': 'no label', 'Time': 'no label', 'Lon': 'inline label - visible with data', 'Lat': 'inline label - visible with data', });
lyr_08260910_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});