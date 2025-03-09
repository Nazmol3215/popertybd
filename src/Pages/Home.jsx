import React from "react";
import PropertyList from "../Property/PropertyList";
import PropertySlider from "../Property/PropertySlider";
import OffcanvasExample from "../Layout/OffcanvasExample";
import Footer from "../Layout/Footer";
import HorizontalScrollMenu from "../Layout/ScrollHeader";
import Neighborhoods1 from "../FirstPages/Neighborhoods1";
import ScrollingText from "../FirstPages/ScrollingText";




export default function Home() {
  return (
    <div>
      <OffcanvasExample />
      <HorizontalScrollMenu />
      <ScrollingText />
      <PropertySlider />
      <Neighborhoods1/>
      <PropertyList />
      <Footer />
    </div>
  );
}
