"use client";

import { Cartesian3, Color, Ion, GoogleMaps } from "cesium";
import { useState } from "react";
import { Entity, Viewer, PointGraphics, EntityDescription, CameraFlyTo } from "resium";
import "./cesium.css";

const position = Cartesian3.fromDegrees(139.767052, 35.681167, 100);
// GoogleMaps.defaultApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN!;
// console.log(process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN);

// Viewer.animation._container.style.display = "none";//隐藏掉时钟 图中6

// viewer.timeline.container.style.display = "none";//隐藏时间轴 图中7

// viewer.fullscreenButton.container.style.display = "none";//隐藏全屏按钮 图中8

// viewer._cesiumWidget._creditContainer.style.display = "none";//隐藏logo 图中9

export default function Cesium() {
  const [flag, setFlag] = useState(false);
  const [once, setOnce] = useState(true);

  return (
    <Viewer full>
      {/* <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 20, color: Color.WHITE }}
        description="hoge"
        onClick={() => setFlag((f) => !f)}
      />
      {flag && (
        <Entity
          position={Cartesian3.fromDegrees(139.767052, 34.681167, 100)}
          point={{ pixelSize: 20, color: Color.RED }}
        />
      )} */}
      <Entity position={position} name="Tokyo" point={{ pixelSize: 20, color: Color.RED }} description="This is Tokyo">
        <PointGraphics pixelSize={10} />
        <EntityDescription>
          <h1>Hello, world.</h1>
          <p>JSX is available here!</p>
        </EntityDescription>
      </Entity>
      <button
        className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 text-white font-bold py-1 px-1 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        style={{ position: "absolute", top: "45px", right: "10px", width: "50px", height: "50px" }}
        onClick={() => setOnce((o) => !o)}
      >
        Dive Into
      </button>
      <CameraFlyTo
        // {...args}
        duration={5}
        destination={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        once={once}
      />
    </Viewer>
  );
}
