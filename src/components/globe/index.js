// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import { ImprovedNoise } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/math/ImprovedNoise.js"; 
// export default function Sphere() {
//   const { scene, camera, gl } = useThree();
//   const sphereRef = useRef();

//   useEffect(() => {
//     let noise = new ImprovedNoise();

//     camera.position.set(0, 0, 5);

//     let radius = 2;
//     let g = new THREE.IcosahedronGeometry(1, 16);
//     let pos0 = [];
//     let v3 = new THREE.Vector3();
//     let p = new THREE.Vector3();
//     let pos = g.attributes.position;

//     g.computeVertexNormals();
//     let m = new THREE.MeshStandardMaterial({ wireframe: false, side: THREE.DoubleSide }); 
//     let o = new THREE.Mesh(g, m);
//     sphereRef.current = o;
//     scene.add(o);

//     // Animation function
//     const animate = () => {
//       const time = Date.now() * 0.001; 

//       // Update noise values and vertex positions
//       for (let i = 0; i < pos.count; i++) {
//         p.fromBufferAttribute(pos, i).normalize();
//         v3.copy(p).multiplyScalar(2.1);
//         let ns = noise.noise(v3.x + time * 0.5, v3.y + time * 0.5, v3.z + time * 0.5);
//         v3.copy(p)
//           .setLength(radius)
//           .addScaledVector(p, ns * 0.5);
//         pos.setXYZ(i, v3.x, v3.y, v3.z);
//         pos0[i] = v3.clone();
//       }

//       // Update vertex positions in the geometry
//       pos.needsUpdate = true;

//       // Request the next animation frame
//       requestAnimationFrame(animate);
//     };

//     // Start the animation
//     animate();

//     return () => {
//       // Cleanup code (if needed)
//     };
//   }, [scene, camera, gl]);

//   return null;
// }
