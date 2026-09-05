import React from "react";
import { useControls } from "leva";
import { useMemo } from "react";

import { images } from "../data/images";
import ImagePlane from "./ImagePlane";

const FanGroup = () => {
  const { numPlanes, spreadAngle, planeWidth, planeHeight, positionY } = useControls({
    numPlanes: {
      value: 6,
      min: 2,
      max: 40,
      step: 1,
      label: "Number of Planes",
    },
    spreadAngle: {
      value: 120,
      min: 20,
      max: 320,
      step: 1,
      label: "Spread Angle",
    },

    planeWidth: {
      value: 2.5,
      min: 0.4,
      max: 6,
      step: 0.05,
      label: "place width",
    },

    planeHeight: {
      value: 2.5,
      min: 0.4,
      max: 6,
      step: 0.05,
      label: "place width",
    },

    positionY: {
      value: -1.5,
      min: -6,
      max: 6,
      step: 0.05,
      label: "position Y",
    },
  });

  const plaens = useMemo(() => {

    const count = numPlanes;
    const totalArcRad = (spreadAngle * Math.PI) / 180;
    const step = totalArcRad / (count - 1);
    const startingAngle = -totalArcRad / 2;

    return Array.from({ length: count }, (_, i) => {
      const angle = startingAngle + i * step;

      return {
        key: i,
        url: images[i % images.length],
        position: [0, 0, 0],
        rotation: [0, angle, 0],
      };
    });
  },[numPlanes , spreadAngle]);

  return <group position={[0, positionY, 0]}>{
      plaens.map((plane)=>{
        return <ImagePlane key = {plane.key} url = {plane.url} position={plane.position} rotation={plane.rotation} planeWidth={planeWidth} planeHeight={planeHeight}></ImagePlane>
      })
    }</group>;
};

export default FanGroup;
