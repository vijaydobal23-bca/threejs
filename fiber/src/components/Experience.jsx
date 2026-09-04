import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  Instance,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";

import { Instances } from "@react-three/drei";
import * as THREE from "three";

const Experience = () => {
  const cubeRef = useRef();

  // Load normal image texture
  const texture = useLoader(
    THREE.TextureLoader,
    "https://plus.unsplash.com/premium_photo-1671105035576-cc0ef98ae2dd?w=1000&auto=format&fit=crop&q=60"
  );

  // Drei texture
  const dreiTexture = useTexture(
    {
      matcap:"image.png",
        texture: "https://plus.unsplash.com/premium_photo-1671105035576-cc0ef98ae2dd?w=1000&auto=format&fit=crop&q=60"
    }
  );

  // Load GLB model from public folder
  const model = useGLTF("/lambo.glb");

  // Animation
  // useFrame((state, delta) => {
  //   if (cubeRef.current) {
  //     cubeRef.current.rotation.y += delta;
  //   }
  // });

  return (
    // <>
    //   {/* Cube */}
    //   {/* <mesh ref={cubeRef} position={[-3, 0, 0]}>
    //     <boxGeometry args={[2, 2, 2]} />

    //     <meshStandardMaterial
    //       color="white"
    //       map={dreiTexture}
    //     />
    //   </mesh> */}

    //   {/* Lamborghini */}
    //   <primitive
    //     object={model.scene}
    //     scale={0.5}
    //     position={[1, -1, 0]}
    //   />

    //   {/* EXR Environment Map */}
    //   <Environment
    //     files="/envMap.exr"
    //     background
    //   />

    //   {/* Camera Controls */}
    //   <OrbitControls />
    // </>

   <Instances>
  <torusGeometry args={[1, 0.3, 16, 32]} />
  <meshMatcapMaterial matcap={dreiTexture.matcap} />

  <Instance position={[0, 0, 0]} />
  <Instance position={[2, 0, 0]} />
  <Instance position={[-2, 0, 0]} />
</Instances>
  );
};

export default Experience;