// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const ParkingModel = () => {
//   const canvasRef = useRef(null); // Reference to the canvas element

//   useEffect(() => {
//     const canvas = canvasRef.current; // Access the canvas element
//     if (!canvas) return; // Ensure canvas is mounted before initializing Three.js

//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
//     renderer.setSize(canvas.clientWidth, canvas.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x1a202c); // bg-gray-800

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       canvas.clientWidth / canvas.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 5, 10);

//     // Add lighting
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(10, 10, 10);
//     scene.add(light);

//     const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
//     scene.add(ambientLight);

//     // Parking Lot Ground
//     const groundGeometry = new THREE.PlaneGeometry(20, 20);
//     const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x2d3748 }); // Dark gray
//     const ground = new THREE.Mesh(groundGeometry, groundMaterial);
//     ground.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
//     scene.add(ground);

//     // Load GLTF Model
//     const loader = new GLTFLoader();
//     loader.load(
//       "/path/to/parking-model.glb", // Replace with your actual model path
//       (gltf) => {
//         const model = gltf.scene;
//         model.position.set(0, 0, 0); // Adjust the position
//         model.scale.set(2, 2, 2); // Adjust the scale
//         scene.add(model);
//       },
//       undefined,
//       (error) => {
//         console.error("An error occurred while loading the model:", error);
//       }
//     );

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Clean up on unmount
//     return () => {
//       renderer.dispose();
//       scene.clear();
//     };
//   }, []);

//   return (
//     <div className="w-full h-96 bg-gray-800 rounded-lg">
//       <canvas ref={canvasRef} className="w-full h-full"></canvas>
//     </div>
//   );
// };

// export default ParkingModel;
