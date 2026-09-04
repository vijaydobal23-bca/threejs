import React from "react";
import { useControls } from "leva";

const Exprience = () => {
  const { x,y } = useControls("boxPosition",{
    x: { value: 0, min: -4, max: 4, step: 0.01 ,label: "X Axis"},
    y: { value: 0, min: -4, max: 4, step: 0.01, label: "Y Axis" },
  });

  return (
    <>
      <mesh >
        <boxGeometry args={[x, y, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default Exprience;
