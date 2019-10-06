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