const nodes = [
    // --- CORE & ARCHITECTURE ---
    { id: 'Distributed Systems', group: 'core', val: 130, info: 'Expertise in CAP theorem, Consensus (Raft/Paxos), and High Availability architectures.' },
    { id: 'Microservices', group: 'core', val: 110, info: 'Service Meshes, Circuit Breakers, and Inter-service Event-driven Communication.' },
    { id: 'System Design', group: 'core', val: 100, info: 'Scalable architecture planning for high-throughput global platforms.' },
    { id: 'CAP Theorem', group: 'core', val: 80, info: 'Trade-off analysis between Consistency, Availability, and Partition Tolerance.' },

    // --- LANGUAGES ---
    { id: 'Java', group: 'lang', val: 105, info: 'Advanced Concurrency, Streams, and JVM performance tuning.' },
    { id: 'Python', group: 'lang', val: 110, info: 'Asynchronous Programming, Performance Profiling, and Data Processing.' },
    { id: 'C++', group: 'lang', val: 95, info: 'Template Meta-programming, Memory Management, and STL Optimization.' },
    { id: 'TypeScript', group: 'lang', val: 85, info: 'Type-safe frontend and backend development.' },
    { id: 'JavaScript', group: 'lang', val: 80, info: 'Modern ES6+, Event Loop, and DOM manipulation.' },
    { id: 'Go (Golang)', group: 'lang', val: 85, info: 'High-performance systems programming and Goroutines.' },
    { id: 'SQL', group: 'lang', val: 85, info: 'Complex Query Optimization and Relational Database design.' },

    // --- AI & MACHINE LEARNING ---
    { id: 'Deep Learning', group: 'ai', val: 120, info: 'CNNs, TDNNs, Transformers, and Hyperparameter Optimization.' },
    { id: 'Kaggle #82 Global', group: 'ai', val: 125, info: 'Competitive Signal processing and Feature Engineering Excellence.' },
    { id: 'Google BERT', group: 'ai', val: 95, info: 'NLP Pre-training, Transfer Learning, and Sentiment Analysis.' },
    { id: 'PyTorch', group: 'ai', val: 90, info: 'Deep Learning research and large-scale model deployment.' },
    { id: 'Keras/TensorFlow', group: 'ai', val: 85, info: 'Neural Network construction and training pipelines.' },
    { id: 'Computer Vision', group: 'ai', val: 85, info: 'Image classification, Segmentation, and Object detection.' },
    { id: 'Acoustic Modeling', group: 'ai', val: 80, info: 'Frequency structural patterns and MFCC feature extraction.' },

    // --- CLOUD & INFRA ---
    { id: 'Kubernetes', group: 'infra', val: 105, info: 'Containerized Orchestration, Service Scaling, and Helm chart management.' },
    { id: 'Docker', group: 'infra', val: 95, info: 'Containerization, Multi-stage builds, and Image optimization.' },
    { id: 'AWS (S3/EC2)', group: 'infra', val: 100, info: 'Scalable Cloud Infrastructure and Managed Services.' },
    { id: 'IAM & Security', group: 'infra', val: 110, info: 'Advanced identity management and Zero-trust security design.' },
    { id: 'CI/CD Pipelines', group: 'infra', val: 90, info: 'Deployment Automation with GitHub Actions and Jenkins.' },
    { id: 'Terraform', group: 'infra', val: 80, info: 'Infrastructure-as-Code (IaC) for reproducible cloud environments.' },
    { id: 'OAuth 2.0', group: 'infra', val: 95, info: 'Secure AuthN/AuthZ patterns and identity federation.' },

    // --- BACKEND & DATA ---
    { id: 'Spring Boot', group: 'back', val: 100, info: 'Production-grade enterprise grade applications.' },
    { id: 'Node.js', group: 'back', val: 90, info: 'Event-driven, non-blocking I/O for high-performance APIs.' },
    { id: 'Kafka', group: 'back', val: 105, info: 'Distributed event streaming and message brokering at scale.' },
    { id: 'Redis', group: 'back', val: 85, info: 'In-memory data structures for high-speed caching and sessions.' },
    { id: 'PostgreSQL', group: 'back', val: 95, info: 'Advanced RDBMS with complex joins and partitioning.' },
    { id: 'MongoDB', group: 'back', val: 90, info: 'NoSQL Document stores for flexible schema requirements.' },
    { id: 'RabbitMQ', group: 'back', val: 85, info: 'Reliable message queuing and routing.' },
    { id: 'GraphQL', group: 'back', val: 95, info: 'Strongly typed API queries with Netflix DGS.' },
    { id: 'RESTful API', group: 'back', val: 90, info: 'Standardized resource-based web services.' },
    { id: 'Netflix DGS', group: 'back', val: 80, info: 'GraphQL framework for Spring Boot.' },

    // --- FRONTEND & MORE ---
    { id: 'React', group: 'front', val: 95, info: 'Component-based UI development and state management.' },
    { id: 'Angular', group: 'front', val: 85, info: 'Single-page application framework for enterprise UIs.' },
    { id: 'Nivo Data Viz', group: 'front', val: 85, info: 'Complex data rendering and interactive geospatial charts.' },
    { id: 'Algorithms', group: 'front', val: 100, info: 'Strong foundation in time-complexity and problem solving.' },
    { id: 'Data Structures', group: 'front', val: 100, info: 'Hash Tables, Graphs, Trees, and efficient data storage.' },
    { id: 'Git/GitHub', group: 'front', val: 80, info: 'Version control and collaborative engineering workflows.' },
    { id: 'WebSockets', group: 'front', val: 85, info: 'Real-time bidirectional communication for live data.' }
];

