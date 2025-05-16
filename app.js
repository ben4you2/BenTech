// JavaScript (app.js)

// XUI (index.html) will be included below

// Particle/Thought Management App
/*
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const thoughts = [];
const blockers = [];
const kills = [];

const particleCount = 100;
const thoughtCount = 20;
const blockerCount = 5;

const particleSpeed = 2;
const thoughtSpeed = 1;
const blockerSize = 30;
const killSize = 10;

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 3 + 1;
    this.vx = (Math.random() - 0.5) * particleSpeed;
    this.vy = (Math.random() - 0.5) * particleSpeed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy *= -1;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Thought {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.vx = (Math.random() - 0.5) * thoughtSpeed;
    this.vy = (Math.random() - 0.5) * thoughtSpeed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy *= -1;
    }
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px Arial';
    ctx.fillText(this.text, this.x, this.y);
  }
}

class Blocker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = blockerSize;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}

class Kill {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = killSize;
    this.timer = 100; // Frames before disappearing
  }

  update() {
    this.timer--;
  }

  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}

function init() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, `hsl(${Math.random() * 360}, 100%, 50%)`));
  }

  for (let i = 0; i < thoughtCount; i++) {
    thoughts.push(new Thought(Math.random() * canvas.width, Math.random() * canvas.height, `Thought ${i}`));
  }

  for (let i = 0; i < blockerCount; i++) {
    blockers.push(new Blocker(Math.random() * canvas.width, Math.random() * canvas.height));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  thoughts.forEach(thought => {
    thought.update();
    thought.draw();
  });

  blockers.forEach(blocker => {
    blocker.draw();
  });

  kills.forEach((kill, index) => {
    kill.update();
    kill.draw();
    if (kill.timer <= 0) {
      kills.splice(index, 1);
    }
  });

  checkCollisions();
}

function checkCollisions() {
  kills.forEach(kill => {
    particles.forEach((particle, particleIndex) => {
      if (Math.abs(kill.x - particle.x) < kill.size && Math.abs(kill.y - particle.y) < kill.size) {
        particles.splice(particleIndex, 1);
      }
    });

    thoughts.forEach((thought, thoughtIndex) => {
      if (Math.abs(kill.x - thought.x) < kill.size && Math.abs(kill.y - thought.y) < kill.size) {
        thoughts.splice(thoughtIndex, 1);
      }
    });
  });
}

canvas.addEventListener('click', (event) => {
  kills.push(new Kill(event.clientX, event.clientY));
});

init();
animate();
*/



// JavaScript (app.js)

/*
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const thoughts = [];
const blockers = [];
const kills = [];

const particleCount = 100;
const thoughtCount = 20;
const blockerCount = 5;

const particleSpeed = 2;
const thoughtSpeed = 1;
const blockerSize = 30;
const killSize = 10;

// Body and Head Proximity
let bodyX = canvas.width / 2;
let bodyY = canvas.height / 2;
let headX = bodyX;
let headY = bodyY - 50; // Head above body
const bodyRadius = 50;
const headRadius = 20;
const proximityRadius = 100; // Radius of real-time kill zone

class Particle {
  // ... (Particle class remains the same)
}

class Thought {
  // ... (Thought class remains the same)
}

class Blocker {
  // ... (Blocker class remains the same)
}

class Kill {
  // ... (Kill class remains the same)
}

function init() {
  // ... (Initialization remains the same)
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Body and Head
  ctx.beginPath();
  ctx.arc(bodyX, bodyY, bodyRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'lightblue';
  ctx.fill();

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  thoughts.forEach(thought => {
    thought.update();
    thought.draw();
  });

  blockers.forEach(blocker => {
    blocker.draw();
  });

  kills.forEach((kill, index) => {
    kill.update();
    kill.draw();
    if (kill.timer <= 0) {
      kills.splice(index, 1);
    }
  });

  // Real-time Kill Zone around body and head
  realTimeKill(bodyX, bodyY, proximityRadius);
  realTimeKill(headX, headY, proximityRadius);

  checkCollisions();
}

function realTimeKill(x, y, radius) {
  particles.forEach((particle, particleIndex) => {
    if (Math.sqrt((particle.x - x) ** 2 + (particle.y - y) ** 2) < radius) {
      particles.splice(particleIndex, 1);
    }
  });

  thoughts.forEach((thought, thoughtIndex) => {
    if (Math.sqrt((thought.x - x) ** 2 + (thought.y - y) ** 2) < radius) {
      thoughts.splice(thoughtIndex, 1);
    }
  });
}

function checkCollisions() {
  // ... (checkCollisions remains the same)
}

// Mouse movement to control body/head
canvas.addEventListener('mousemove', (event) => {
  bodyX = event.clientX;
  bodyY = event.clientY;
  headX = bodyX;
  headY = bodyY - 50;
});

canvas.addEventListener('click', (event) => {
  kills.push(new Kill(event.clientX, event.clientY));
});

init();
animate();
*/

