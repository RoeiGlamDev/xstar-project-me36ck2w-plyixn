import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for luxury LRP cosmetics.
 * This hook initializes a 3D scene using Three.js and provides
 * functionality for interactive elements that reflect the luxury
 * cosmetics brand aesthetic.
 *
 * @returns {Object} - Contains the ref to the 3D canvas and a function to update the scene.
 */
const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    // Set renderer size and background color
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0); // Transparent background

    // Create a luxury LRP cosmetics-themed 3D object
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lighting for luxury effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight);
    scene.add(pointLight);

    camera.position.z = 5;

    /
     * Function to animate the 3D scene.
     */
    const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01; // Rotate for interactive effect
        sphere.rotation.y += 0.01; // Rotate for interactive effect
        renderer.render(scene, camera);
    };

    useEffect(() => {
        if (canvasRef.current) {
            animate();
        }

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [canvasRef]);

    return { canvasRef };
};

export default use3D;