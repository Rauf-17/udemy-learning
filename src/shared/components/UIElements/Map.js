import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        if (window.google) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: center,
                zoom: zoom
            });

            new window.google.maps.Marker({ position: center, map: map });
        }
    }, [center, zoom]);

    const lat = center.lat;
    const lng = center.lng;
const delta = 0.01;
const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;

return (
    <div className={`map ${props.className}`} style={props.style} ref={mapRef}>
        <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`}
        ></iframe>
    </div>
);
};

export default Map;