const links = [
    { source: 'Distributed Systems', target: 'Microservices' },
    { source: 'Distributed Systems', target: 'Kafka' },
    { source: 'Distributed Systems', target: 'Kubernetes' },
    { source: 'Distributed Systems', target: 'CAP Theorem' },
    { source: 'Microservices', target: 'Spring Boot' },
    { source: 'Microservices', target: 'Docker' },
    { source: 'Microservices', target: 'OAuth 2.0' },
    { source: 'Microservices', target: 'GraphQL' },
    { source: 'Java', target: 'Spring Boot' },
    { source: 'Java', target: 'C++' },
    { source: 'Python', target: 'Deep Learning' },
    { source: 'Python', target: 'Kaggle #82 Global' },
    { source: 'Deep Learning', target: 'Kaggle #82 Global' },
    { source: 'Deep Learning', target: 'PyTorch' },
    { source: 'Deep Learning', target: 'Google BERT' },
    { source: 'Deep Learning', target: 'Computer Vision' },
    { source: 'Computer Vision', target: 'Keras/TensorFlow' },
    { source: 'AWS (S3/EC2)', target: 'Kubernetes' },
    { source: 'AWS (S3/EC2)', target: 'Terraform' },
    { source: 'Kubernetes', target: 'Docker' },
    { source: 'Kubernetes', target: 'CI/CD Pipelines' },
    { source: 'IAM & Security', target: 'OAuth 2.0' },
    { source: 'Spring Boot', target: 'Netflix DGS' },
    { source: 'Spring Boot', target: 'PostgreSQL' },
    { source: 'Node.js', target: 'MongoDB' },
    { source: 'Node.js', target: 'WebSockets' },
    { source: 'Kafka', target: 'RabbitMQ' },
    { source: 'Kafka', target: 'Redis' },
    { source: 'React', target: 'TypeScript' },
    { source: 'React', target: 'Nivo Data Viz' },
    { source: 'Angular', target: 'TypeScript' },
    { source: 'Algorithms', target: 'Data Structures' },
    { source: 'SQL', target: 'PostgreSQL' },
    { source: 'GraphQL', target: 'Netflix DGS' }
];

const COLORS = {
    core: '#1A73E8',
    lang: '#ffffff',
    ai: '#FF6F00',
    infra: '#34A853',
    back: '#FBBC04',
    front: '#E10098'
};

const container = document.getElementById('engine-container');
const canvas = document.createElement('canvas');
canvas.className = 'engine-canvas';
if (container) container.appendChild(canvas);

const ctx = canvas.getContext('2d');
let w, h, nodes_active, links_active;

function initEngine() {
    w = canvas.width = container.clientWidth;
    h = canvas.height = container.clientHeight;

    nodes_active = nodes.map(n => ({
        ...n,
        x: w / 2 + (Math.random() - 0.5) * w,
        y: h / 2 + (Math.random() - 0.5) * h,
        vx: 0,
        vy: 0
    }));

    links_active = links.map(l => ({
        source: nodes_active.find(n => n.id === l.source),
        target: nodes_active.find(n => n.id === l.target)
    })).filter(l => l.source && l.target);
}

