import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- DATA: EXPERIENCE MODALS ---
const EXPERIENCE_DATA = {
    'Goldman Sachs': {
        title: 'Software Engineer III',
        meta: 'Jan 2024 - Present | New York, NY',
        points: [
            'Spearheaded transition of legacy SOAP services to high-concurrency RESTful microservices, enhancing global data access enterprise-wide.',
            'Architected an automated Identity and Access Management (IAM) infrastructure for 1,000+ internal users, delivering a 97% operational throughput boost.',
            'Mitigated 25% of security vulnerabilities across internal gateways by enforcing advanced OAuth 2.0 flows and multi-stage request validation.',
            'Curtailed unauthorized access attempts by 17% globally through a refined delegate management engine utilizing recursive identity logic.',
            'Optimized multi-threaded build pipelines and dependency trees, slashing production deployment latency by 20%.'
        ]
    },
    'AvaiLabs': {
        title: 'Software Developer Intern',
        meta: 'Aug 2023 - Dec 2023 | Remote',
        points: [
            'Constructed a real-time geospatial visualization platform for road-segment analytics, driving a 30% increase in user session duration.',
            'Orchestrated a recursive RBAC algorithm ensuring 100% data isolation across multi-level privileges, preventing potential cross-tenant leaks.',
            'Refined frontend performance by migrating core project architectures to modern bundlers, reducing build sizes by 10%.'
        ]
    },
    'Samsung R&D': {
        title: 'R&D Intern (AI Focus)',
        meta: 'Jan 2022 - July 2022 | Bangalore, India',
        points: [
            'Modeled complex frequency patterns using MFCC feature extraction for the "Common Voice" production dataset.',
            'Optimized CNN and TDNN architectures for audio signal processing, achieving a validated 82% accuracy rate on real-world datasets.'
        ]
    },
    'Expoders Solutions': {
        title: 'Software Developer Intern',
        meta: 'May 2021 - July 2021 | Ahmedabad, India',
        points: [
            'Productized high-traffic "Task Calendars" and "Timeline Managers" using Angular framework.',
            'Optimized API responsiveness for property modules by developing efficient backend services in Node.js, significantly reducing server response times.'
        ]
    },
    'Education': {
        title: 'MS in Computer Science',
        meta: 'SUNY Albany | 3.97 GPA | Dean\'s Merit Scholarship',
        points: [
            'Specialized in Distributed Systems and AI Infrastructure.',
            'Bachelor\'s in CS & Engineering from Nirma University (7.93/10.0 CGPA).',
            '82nd Global Rank on Kaggle (Plant Pathology 2021).',
            'Published Technical Author on GeeksforGeeks.'
        ]
    }
};

// --- GLOBE CONFIGURATION ---
const GLOBE_RADIUS = 5;
const LOCATIONS = [
    { name: 'Goldman Sachs', lat: 40.7128, lng: -74.0060, color: '#1A73E8' }, // NYC
    { name: 'AvaiLabs', lat: 42.6526, lng: -73.7562, color: '#4D90FE' }, // Albany/Remote HQ
    { name: 'Samsung R&D', lat: 12.9716, lng: 77.5946, color: '#1A73E8' }, // Bangalore
    { name: 'Expoders Solutions', lat: 23.0225, lng: 72.5714, color: '#4D90FE' }, // Ahmedabad
    { name: 'Education', lat: 42.6526, lng: -73.7562, color: '#ffffff' } // Albany Again (Education)
];

// --- SCENE SETUP ---
const container = document.getElementById('globe-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.enableZoom = false; // Stay focused on rotating world

// --- OBJECTS ---
const textureLoader = new THREE.TextureLoader();

// The Main Globe
const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'),
    bumpMap: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-topology.png'),
    bumpScale: 0.1,
    metalness: 0.1,
    roughness: 0.7,
});
const globe = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(globe);

// Star Particles
const starsGeometry = new THREE.BufferGeometry();
const starsCount = 5000;
const posArray = new Float32Array(starsCount * 3);
for (let i = 0; i < starsCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starsMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xffffff });
const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starsMesh);

