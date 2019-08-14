import React, { Component } from "react";
import { AFrameRenderer, Marker } from "../src";

/**
 * webcam is the default source type for analysing the marker
 */
 export default function webcam(){
    return (
      <AFrameRenderer inherent={true}>
        <Marker parameters={{ preset: "hiro" }}>
          <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="2000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </Marker>
      </AFrameRenderer>
    )
  }