/*new version and update*/


// JavaScript (app.js)

/*
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const thoughts = [];
const blockers = [];
const kills = [];

const particleCount = 100;
const thoughtCount = 20;
const blockerCount = 5;

const particleSpeed = 2;
const thoughtSpeed = 1;
const blockerSize = 30;
const killSize = 10;

// Body and Head Proximity
let bodyX = canvas.width / 2;
let bodyY = canvas.height / 2;
let headX = bodyX;
let headY = bodyY - 50;
const bodyRadius = 50;
const headRadius = 20;
const proximityRadius = 100;
const kickRadius = 150; // Radius for kick effect

class Particle {
  // ... (Particle class remains the same)
}

class Thought {
  // ... (Thought class remains the same)
}

class Blocker {
  // ... (Blocker class remains the same)
}

class Kill {
  // ... (Kill class remains the same)
}

function init() {
  // ... (Initialization remains the same)
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Body and Head
  ctx.beginPath();
  ctx.arc(bodyX, bodyY, bodyRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'lightblue';
  ctx.fill();

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  thoughts.forEach(thought => {
    thought.update();
    thought.draw();
  });

  blockers.forEach(blocker => {
    blocker.draw();
  });

  kills.forEach((kill, index) => {
    kill.update();
    kill.draw();
    if (kill.timer <= 0) {
      kills.splice(index, 1);
    }
  });

  // Real-time Kill Zone around body and head
  realTimeKill(bodyX, bodyY, proximityRadius);
  realTimeKill(headX, headY, proximityRadius);

  // Kick effect
  kickEffect(bodyX, bodyY, kickRadius);
  kickEffect(headX, headY, kickRadius);

  checkCollisions();
}

function realTimeKill(x, y, radius) {
  // ... (realTimeKill remains the same)
}

function kickEffect(x, y, radius) {
  particles.forEach((particle, particleIndex) => {
    const distance = Math.sqrt((particle.x - x) ** 2 + (particle.y - y) ** 2);
    if (distance < radius && distance > proximityRadius) {
      const angle = Math.atan2(particle.y - y, particle.x - x);
      particle.vx = Math.cos(angle) * 5; // Kick away
      particle.vy = Math.sin(angle) * 5;
    }
  });

  thoughts.forEach((thought, thoughtIndex) => {
    const distance = Math.sqrt((thought.x - x) ** 2 + (thought.y - y) ** 2);
    if (distance < radius && distance > proximityRadius) {
      const angle = Math.atan2(thought.y - y, thought.x - x);
      thought.vx = Math.cos(angle) * 3; // Kick away
      thought.vy = Math.sin(angle) * 3;
    }
  });
}

function checkCollisions() {
  // ... (checkCollisions remains the same)
}

// Mouse movement to control body/head
canvas.addEventListener('mousemove', (event) => {
  bodyX = event.clientX;
  bodyY = event.clientY;
  headX = bodyX;
  headY = bodyY - 50;
});

canvas.addEventListener('click', (event) => {
  kills.push(new Kill(event.clientX, event.clientY));
});

init();
animate();

*/

/*updated file*/