// --- PILLARS (Experience Pins) ---
const pillars = new THREE.Group();
scene.add(pillars);

function latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -((radius) * Math.sin(phi) * Math.cos(theta));
    const z = ((radius) * Math.sin(phi) * Math.sin(theta));
    const y = ((radius) * Math.cos(phi));
    return new THREE.Vector3(x, y, z);
}

LOCATIONS.forEach(loc => {
    const position = latLngToVector3(loc.lat, loc.lng, GLOBE_RADIUS);

    // Create Pillar
    const pillarHeight = 0.8;
    const pillarGeo = new THREE.CylinderGeometry(0.02, 0.02, pillarHeight, 32);
    const pillarMat = new THREE.MeshBasicMaterial({ color: loc.color, transparent: true, opacity: 0.7 });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);

    // Position and Rotate Pillar to point outwards
    pillar.position.copy(position.clone().multiplyScalar(1 + pillarHeight / 2 / GLOBE_RADIUS));
    pillar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), position.clone().normalize());

    // Glowing Cap
    const capGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const capMat = new THREE.MeshBasicMaterial({ color: loc.color });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = pillarHeight / 2;
    pillar.add(cap);

    pillar.userData = { name: loc.name };
    pillars.add(pillar);
});

// --- LIGHTING ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

camera.position.z = 15;

// --- INTERACTIVITY (Raycasting) ---
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const hoverTag = document.getElementById('hover-tag');
const modal = document.getElementById('experience-modal');
let isActuallyOverGlobe = false; // Tracks if mouse is over globe or pillar

container.addEventListener('mouseleave', () => {
    isActuallyOverGlobe = false;
    hoverTag.classList.add('hidden');
});

window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

    // Show hover tag near cursor
    hoverTag.style.left = (e.clientX + 20) + 'px';
    hoverTag.style.top = (e.clientY + 20) + 'px';
});

window.addEventListener('click', (e) => {
    if (hoveredPillar) {
        showDetails(hoveredPillar.userData.name);
    }
});

let hoveredPillar = null;

function showDetails(company) {
    const data = EXPERIENCE_DATA[company];
    if (!data) return;

    document.getElementById('modal-company-badge').innerText = company;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-date-location').innerText = data.meta;

    const body = document.getElementById('modal-description');
    body.innerHTML = '<ul>' + data.points.map(p => `<li>${p}</li>`).join('') + '</ul>';

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// --- ANIMATION LOOP ---
function animate(time) {
    requestAnimationFrame(animate);

    TWEEN.update(time);

    // Stop rotation when hovering over the globe OR a pillar
    if (!isActuallyOverGlobe) {
        pillars.rotation.y += 0.0015;
        globe.rotation.y += 0.0015;
    }

    starsMesh.rotation.y -= 0.0001;

    // Raycasting
    raycaster.setFromCamera(mouse, camera);

    // Check intersection with Earth and Pillars
    const globeIntersects = raycaster.intersectObject(globe);
    const pillarIntersects = raycaster.intersectObjects(pillars.children, true);

    // Set global hover state based on actual object collision
    isActuallyOverGlobe = (globeIntersects.length > 0 || pillarIntersects.length > 0);

    if (pillarIntersects.length > 0) {
        let pillar = pillarIntersects[0].object;
        if (pillar.parent && pillar.parent.userData.name) pillar = pillar.parent;

        if (hoveredPillar !== pillar) {
            if (hoveredPillar) hoveredPillar.scale.set(1, 1, 1);
            hoveredPillar = pillar;
            pillar.scale.set(1.5, 1.5, 1.5);
            hoverTag.innerText = pillar.userData.name;
            hoverTag.classList.remove('hidden');
        }
    } else {
        if (hoveredPillar) {
            hoveredPillar.scale.set(1, 1, 1);
            hoveredPillar = null;
            hoverTag.classList.add('hidden');
        }
    }

    controls.update();
    renderer.render(scene, camera);
}

animate();

// --- HANDLE RESIZE ---
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});