function updatePhysics() {
    const k = 0.05, d_target = 120, repulsion = 400;

    nodes_active.forEach(n => {
        n.vx *= 0.92; n.vy *= 0.92;
        n.vx += (w / 2 - n.x) * 0.0001;
        n.vy += (h / 2 - n.y) * 0.0001;
    });

    for (let i = 0; i < nodes_active.length; i++) {
        for (let j = i + 1; j < nodes_active.length; j++) {
            const n1 = nodes_active[i], n2 = nodes_active[j];
            const dx = n2.x - n1.x, dy = n2.y - n1.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < 400) {
                const force = repulsion / (dist * dist);
                const fx = (dx / dist) * force, fy = (dy / dist) * force;
                n1.vx -= fx; n1.vy -= fy; n2.vx += fx; n2.vy += fy;
            }
        }
    }

    links_active.forEach(l => {
        const dx = l.target.x - l.source.x, dy = l.target.y - l.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - d_target) * k;
        l.source.vx += (dx / dist) * force; l.source.vy += (dy / dist) * force;
        l.target.vx -= (dx / dist) * force; l.target.vy -= (dy / dist) * force;
    });

    nodes_active.forEach(n => {
        if (!n.isBeingDragged) { n.x += n.vx; n.y += n.vy; }
        const m = 50;
        if (n.x < m) n.x = m; if (n.x > w - m) n.x = w - m;
        if (n.y < m) n.y = m; if (n.y > h - m) n.y = h - m;
    });
}

function drawEngine() {
    ctx.clearRect(0, 0, w, h);
    const time = Date.now() * 0.002;

    // Draw Subtle Neon Links
    links_active.forEach(l => {
        ctx.globalAlpha = 0.15 + Math.sin(time + l.source.x) * 0.05;
        ctx.strokeStyle = '#8ab4f8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(l.source.x, l.source.y);
        ctx.lineTo(l.target.x, l.target.y);
        ctx.stroke();
    });

    // Draw Large Matte White Spheres
    nodes_active.forEach(n => {
        const r = n.val / 2.2;

        ctx.globalAlpha = 1;
        // High-end Matte White Shading
        const grad = ctx.createRadialGradient(n.x - r / 3, n.y - r / 3, r / 10, n.x, n.y, r);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.6, '#f8f9fa');
        grad.addColorStop(1, '#e1e3e6');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Label INSIDE - Light Blue
        ctx.fillStyle = '#1A73E8'; // Direct contrast
        const fontSize = Math.max(9, r / 3.2);
        ctx.font = `bold ${fontSize}px Inter`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Smart wrapping to keep text inside the sphere
        const words = n.id.split(' ');
        if (words.length > 1 && n.id.length > 8) {
            ctx.fillText(words[0], n.x, n.y - fontSize / 1.8);
            ctx.fillText(words.slice(1).join(' '), n.x, n.y + fontSize / 1.8);
        } else {
            ctx.fillText(n.id, n.x, n.y);
        }
    });
}

let activeNode = null, hoveredNode = null;
const infoBox = document.createElement('div');
infoBox.className = 'node-info';
document.body.appendChild(infoBox);

window.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    activeNode = nodes_active.find(n => Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2) < n.val / 4 + 10);
    if (activeNode) activeNode.isBeingDragged = true;
});

window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    if (activeNode && activeNode.isBeingDragged) { activeNode.x = mx; activeNode.y = my; }
    hoveredNode = nodes_active.find(n => Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2) < n.val / 4 + 10);
    if (hoveredNode) {
        infoBox.style.opacity = '1';
        infoBox.style.left = (e.clientX + 20) + 'px';
        infoBox.style.top = (e.clientY + 20) + 'px';
        infoBox.innerHTML = `<strong>${hoveredNode.id}</strong><p style="margin-top:5px; color:#aaa;">${hoveredNode.info}</p>`;
    } else { infoBox.style.opacity = '0'; }
});

window.addEventListener('mouseup', () => { if (activeNode) activeNode.isBeingDragged = false; activeNode = null; });

function loop() {
    updatePhysics();
    drawEngine();
    requestAnimationFrame(loop);
}

if (container) {
    initEngine();
    loop();
}

window.addEventListener('resize', initEngine);
