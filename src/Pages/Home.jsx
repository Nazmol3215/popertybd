import React from "react";
import PropertyList from "../Property/PropertyList";
import PropertySlider from "../Property/PropertySlider";

export default function Home() {
  return (
    <div>
      <PropertySlider />
      <PropertyList />
    </div>
  );
}