// JavaScript (app.js)
/*

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const thoughts = [];
const blockers = [];
const kills = [];

const particleCount = 100;
const thoughtCount = 20;
const blockerCount = 5;

const particleSpeed = 2;
const thoughtSpeed = 1;
const blockerSize = 30;
const killSize = 10;

// Body and Head Proximity
let bodyX = canvas.width / 2;
let bodyY = canvas.height / 2;
let headX = bodyX;
let headY = bodyY - 50;
const bodyRadius = 50;
const headRadius = 20;
const proximityRadius = 150; // Increased proximity radius
const kickRadius = 200; // Increased kick radius
const soundRadius = 250; // Radius for sound-based reactions

// Sound detection (placeholder - replace with actual audio input)
let soundLevel = 0; // Simulate sound level

class Particle {
  // ... (Particle class remains the same)
}

class Thought {
  // ... (Thought class remains the same)
}

class Blocker {
  // ... (Blocker class remains the same)
}

class Kill {
  // ... (Kill class remains the same)
}

function init() {
  // ... (Initialization remains the same)
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Body and Head
  ctx.beginPath();
  ctx.arc(bodyX, bodyY, bodyRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'lightblue';
  ctx.fill();

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  thoughts.forEach(thought => {
    thought.update();
    thought.draw();
  });

  blockers.forEach(blocker => {
    blocker.draw();
  });

  kills.forEach((kill, index) => {
    kill.update();
    kill.draw();
    if (kill.timer <= 0) {
      kills.splice(index, 1);
    }
  });

  // Stronger Proximity and Kick
  strongProximity(bodyX, bodyY, proximityRadius);
  strongProximity(headX, headY, proximityRadius);

  kickEffect(bodyX, bodyY, kickRadius);
  kickEffect(headX, headY, kickRadius);

  // Sound-based reactions
  soundReaction(bodyX, bodyY, soundRadius);
  soundReaction(headX, headY, soundRadius);

  checkCollisions();
}

function strongProximity(x, y, radius) {
  particles.forEach((particle, particleIndex) => {
    if (Math.sqrt((particle.x - x) ** 2 + (particle.y - y) ** 2) < radius) {
      particles.splice(particleIndex, 1);
    }
  });

  thoughts.forEach((thought, thoughtIndex) => {
    if (Math.sqrt((thought.x - x) ** 2 + (thought.y - y) ** 2) < radius) {
      thoughts.splice(thoughtIndex, 1);
    }
  });
}

function kickEffect(x, y, radius) {
  particles.forEach((particle, particleIndex) => {
    const distance = Math.sqrt((particle.x - x) ** 2 + (particle.y - y) ** 2);
    if (distance < radius && distance > proximityRadius) {
      const angle = Math.atan2(particle.y - y, particle.x - x);
      particle.vx = Math.cos(angle) * 8; // Stronger kick
      particle.vy = Math.sin(angle) * 8;
    }
  });

  thoughts.forEach((thought, thoughtIndex) => {
    const distance = Math.sqrt((thought.x - x) ** 2 + (thought.y - y) ** 2);
    if (distance < radius && distance > proximityRadius) {
      const angle = Math.atan2(thought.y - y, thought.x - x);
      thought.vx = Math.cos(angle) * 5; // Stronger kick
      thought.vy = Math.sin(angle) * 5;
    }
  });
}

function soundReaction(x, y, radius) {
  if (soundLevel > 0.5) { // Threshold for sound reaction
    particles.forEach((particle, particleIndex) => {
      if (Math.sqrt((particle.x - x) ** 2 + (particle.y - y) ** 2) < radius) {
        const angle = Math.atan2(particle.y - y, particle.x - x);
        particle.vx = Math.cos(angle) * 10 * soundLevel; // Stronger reaction based on sound
        particle.vy = Math.sin(angle) * 10 * soundLevel;
      }
    });

    thoughts.forEach((thought, thoughtIndex) => {
      if (Math.sqrt((thought.x - x) ** 2 + (thought.y - y) ** 2) < radius) {
        const angle = Math.atan2(thought.y - y, thought.x - x);
        thought.vx = Math.cos(angle) * 7 * soundLevel;
        thought.vy = Math.sin(angle) * 7 * soundLevel;
      }
    });
  }
}

function checkCollisions() {
  // ... (checkCollisions remains the same)
}

// Mouse movement to control body/head
canvas.addEventListener('mousemove', (event) => {
  bodyX = event.clientX;
  bodyY = event.clientY;
  headX = bodyX;
  headY = bodyY - 50;
});

canvas.addEventListener('click', (event) => {
  kills.push(new Kill(event.clientX, event.clientY));
});

// Simulate sound level (replace with actual audio input)
setInterval(() => {
  soundLevel = Math.random(); // Simulate fluctuating sound
}, 500);

init();
animate();
*/

