import React, {
    Component
} from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import {fromLonLat} from 'ol/proj';
import Stamen from 'ol/source/Stamen';
import OlOverlay from 'ol/Overlay'
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
            name: 'New York, NY'
        });

        var buffalo = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-78.8784,42.8864])
            ),
            name: 'Buffalo, NY'
        });

        var tampa = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-82.4572,27.9506])
            ),
            name: 'Tampa, FL'
        });

        var miami = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-80.1918,25.7617])
            ),
            name: 'Miami, FL'
        });

        var keywest = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-81.7800,24.5551])
            ),
            name: 'Key West, FL'
        });

        var orlando = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-81.3792,28.5383])
            ),
            name: 'Orlando, FL'
        });

        var atlanta = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-84.3880,33.7490])
            ),
            name: 'Atlanta, GA'
        });

        var washdc = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-77.0369,38.9072])
            ),
            name: 'Washington DC'
        });

        var nashville = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-86.7816,36.1627])
            ),
            name: 'Nashville, TN'
        });

        var cleveland = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-81.6944,41.4993])
            ),
            name: 'Cleveland, OH'
        });

        var pittsburgh = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-79.9959,40.4406])
            ),
            name: 'Pittsburgh, PA'
        });

        var boston = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-71.0589,42.3601])
            ),
            name: 'Boston, MA'
        });

        var richmond = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-77.4360,37.5407])
            ),
            name: 'Richmond, VA'
        });

        var stlouis = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-90.1994,38.6270])
            ),
            name: 'St.Louis, MO'
        });

        var louisville = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-85.7585,38.2527])
            ),
            name: 'Louisville, KY'
        });

        var lexington = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-84.5037,38.0406])
            ),
            name: 'Lexington, KY'

        });

        var neworleans = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-90.0715,29.9511])
            ),
            name: 'New Orleans, LA'

        });

        var chicago = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-87.6298,41.8781])
            ),
            name: 'Chicago, IL'
        });

        var denver = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-104.9903,39.7392])
            ),
            name: 'Denver, CO'
        });

        var steamboat = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-106.8317,40.4850])
            ),
            name: 'Steamboat Springs, CO'
        });

        var amarillo = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-101.8313,35.2220])
            ),
            name: 'Amarillo, TX'
        });

        var phoenix = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-112.0740,33.4484])
            ),
            name: 'Phoenix, AZ'
        });

        var seattle = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-122.3321,47.6062])
            ),
            name: 'Seattle, WA'
        });

        var lasvegas = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-115.1398,36.1699])
            ),
            name: 'Las Vegas, NV'
        });

        var bigbear = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-116.9114,34.2439])
            ),
            name: 'Big Bear Lake, CA'
        });

        var fourcorners = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.0452,36.9991])
            ),
            name: 'Four Corners'
        });

        var moab = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.5498,38.5733])
            ),
            name: 'Moab, UT'
        });

        var charlotte = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-80.8431,35.2271])
            ),
            name: 'Charlotte, NC'
        });

        var tallahassee = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-84.2807,30.4383])
            ),
            name: 'Tallahasse, FL'
        });

        var baltimore = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-76.6122,39.2904])
            ),
            name: 'Baltimore, MD'
        });

        var lakegeorge = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-73.7123,43.4262])
            ),
            name: 'Lake George, NY'
        });

        var watkinsglen = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-76.8733,42.3806])
            ),
            name: 'Watkins Glen, NY'
        });

        var fayetteville = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-78.8784,35.0527])
            ),
            name: 'Fayetteville, NC'
        });

        var jerseycity = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-74.7597,40.2206])
            ),
            name: 'Jersey City, NJ'
        });

        var philadelphia = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-75.1652,39.9526])
            ),
            name: 'Philadelphia, PA'
        });

        var longisland = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-73.1350,40.7891])
            ),
            name: 'Long Island, NY'
        });

        var sanfrancisco = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-122.4194,37.7749])
            ),
            name: 'San Francisco, CA'
        });

        var tahoe = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-119.9772,38.9399])
            ),
            name: 'South Lake Tahoe, CA'
        });


        var napa = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-122.2654,38.5025])
            ),
            name: 'Napa Valley, CA'
        });

        var arches = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.5925,38.7331])
            ),
            name: 'Arches National Park, UT',
            image: './arches_card.jpg',
            album: '/Arches'
        })

        var brycecanyon = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-112.1871,37.5930])
            ),
            name: 'Bryce Canyon National Park, UT'
        })

        var canyonlands = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-109.8783,38.3269])
            ),
            name: 'Canyonlands National Park, UT'
        })

        var grandcanyon = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-112.1401,36.0544])
            ),
            name: 'Grand Canyon National Park, AZ',
        });

        var joshuatree = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-115.9010,33.8734])
            ),
            name: 'Joshua Tree National Park, CA'
        })

        var mtranier = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-121.7269,46.8800])
            ),
            name: 'Mount Ranier National Park, WA'
        })

        var rockymountain = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-105.6836,40.3428])
            ),
            name: 'Rocky Mountain National Park, CO'
        })

        var saguaro = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-111.1666,32.2967])
            ),
            name: 'Saguaro National Park, AZ'
        })

        var zion = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-113.0263,37.2982])
            ),
            name: 'Zion National Park, UT'
        });

        var yosemite = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-119.5383,37.8651])
            ),
            name: 'Yosemite National Park, CA'
        });

        var vectorSource = new OlSourceVector({
            features: [newyork, buffalo, tampa, miami, keywest, nashville ,orlando, cleveland, pittsburgh, boston, richmond, washdc, atlanta, stlouis, bigbear, denver, steamboat, moab, amarillo, seattle, lasvegas, chicago, neworleans, louisville, lexington, charlotte, tallahassee, baltimore, lakegeorge, watkinsglen, fayetteville, jerseycity, philadelphia, fourcorners, longisland, sanfrancisco, tahoe, napa]
        });

        var vectorSourceNP = new OlSourceVector({
            features: [arches, brycecanyon, canyonlands, grandcanyon, joshuatree, mtranier, rockymountain, saguaro, yosemite, zion]
        })

        var vectorSourceHome = new OlSourceVector({
            features: [phoenix]
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

        var markerVectorLayerHome = new OlLayerVector({
            source: vectorSourceHome,
            style: new Style({
            image: new Icon({
                anchor: [0.5, 0.97],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "/star.svg"
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
        this.olmap.addLayer(markerVectorLayerHome);


        var popup = document.createElement("div");
            popup.id = "EMpopup";
            document.body.appendChild(popup);

        var content = document.createElement("div");
            popup.appendChild(content);


        var image = document.createElement("img")
            popup.appendChild(image);

        var popupcloser = document.createElement("a");
            popupcloser.id = "EMpopup-closer"
            popupcloser.href = "#"
            popupcloser.onclick = () => {
                overlay.setPosition(undefined);
                popupcloser.blur();
                console.log("Closing popup!");
                return false;
            }
            popup.appendChild(popupcloser);

        var overlay = new OlOverlay({
            element: popup,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });

        var popupShowing = false;

        this.olmap.on('pointermove', (evt) => {
            var hoverMarker = false;
            document.getElementById('map').style.cursor = 'default';
            this.olmap.forEachFeatureAtPixel(evt.pixel, () => {
                document.getElementById('map').style.cursor = 'pointer';
                hoverMarker = true;
            });
            if(!hoverMarker)
                hoverMarker = false;
            });

        this.olmap.on('singleclick', (e) => {
            var clickedMarker = false;
            this.olmap.forEachFeatureAtPixel(e.pixel, (vectorSourceNP) => {
                var coordinate = e.coordinate;
                var featureName = vectorSourceNP.get('name')
                var featureImage = vectorSourceNP.get('image')
                var albumLink = vectorSourceNP.get('album')
                console.log("Clicked Feature!");
                clickedMarker = true;
                content.innerHTML = featureName;
                image.width = 200;
                image.src = featureImage;
                overlay.setPosition(coordinate);
                popupShowing = true;
            });
            if(!clickedMarker)
                console.log("Nothing was clicked!");
                clickedMarker = false;
                popupShowing = false;
            });

        this.olmap.on('singleclick', (e) => {
            var clickedMarker = false;
            this.olmap.forEachFeatureAtPixel(e.pixel, (vectorSourceHome) => {
                var coordinate = e.coordinate;
                var featureName = vectorSourceHome.get('name')
                console.log("Clicked Feature!");
                clickedMarker = true;
                content.innerHTML = featureName;
                overlay.setPosition(coordinate);
                popupShowing = true;
            });
            if(!clickedMarker)
                console.log("Nothing was clicked!");
                clickedMarker = false;
                popupShowing = false;
            });

        this.olmap.on('singleclick', (e) => {
            var clickedMarker = false;
            this.olmap.forEachFeatureAtPixel(e.pixel, (vectorSource) => {
                var coordinate = e.coordinate;
                var featureName = vectorSource.get('name')
                console.log("Clicked Feature!");
                clickedMarker = true;
                content.innerHTML = featureName;
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
            </div>

        );
    }
}

export default PublicMap;