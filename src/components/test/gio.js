// import React, { useEffect } from "react";
// import * as THREE from "three";
// import { useFrame, useThree } from "@react-three/fiber";
// import { Points } from "@react-three/drei";

// const TestGlobe = () => {
//   const { scene } = useThree();
//   const pointsGeometry = new THREE.BufferGeometry();
//   const positions = new Float32Array(10 * 3); // Assuming 100 points

  
//   for (let i = 0; i < positions.length; i += 3) {
//     positions[i] = (Math.random() - 0.5) * 2;
//     positions[i + 1] = (Math.random() - 0.5) * 2;
//     positions[i + 2] = (Math.random() - 0.5) * 2;
//   }
//  console.log(positions);
//   pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//   useEffect(() => {
//     const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
//     const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xfff90 ,wireframe: false, side: THREE.DoubleSide  }); // Setting color to yellow
//     const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     scene.add(sphereMesh);

//     return () => {
//       // Clean up on unmount
//       scene.remove(sphereMesh);
//     };
//   }, [scene]);

//   return (
//     <Points geometry={pointsGeometry}>
//       <pointsMaterial color={0xffff00} size={0.05} />
//     </Points>
//   );
// };

// export default TestGlobe;
