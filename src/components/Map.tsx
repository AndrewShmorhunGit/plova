import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import styled from "styled-components";
import { getAPI_ID_KEY, getMAP_API_KEY } from "../units/functions";
import useGeolocation from "react-hook-geolocation";
import { defaultTheme } from "../units/data/mapTheme";

const API_KEY = getMAP_API_KEY();
const API_ID_KEY = getAPI_ID_KEY();
const containerStyle = {
  width: "60rem",
  height: "40rem",
};

const defaultOptions = {
  mapTypeControl: false,
  panControl: true,
  zoomControl: true,
  mapControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

export const Map = () => {
  const geolocation = useGeolocation();

  const { isLoaded } = useJsApiLoader({
    googleMapsClientId: API_ID_KEY,
    googleMapsApiKey: API_KEY,
  });

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);
  return (
    <Wrapper>
      <map>
        {isLoaded ? (
          <GoogleMap
            options={defaultOptions}
            mapContainerStyle={containerStyle}
            center={{ lat: geolocation.latitude, lng: geolocation.longitude }}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        ) : (
          <h2 className="center">Map loader... </h2>
        )}
      </map>
    </Wrapper>
  );
};

const Wrapper = styled.map`
  border-radius: 1rem;
`;
