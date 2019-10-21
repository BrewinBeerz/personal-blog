import React, {
    Component
} from "react";
import $ from 'jquery'; 
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import {fromLonLat} from 'ol/proj';
import Stamen from 'ol/source/Stamen';
import OlOverlay from 'ol/Overlay'
import OlControl from 'ol/control'
import OlPixel from 'ol/pixel'
import * as OlInteraction from 'ol/interaction'
import OlFeature from 'ol/Feature'
import OlGeomPoint from 'ol/geom/Point'
import OlSourceVector from 'ol/source/Vector'
import OlLayerVector from 'ol/layer/Vector'  
import {Icon, Style} from 'ol/style';

class PublicMap extends Component {
    constructor(props) {
        super(props);

        var newyork = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-74.0060,40.7128])
            ),
        });

        var buffalo = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-78.8784,42.8864])
            ),
        });

        var tampa = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-82.4572,27.9506])
            ),
        });

        var miami = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-80.1918,25.7617])
            ),
        });

        var keywest = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-81.7800,24.5551])
            ),
        });

        var orlando = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-81.3792,28.5383])
            ),
        });

        var atlanta = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-84.3880,33.7490])
            ),
        });

        var washdc = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-77.0369,38.9072])
            ),
        });

        var nashville = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-86.7816,36.1627])
            ),
        });

        var cleveland = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-81.6944,41.4993])
            ),
        });

        var pittsburgh = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-79.9959,40.4406])
            ),
        });

        var boston = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-71.0589,42.3601])
            ),
        });

        var richmond = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-77.4360,37.5407])
            ),
        });

        var stlouis = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-90.1994,38.6270])
            ),
        });

        var louisville = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-85.7585,38.2527])
            ),
        });

        var lexington = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-84.5037,38.0406])
            ),
        });

        var neworleans = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-90.0715,29.9511])
            ),
        });

        var chicago = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-87.6298,41.8781])
            ),
        });

        var denver = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-104.9903,39.7392])
            ),
        });

        var steamboat = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-106.8317,40.4850])
            ),
        });

        var amarillo = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-101.8313,35.2220])
            ),
        });

        var phoenix = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-112.0740,33.4484])
            ),
        });

        var seattle = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-122.3321,47.6062])
            ),
        });

        var lasvegas = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-115.1398,36.1699])
            ),
        });

        var bigbear = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-116.9114,34.2439])
            ),
        });

        var fourcorners = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.0452,36.9991])
            ),
        });

        var moab = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.5498,38.5733])
            ),
        });

        var charlotte = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-80.8431,35.2271])
            ),
        });

        var tallahassee = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-84.2807,30.4383])
            ),
        });

        var baltimore = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-76.6122,39.2904])
            ),
        });

        var lakegeorge = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-73.7123,43.4262])
            ),
        });

        var watkinsglen = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-76.8733,42.3806])
            ),
        });

        var fayetteville = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-78.8784,35.0527])
            ),
        });

        var jerseycity = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-74.7597,40.2206])
            ),
        });

        var philadelphia = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-75.1652,39.9526])
            ),
        });

        var longisland = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-73.1350,40.7891])
            ),
        });

        var arches = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.5925,38.7331])
            ),
        })

        var brycecanyon = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-112.1871,37.5930])
            ),
        })

        var canyonlands = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.8783,38.3269])
            ),
        })

        var grandcanyon = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-112.1401,36.0544])
            ),
        });

        var joshuatree = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-115.9010,33.8734])
            ),
        })

        var mtranier = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-121.7269,46.8800])
            ),

        })

        var rockymountain = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-105.6836,40.3428])
            ),
        })

        var saguaro = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-111.1666,32.2967])
            ),
        })

        var zion = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-113.0263,37.2982])
            ),
        });

        var vectorSource = new OlSourceVector({
            features: [newyork, buffalo, tampa, miami, keywest, nashville ,orlando, cleveland, pittsburgh, boston, richmond, washdc, atlanta, stlouis, bigbear, denver, steamboat, moab, amarillo, phoenix, seattle, lasvegas, chicago, neworleans, louisville, lexington, charlotte, tallahassee, baltimore, lakegeorge, watkinsglen, fayetteville, jerseycity, philadelphia, fourcorners, longisland]
        });

        var vectorSourceNP = new OlSourceVector({
            features: [arches, brycecanyon, canyonlands, grandcanyon, joshuatree, mtranier, rockymountain, saguaro, zion]
        })

        var markerVectorLayer = new OlLayerVector({
            source: vectorSource,
            style: new Style({
            image: new Icon({
                anchor: [0.5, 0.97],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "/map-marker.svg"
            })
            })
        });

        var markerVectorLayerNP = new OlLayerVector({
            source: vectorSourceNP,
            style: new Style({
            image: new Icon({
                anchor: [0.5, 0.97],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "/map-marker-np.svg"
            })
            })
        });

        this.olmap = new OlMap({
            layers: [
                new OlLayerTile({
                    source: new Stamen({
                        layer: 'terrain'
                    })
                }),
                new OlLayerTile({
                    source: new Stamen({
                        layer: 'terrain-labels'
                    })
                }),
            ],
            target: null,
            view: new OlView({
                center: fromLonLat([-95.7129, 37.0902]),
                zoom: 4.5
            })
        });

        this.olmap.addLayer(markerVectorLayer);
        this.olmap.addLayer(markerVectorLayerNP);

        var popup = document.createElement("div");
            popup.id = "EMpopup";
            document.body.appendChild(popup);

        var overlay = new OlOverlay({
            element: popup,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });

        var content = document.createElement("div");
            popup.appendChild(content);

        var popupShowing = false;

        this.olmap.on('singleclick', (e) => {
            var clickedMarker = false;
            this.olmap.forEachFeatureAtPixel(e.pixel, () => {
                var coordinate = e.coordinate;
                console.log("Clicked Feature!");
                clickedMarker = true;
                content.innerHTML = '<p>Clicked Feature!</p>'
                overlay.setPosition(coordinate);
                popupShowing = true;
            });
            if(!clickedMarker)
                console.log("Nothing was clicked!");
                clickedMarker = false;
                popupShowing = false;
            });

        this.olmap.addOverlay(overlay)

    }

    componentDidMount() {
        this.olmap.setTarget("map");

        // Listen to map changes
        this.olmap.on("moveend", () => {
            let center = this.olmap.getView().getCenter();
            let zoom = this.olmap.getView().getZoom();
            this.setState({
                center,
                zoom
            });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        let center = this.olmap.getView().getCenter();
        let zoom = this.olmap.getView().getZoom();
        if (center === nextState.center && zoom === nextState.zoom) return false;
        return true;
    }

    render() {
        return (
            <div>
                <div id="map" style={{ width: "100%", height: "580px" }}></div>
                <div id="popup"></div>
            </div>

        );
    }
}

export default PublicMap;