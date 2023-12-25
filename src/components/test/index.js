import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import glo from "../../imgs/worldColour.5400x2700.jpg";
import glo2 from "../../imgs/srtm_ramp2.world.5400x2700.jpg";
import cloudjpg from "../../imgs/clouds.jpg";


const arr = [
  [-10.5, 105.66666666],
  [15, 39],
  [-13.58333333, -172.33333333],
  [41.83333333, 22],
  [11.5, 43],
  [31, 36],
  [30, 70],
  [17.6797, 149.4068],
  [53, -8],
  [20, -12],
  [56, 10],
  [-22, 17],
  [8, -2],
  [7, 30],
  [48.66666666, 19.5],
  [-14.33333333, -170],
  [47, 29],
  [40, 127],
  [22.16666666, 113.55],
  [21.75, -71.58333333],
  [-4.58333333, 55.66666666],
  [40, 45],
  [12.116667, -68.933333],
  [16.25, -61.583333],
  [-6, 71.5],
  [2, 10],
  [35, 38],
  [-12.5, 18.5],
  [39, 71],
  [8, -66],
  [19.3, 166.633333],
  [60.116667, 19.9],
  [52, 20],
  [25, 45],
  [-1, 15],
  [44, 18],
  [18.35, -64.933333],
  [-21.5, 165.5],
  [43.76666666, 12.41666666],
  [49.75, 15.5],
  [15.5, -90.25],
  [37, 127.5],
  [59, 26],
  [28, 84],
  [42.666667, 21.166667],
  [-22, 24],
  [13, 122],
  [46.83333333, -56.33333333],
  [33, 44],
  [33.83333333, 35.83333333],
  [-3.5, 30],
  [46, 105],
  [62, -7],
  [-23, -58],
  [78, 20],
  [-9, -172],
  [49.46666666, -2.58333333],
  [12.18, -68.25],
  [28, 3],
  [46, 2],
  [52.5, 5.75],
  [72, -40],
  [18.033333, -63.05],
  [15, 19],
  [64, 26],
  [9, -80],
  [31.9, 35.2],
  [15, 48],
  [-10, -55],
  [10, 8],
  [7.5, 134.5],
  [36, 138],
  [-6, 35],
  [48.0196, 66.9237],
  [39.5, -8],
  [-54.5, -37],
  [7, 81],
  [51, 9],
  [24.5, -13],
  [22, 98],
  [4, -72],
  [-10, -76],
  [14, -14],
  [41, 75],
  [35, 105],
  [33, 65],
  [39, 35],
  [6.5, -9.5],
  [-29, 24],
  [-30, -71],
  [35.9375, 14.3754],
  [1.41666666, 173],
  [16.5388, 23.0418],
  [49.25, -2.16666666],
  [65, -18],
  [13.46666666, -16.56666666],
  [-16, 167],
  [-33, -56],
  [21, 57],
  [15, 30],
  [20, 77],
  [18, 105],
  [12.5, -69.96666666],
  [14.666667, -61],
  [-12.16666666, 44.25],
  [40, -4],
  [17.05, -61.8],
  [41, 64],
  [3.25, 73],
  [36.13333333, -5.35],
  [-5, 120],
  [-25.06666666, -130.1],
  [16.16666666, 107.83333333],
  [2.5, 112.5],
  [-21.23333333, -159.76666666],
  [-26.5, 31.5],
  [1, 32],
  [-20, 47],
  [17.7134, 178.065],
  [62, 10],
  [-90, 0],
  [54.4208, 3.3464],
  [35, 33],
  [23.5, 121],
  [-6, 147],
  [-2, 30],
  [0, 25],
  [6, 12],
  [44, 21],
  [56, 24],
  [-49.25, 69.167],
  [13, 105],
  [-15.95, -5.72],
  [24, 54],
  [32.33333333, -64.75],
  [43.73333333, 7.4],
  [21.5, -80],
  [22.267, 114.188],
  [15.2, 145.75],
  [8, 1.16666666],
  [49.75, 6.16666666],
  [-20.28333333, 57.55],
  [-34, -64],
  [12.11666666, -61.66666666],
  [13, -85],
  [-19.03333333, -169.86666666],
  [49, 32],
  [5, -59],
  [16, 8],
  [9.5, 2.25],
  [13.88333333, -60.96666666],
  [-8, 178],
  [-29.03333333, 167.95],
  [27, 30],
  [17.33333333, -62.75],
  [-29.5, 28.5],
  [-20, -175],
  [42, 43.5],
  [8, 38],
  [19, -70.66666666],
  [13.25, -61.2],
  [17.25, -88.75],
  [54.25, -4.5],
  [32, -5],
  [19, -72.41666666],
  [-12.83333333, 45.16666666],
  [13, -2],
  [24, 90],
  [29.5, 45.75],
  [-21.15, 55.5],
  [18.25, -77.5],
  [46, 25],
  [1, 7],
  [25.0343, -77.3963],
  [23, -102],
  [18.0708, 63.0501],
  [13.83333333, -88.91666666],
  [18.5, -63.41666666],
  [6.91666666, 158.25],
  [40, 60],
  [18.25, -63.16666666],
  [7, 21],
  [4, -56],
  [50.83333333, 4],
  [62, 15],
  [-17, -65],
  [42.5, 19.3],
  [-18.25, 35],
  [57, 25],
  [-13.5, 34],
  [17, -4],
  [41.9, 12.45],
  [16.75, -62.2],
  [47.33333333, 13.33333333],
  [41, 20],
  [18.431383, -64.62305],
  [-15, 30],
  [4, -53],
  [47.26666666, 9.53333333],
  [25.5, 51.25],
  [-8, 159],
  [-0.53333333, 166.91666666],
  [39, 22],
  [25, 17],
  [12, -15],
  [13.16666666, -59.53333333],
  [15, -86.5],
  [10, 49],
  [19.3133, -81.2546],
  [42.83333333, 12.83333333],
  [-13.3, -176.2],
  [42.5, 1.5],
  [-2, -77.5],
  [1, 38],
  [26, 50.55],
  [54, -2],
  [11, -10],
  [53.0818, 73.5042],
  [60, 100],
  [4.5, 114.66666666],
  [-20, 30],
  [13.46666666, 144.78333333],
  [-27, 133],
  [46.11666666, 14.81666666],
  [53, 28],
  [15, 100],
  [-41, 174],
  [34, 9],
  [9, 168],
  [8.5, -11.5],
  [27.5, 90.5],
  [38, -97],
  [47, 8],
  [-51.75, -59],
  [12.1642, 96.871],
  [-1, 11.75],
  [15.41666666, -61.33333333],
  [60, -95],
  [10.6918, -61.2225],
  [18.25, -66.5],
  [1.36666666, 103.8],
  [47, 20],
  [10, -84],
  [31.47, 35.13],
  [43, 25],
  [40.5, 47.5],
  [-8.83333333, 125.91666666],
  [32, 53],
  [45.16666666, 15.5],
  [8, -5],
];
// https://restcountries.com/v3.1/all
const TestGlobe = () => {
  const { scene, camera, gl } = useThree();
  const color = new THREE.Color("#FD8813")
  camera.position.set(0, 0, 2);
  const texture = new THREE.TextureLoader().load(glo);
  const texture2 = new THREE.TextureLoader().load(glo2);
  const cloudTexture = new THREE.TextureLoader().load(cloudjpg); 
  useEffect(() => {
    const gloGeometry = new THREE.SphereGeometry(1, 64, 32);
    const gloMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      displacementMap: texture2,
      side: THREE.FrontSide, 
    });
    gloMaterial.displacementScale = 0.03;
    gloMaterial.displacementBias = -0.02;

    const cloudGeometry = new THREE.SphereGeometry(1.2, 64, 32);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      side: THREE.DoubleSide,
    });

    const dotGeometry = new THREE.SphereGeometry(0.005, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: "skyblue" });
    
    const testGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const testMaterial = new THREE.MeshBasicMaterial({ color:color});
   
    for (let i = 0; i < arr.length; i++) {
      if (i === 86) {
        const phi = (90 - 39) * (Math.PI / 180);
        const theta = (180 - 35) * (Math.PI / 180);

        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.cos(phi);
        const z = Math.sin(phi) * Math.sin(theta);
        const dotMesh = new THREE.Mesh(
          dotGeometry,
          new THREE.MeshBasicMaterial({ color: "blue" })
        );
        dotMesh.position.set(x, y, z);
        scene.add(dotMesh);
        break;
      }
      const element = arr[i];
      const phi = (90 - element[0]) * (Math.PI / 180);
      const theta = (180 - element[1]) * (Math.PI / 180);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
       const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);

      dotMesh.position.set(x, y, z);
      scene.add(dotMesh);
    }
    
 
    const testMesh = new THREE.Mesh(testGeometry, testMaterial);  
    testMesh.position.set(-0.7, 0.65, 0.5)
    scene.add(testMesh);

const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial); 

    const gloMesh = new THREE.Mesh(gloGeometry, gloMaterial);
    gloMesh.rotation.set(0, 3.2, 0);
    scene.add(gloMesh);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      // gloMesh.rotation.y += 0.01;
      // camera.rotation.y += 0.01;
      // dotMesh.rotation.y += 0.01;

      // Update the camera position
      // camera.position.z = Math.sin(Date.now() * 0.001) * 5;
      
      // camera.lookAt(-0.5, 1, -0.5);
      // camera.rotation.x += 0.001; 

      gl.render(scene, camera);
    };

    animate();
    return () => {
      scene.remove(gloMesh);
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.geometry === dotGeometry) {
          scene.remove(child);
        }
      });
    };
  }, [scene, camera, gl]);

  return null;
};

export default TestGlobe;
