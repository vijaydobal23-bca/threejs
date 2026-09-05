import React from "react";
import * as THREE from "three";
import { useMemo } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";

const ImagePlane = ({ url, position, rotation, planeWidth, planeHeight }) => {
  
  const geometry = useMemo(()=>{
    const geo = new THREE.PlaneGeometry(planeWidth, planeHeight);
    geo.translate(0,planeHeight/2,0);
    return geo;
  },[planeWidth, planeHeight]);

  const texture = useTexture(url);
  return (
    <>

      <mesh geometry={geometry} position={position} rotation={rotation} >
        <meshStandardMaterial 
          map={texture} 
          side={THREE.DoubleSide} 
          roughness={0.25} 
          metalness={0.3} 
        />
        <OrbitControls></OrbitControls>
      </mesh>
    </>
  );
};

export default ImagePlane;
