import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const GMapComponent = () => {
  const mapStyles = {        
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 37.7749, 
    lng: -122.4194
  };

  return (
    <LoadScript
    googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=places`;"
    libraries={['places']} // If you need additional libraries like places
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GMapComponent;


/*import React, { useEffect, useState } from 'react';

const GoogleMap = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: -23.013104, lng: -43.394365 });

  useEffect(() => {
    const loadGoogleMap = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      if (window.google && window.google.maps) {
        const mapOptions = {
          zoom: 13,
          center: center,
          scrollwheel: false,
        };

        const mapInstance = new window.google.maps.Map(document.getElementById('google-map'), mapOptions);
        setMap(mapInstance);

        window.google.maps.event.addListenerOnce(mapInstance, 'idle', () => {
          setCenter(mapInstance.getCenter());
        });

        window.google.maps.event.addListener(window, 'resize', () => {
          if (center) {
            mapInstance.setCenter(center);
          }
        });
      }
    };

    loadGoogleMap();
  }, [center]);

  return (
    <div
      id="google-map"
      style={{
        height: '400px',
        width: '100%',
        maxWidth: '100%',
        borderRadius: '8px', // Optional styling for rounded corners
      }}
    ></div>
  );
};

export default GoogleMap;
*/