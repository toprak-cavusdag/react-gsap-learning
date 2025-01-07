import React from "react";
import TimelineExample from "./components/TimelineExample";
import ScrollTriggerExample from "./components/ScrollTriggerExample";
import MultipleScrollExample from "./components/MultipleScrollExample";
import PinExample from "./components/PinExample";
import StaggerExample from "./components/StaggerExample";
import ResponsiveScrollExample from "./components/ResponsiveScrollExample";
import SvgDrawExample from "./components/SvgDrawExample";
import SvgTransformExample from "./components/SvgTransformExample";

const App = () => {
  return (
    <div style={{height: "300vh"}}>
      <SvgTransformExample  />
    </div>
  );
};

export default App;
