import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.140.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.140.0/examples/jsm/controls/OrbitControls.js';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体
const geometry = new THREE.BoxGeometry();

// 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// 创建网格（Mesh）
const cube = new THREE.Mesh(geometry, material);

// 将网格添加到场景中
scene.add(cube);

// 添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 渲染循环
function animate() {
    requestAnimationFrame(animate);

    // 让魔方旋转
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 更新控制器
    controls.update();

    renderer.render(scene, camera);
}

animate();

// 处理窗口大小变化
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
