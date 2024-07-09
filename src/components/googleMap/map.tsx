"use client";
import { GoogleMap } from "@react-google-maps/api";
import { MapProvider } from "./map-provider";
import { useState } from "react";
import axios from "axios";

const MapComponent = ({ location, setFieldValue }: any) => {
  const defaultMapContainerStyle = {
    width: "100%",
    height: "250px",
    border: 0,
  };

  const defaultMapCenter = {
    lat: 25.23066536240954,
    lng: 55.32101965122241,
  };

  const defaultMapZoom = 20;

  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "roadmap",
  };

  const handleMapClick = async (event: any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    await fetchLocationDetails(lat, lng);
  };

  const fetchLocationDetails = async (lat: any, lng: any) => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      const addressComponents = response.data.results[0].address_components;

      const getAddressComponent = (types: any) => {
        const component = addressComponents.find((c: any) =>
          types.every((t: any) => c.types.includes(t))
        );
        return component ? component.long_name : "";
      };

      const country = getAddressComponent(["country"]);
      const state = getAddressComponent(["administrative_area_level_1"]);
      const city =
        getAddressComponent(["locality"]) ||
        getAddressComponent(["administrative_area_level_2"]);

      // location({ lat, lng, country, state, city });
      setFieldValue("latitude", lat);
      setFieldValue("longitude", lng);
      setFieldValue("country", country);
      setFieldValue("state", state);
      setFieldValue("city", city);
    } catch (error) {
      console.error("Error fetching location details:", error);
      // location({
      //   lat,
      //   lng,
      //   country: "Unknown",
      //   state: "Unknown",
      //   city: "Unknown",
      // });
      setFieldValue("latitude", lat);
      setFieldValue("longitude", lng);
      setFieldValue("country", "Unknown");
      setFieldValue("state", "Unknown");
      setFieldValue("city", "Unknown");
    }
  };

  return (
    <div className="w-full">
      <MapProvider>
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
          onClick={handleMapClick}
        ></GoogleMap>
      </MapProvider>
    </div>
  );
};

export { MapComponent };
