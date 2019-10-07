import React, {
    Component
} from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {defaults as defaultControls, Attribution} from 'ol/control';
import {fromLonLat} from 'ol/proj';
import Stamen from 'ol/source/Stamen';
import OlFeature from 'ol/Feature'
import OlGeomPoint from 'ol/geom/Point'
import OlSourceVector from 'ol/source/Vector'
import OlLayerVector from 'ol/layer/Vector'  
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';


class PublicMap extends Component {
    constructor(props) {
        super(props);

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
                })
            ],
            target: null,
            view: new OlView({
                center: fromLonLat([-95.7129, 37.0902]),
                zoom: 4.5
            }),
        });

        var newyork = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-74.0060,40.7128])
            ),
          });

        var vectorSource = new OlSourceVector({
            features: [newyork]
          });

        var markerVectorLayer = new OlLayerVector({
            source: vectorSource
        });
        
        this.olmap.addLayer(markerVectorLayer);

        /*
        var marker = new OlFeature({
            geometry: new OlGeomPoint(
            fromLonLat([-74.006,40.7127])
            ),  // Cordinates of New York's Town Hall
          });
          var vectorSource = new OlSourceVector({
            features: [marker]
          });
          var markerVectorLayer = new OlLayerVector({
            source: vectorSource
          });
          this.olmap.addLayer(markerVectorLayer);
        */
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
            <div id="map" style={{ width: "100%", height: "580px" }}>
            </div>
        );
    }
}

export default PublicMap;