import React from "react";
import PropertyList from "../Property/PropertyList";
import PropertySlider from "../Property/PropertySlider";
import TrendingAndRecommended from "../DetaisPages/TrendingAndRecommended";




export default function Home() {
  return (
    <div>

      <PropertySlider />
      <TrendingAndRecommended />
      <PropertyList />
    </div>
  );
}
