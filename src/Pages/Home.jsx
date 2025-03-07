import React from "react";
import PropertyList from "../Property/PropertyList";
import PropertySlider from "../Property/PropertySlider";
import OffcanvasExample from "../Layout/OffcanvasExample";
import Footer from "../Layout/Footer";
import HorizontalScrollMenu from "../Layout/ScrollHeader";






export default function Home() {
  return (
    <div>
      <OffcanvasExample />
      <HorizontalScrollMenu />
      <PropertySlider />
      <PropertyList />
      <Footer />
    </div>
  );
}