/*Version updated Aurora - Vigil */


// JavaScript (app.js)

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const thoughts = [];
const blockers = [];
const kills = [];

const particleCount = 150; // Increased particle count
const thoughtCount = 30; // Increased thought count
const blockerCount = 8; // Increased blocker count

const particleSpeed = 2.5; // Slightly faster
const thoughtSpeed = 1.2; // Slightly faster
const blockerSize = 35; // Slightly larger blockers
const killSize = 12; // Slightly larger kills

let bodyX = canvas.width / 2;
let bodyY = canvas.height / 2;
let headX = bodyX;
let headY = bodyY - 60; // Increased head distance
const bodyRadius = 60; // Increased body radius
const headRadius = 25; // Increased head radius
const proximityRadius = 180; // Increased proximity radius
const kickRadius = 250; // Increased kick radius
const soundRadius = 300; // Increased sound radius

let soundLevel = 0;
let auraActive = false; // Aura activation state
let auraColor = 'rgba(0, 191, 255, 0.2)'; // Light blue aura

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 4 + 1; // Slightly larger particles
    this.vx = (Math.random() - 0.5) * particleSpeed;
    this.vy = (Math.random() - 0.5) * particleSpeed;
    this.opacity = 1; // For fade-out effect
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    if (this.opacity < 0.05) this.radius = 0; // if opacity is very low, make radius 0.
    this.opacity = Math.max(0, this.opacity - 0.01); // Fade out effect
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color.replace(')', `, ${this.opacity})`); // Apply opacity
    ctx.fill();
  }
}

// ... (Thought, Blocker, Kill classes remain similar)

function init() {
  // ... (Initialization remains similar)
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Aura Activation
  if (auraActive) {
    ctx.beginPath();
    ctx.arc(bodyX, bodyY, proximityRadius, 0, Math.PI * 2);
    ctx.fillStyle = auraColor;
    ctx.fill();
  }

  // Draw Body and Head (with subtle animation)
  const bodyScale = 1 + Math.sin(Date.now() / 500) * 0.02; // Subtle pulsing
  ctx.beginPath();
  ctx.arc(bodyX, bodyY, bodyRadius * bodyScale, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();

  const headScale = 1 + Math.cos(Date.now() / 700) * 0.03; // Subtle head animation
  ctx.beginPath();
  ctx.arc(headX, headY, headRadius * headScale, 0, Math.PI * 2);
  ctx.fillStyle = 'lightblue';
  ctx.fill();

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  thoughts.forEach(thought => {
    thought.update();
    thought.draw();
  });

  blockers.forEach(blocker => {
    blocker.draw();
  });

  kills.forEach((kill, index) => {
    kill.update();
    kill.draw();
    if (kill.timer <= 0) kills.splice(index, 1);
  });

  strongProximity(bodyX, bodyY, proximityRadius);
  strongProximity(headX, headY, proximityRadius);
  kickEffect(bodyX, bodyY, kickRadius);
  kickEffect(headX, headY, kickRadius);
  soundReaction(bodyX, bodyY, soundRadius);
  soundReaction(headX, headY, soundRadius);
  checkCollisions();
}

// ... (strongProximity, kickEffect, soundReaction, checkCollisions remain similar)

canvas.addEventListener('mousemove', (event) => {
  bodyX = event.clientX;
  bodyY = event.clientY;
  headX = bodyX;
  headY = bodyY - 60;
});

canvas.addEventListener('click', (event) => {
  kills.push(new Kill(event.clientX, event.clientY));
});

// Sound simulation
setInterval(() => {
  soundLevel = Math.random();
}, 500);

// Aura activation
document.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    auraActive = !auraActive;
  }
});

init();
animate();
