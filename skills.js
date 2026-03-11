// --- SKILLS BUBBLE PHYSICS ---
const skills = [
    { name: 'Python', size: 100, color: '#3776AB' },
    { name: 'Java', size: 90, color: '#007396' },
    { name: 'C++', size: 85, color: '#00599C' },
    { name: 'Spring Boot', size: 80, color: '#6DB33F' },
    { name: 'Distributed Systems', size: 110, color: '#1A73E8' },
    { name: 'Microservices', size: 95, color: '#4D90FE' },
    { name: 'Kaggle Global #82nd', size: 120, color: '#20BEFF' },
    { name: 'Deep Learning', size: 110, color: '#FF6F00' },
    { name: 'Google BERT', size: 90, color: '#4285F4' },
    { name: 'OAuth 2.0', size: 80, color: '#EB5424' },
    { name: 'REST / GraphQL', size: 85, color: '#E10098' },
    { name: 'AWS', size: 80, color: '#FF9900' },
    { name: 'Docker', size: 85, color: '#2496ED' },
    { name: 'TypeScript', size: 80, color: '#3178C6' }
];

class Bubble {
    constructor(canvas, skill) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.name = skill.name;
        this.radius = skill.size / 2;
        this.color = skill.color;

        // Spawn from sides
        this.x = Math.random() > 0.5 ? -this.radius : canvas.width + this.radius;
        this.y = Math.random() * canvas.height;

        // Velocity towards center
        const targetX = canvas.width / 2;
        const targetY = canvas.height / 2;
        const angle = Math.atan2(targetY - this.y, targetX - this.x);
        const speed = 2 + Math.random() * 3;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.friction = 0.98;
        this.bounce = 0.7;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Slow down over time
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Bounce off walls
        if (this.x + this.radius > this.canvas.width) {
            this.x = this.canvas.width - this.radius;
            this.vx *= -this.bounce;
        } else if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.vx *= -this.bounce;
        }

        if (this.y + this.radius > this.canvas.height) {
            this.y = this.canvas.height - this.radius;
            this.vy *= -this.bounce;
        } else if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.vy *= -this.bounce;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color + '22'; // Transparent fill
        this.ctx.fill();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Text
        this.ctx.fillStyle = '#fff';
        this.ctx.font = `bold ${Math.max(10, this.radius / 2.5)}px Inter`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(this.name, this.x, this.y);
    }
}

const canvas = document.getElementById('skills-canvas');
const ctx = canvas.getContext('2d');
let bubbles = [];

function initSkills() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 600;
    bubbles = skills.map(s => new Bubble(canvas, s));
}

function resolveCollisions() {
    for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
            const b1 = bubbles[i];
            const b2 = bubbles[j];
            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = b1.radius + b2.radius;

            if (distance < minDistance) {
                // Collision response
                const angle = Math.atan2(dy, dx);
                const targetX = b1.x + Math.cos(angle) * minDistance;
                const targetY = b1.y + Math.sin(angle) * minDistance;
                const ax = (targetX - b2.x) * 0.1;
                const ay = (targetY - b2.y) * 0.1;

                b1.vx -= ax;
                b1.vy -= ay;
                b2.vx += ax;
                b2.vy += ay;
            }
        }
    }
}

function animateSkills() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resolveCollisions();
    bubbles.forEach(b => {
        b.update();
        b.draw();
    });
    requestAnimationFrame(animateSkills);
}

window.addEventListener('resize', initSkills);
initSkills();
animateSkills();
