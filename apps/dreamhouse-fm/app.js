// Dreamhouse FM - Emotional Space Simulator
// MVP: Burnout Recovery Scenario

// Three.js Scene Setup
let scene, camera, renderer, room;
let lightWarmth = 50, lightIntensity = 50;

function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Camera
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 1.6, 3);

    // Renderer
    const canvas = document.getElementById('canvas');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // Room
    createRoom();

    // Lighting
    updateLighting();

    // Controls
    attachControls();

    // Render
    animate();
}

function createRoom() {
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(5, 5);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x4a4a4a,
        roughness: 0.8
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls
    const wallMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xe0e0e0,
        roughness: 0.9
    });

    // Back wall
    const backWall = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 3),
        wallMaterial
    );
    backWall.position.z = -2.5;
    backWall.position.y = 1.5;
    scene.add(backWall);

    // Left wall
    const leftWall = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 3),
        wallMaterial
    );
    leftWall.position.x = -2.5;
    leftWall.position.y = 1.5;
    leftWall.rotation.y = Math.PI / 2;
    scene.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 3),
        wallMaterial
    );
    rightWall.position.x = 2.5;
    rightWall.position.y = 1.5;
    rightWall.rotation.y = -Math.PI / 2;
    scene.add(rightWall);

    // Simple bed (placeholder)
    const bedGeometry = new THREE.BoxGeometry(1.5, 0.3, 2);
    const bedMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x8a8a8a,
        roughness: 0.7
    });
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(-1.5, 0.4, -1);
    bed.castShadow = true;
    scene.add(bed);

    // Simple desk (placeholder)
    const deskGeometry = new THREE.BoxGeometry(1.2, 0.05, 0.6);
    const deskMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x6a6a6a,
        roughness: 0.6
    });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(1.5, 0.8, 0);
    desk.castShadow = true;
    scene.add(desk);

    room = { floor, walls: [backWall, leftWall, rightWall], bed, desk };
}

function updateLighting() {
    // Remove existing lights
    scene.children = scene.children.filter(child => !(child instanceof THREE.Light));

    // Calculate color temperature
    const warmth = lightWarmth / 100;
    const r = 1;
    const g = 0.8 + (warmth * 0.2);
    const b = 0.6 + (warmth * 0.1);
    const lightColor = new THREE.Color(r, g, b);

    // Ambient light
    const ambient = new THREE.AmbientLight(lightColor, 0.3 + (lightIntensity / 100) * 0.3);
    scene.add(ambient);

    // Key light (ceiling)
    const keyLight = new THREE.PointLight(lightColor, lightIntensity / 100, 10);
    keyLight.position.set(0, 2.5, 0);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Soft fill light
    const fillLight = new THREE.PointLight(lightColor, (lightIntensity / 100) * 0.3, 8);
    fillLight.position.set(-2, 1, 2);
    scene.add(fillLight);
}

function updateWallColor(color) {
    const colorMap = {
        'white': 0xe0e0e0,
        'warm-beige': 0xd9c9b3,
        'soft-gray': 0xb0b0b0,
        'sage-green': 0xa8b5a0,
        'dusty-blue': 0x9bb0c1
    };

    const wallColor = colorMap[color] || 0xe0e0e0;
    room.walls.forEach(wall => {
        wall.material.color.setHex(wallColor);
    });
}

function attachControls() {
    // Lighting warmth
    document.getElementById('warmth').addEventListener('input', (e) => {
        lightWarmth = parseInt(e.target.value);
        document.getElementById('warmth-value').textContent = lightWarmth + '%';
        updateLighting();
    });

    // Lighting intensity
    document.getElementById('intensity').addEventListener('input', (e) => {
        lightIntensity = parseInt(e.target.value);
        document.getElementById('intensity-value').textContent = lightIntensity + '%';
        updateLighting();
    });

    // Clutter level
    document.getElementById('clutter').addEventListener('input', (e) => {
        const clutterValue = parseInt(e.target.value);
        document.getElementById('clutter-value').textContent = clutterValue + '%';
        // Visual clutter representation would go here
    });

    // Wall color
    document.getElementById('wall-color').addEventListener('change', (e) => {
        updateWallColor(e.target.value);
    });

    // Window resize
    window.addEventListener('resize', () => {
        camera.aspect = (window.innerWidth * 0.7) / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    });
}

function animate() {
    requestAnimationFrame(animate);
    
    // Gentle camera sway (ambient motion)
    camera.position.x = Math.sin(Date.now() * 0.0001) * 0.05;
    camera.lookAt(0, 1, 0);
    
    renderer.render(scene, camera);
}

// Analyze Space Function (connects to Claude API)
async function analyzeSpace() {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.innerHTML = '<div class="loading">Analyzing emotional atmosphere</div>';

    // Gather current space parameters
    const spaceData = {
        warmth: document.getElementById('warmth').value,
        intensity: document.getElementById('intensity').value,
        clutter: document.getElementById('clutter').value,
        wallColor: document.getElementById('wall-color').value,
        materiality: document.getElementById('materiality').value,
        sound: document.getElementById('sound').value
    };

    // Convert to human-readable descriptions
    const lightingDesc = `${spaceData.warmth > 60 ? 'Warm' : spaceData.warmth < 40 ? 'Cool' : 'Neutral'} toned, ${spaceData.intensity > 60 ? 'bright' : spaceData.intensity < 40 ? 'dim' : 'moderate'} intensity`;
    const clutterDesc = spaceData.clutter > 70 ? 'High clutter (many visible items)' : spaceData.clutter < 30 ? 'Minimal (very few items)' : 'Moderate';

    const wallColorMap = {
        'white': 'White walls (neutral, clean)',
        'warm-beige': 'Warm beige walls (cozy, grounded)',
        'soft-gray': 'Soft gray walls (calm, subtle)',
        'sage-green': 'Sage green walls (natural, soothing)',
        'dusty-blue': 'Dusty blue walls (cool, serene)'
    };

    const materialityMap = {
        'minimal-metal': 'Minimal aesthetic (metal frames, glass surfaces)',
        'mixed': 'Mixed materials (some wood, some metal)',
        'warm-wood': 'Warm materials (wood furniture, fabric textures)'
    };

    const soundMap = {
        'traffic': 'Urban traffic noise (no sound dampening)',
        'minimal': 'Quiet (minimal ambient sound)',
        'gentle-ambient': 'Gentle ambient soundscape',
        'nature': 'Nature sounds (birds, rain, wind)'
    };

    // Build analysis prompt
    const prompt = `You are an expert in environmental psychology and interior design.

Character Context:
Morgan is a 34-year-old product designer recovering from severe burnout. They took medical leave 3 months ago. Currently experiencing exhaustion, overwhelm, guilt about rest, and hypervigilance. They need permission to rest, sensory calm, emotional safety, and gentle reintroduction to creative joy.

Current Space Description:
- Lighting: ${lightingDesc}
- Wall Color: ${wallColorMap[spaceData.wallColor]}
- Materiality: ${materialityMap[spaceData.materiality]}
- Sound Environment: ${soundMap[spaceData.sound]}
- Clutter Level: ${clutterDesc}

Analyze this space for Morgan's emotional recovery needs.

Provide feedback in three parts:

1. **Emotional Atmosphere** (2-3 sentences): How would this space make Morgan feel?

2. **Behavioral Prediction** (3-4 sentences): How would Morgan use this space over the next 7 days?

3. **Design Recommendations** (3-5 specific suggestions): What changes would better support emotional healing?

Be empathetic, concrete, and focus on emotional outcomes (not just aesthetics).`;

    try {
        // This is a placeholder for the actual API call
        // In production, this would call Claude via your backend
        
        // Simulated response for MVP testing
        const mockResponse = await simulateAnalysis(spaceData);
        
        displayFeedback(mockResponse);
    } catch (error) {
        feedbackEl.innerHTML = '<div class="loading">Error analyzing space. Please try again.</div>';
        console.error(error);
    }
}

// Simulated analysis (replace with real Claude API call)
async function simulateAnalysis(spaceData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const warmth = parseInt(spaceData.warmth);
            const intensity = parseInt(spaceData.intensity);
            const clutter = parseInt(spaceData.clutter);

            let atmosphere, behavior, recommendations;

            // Dynamic feedback based on actual parameters
            if (warmth < 40 && intensity > 60) {
                atmosphere = "This room feels alert and clinical rather than restful. The cool, bright lighting keeps Morgan's nervous system in 'on' mode, making it difficult to downregulate from hypervigilance. While the visual clarity might feel initially productive, it works against the goal of emotional recovery.";
            } else if (warmth > 60 && intensity < 40) {
                atmosphere = "This space creates a gentle, contained feeling. The warm, dim lighting signals safety and permission to rest. Morgan would likely feel the physical tension in their shoulders ease slightly upon entering. The softness reduces decision fatigue and cognitive load.";
            } else {
                atmosphere = "This room sits in a neutral middle ground. It's not actively harmful, but it's also not particularly healing. Morgan might use it functionally but wouldn't feel emotionally drawn to spend time here. It lacks both harshness and warmth.";
            }

            if (clutter > 60) {
                behavior = "Over the first few days, Morgan would likely avoid this room during daylight hours. The visible clutter acts as a constant reminder of unfinished obligations, triggering guilt spirals. They might tidy compulsively or, more likely, simply close the door and work from the couch. Sleep quality would remain poor due to the mental load the space carries.";
            } else if (clutter < 30 && spaceData.materiality === 'minimal-metal') {
                behavior = "Morgan would find this room emotionally cold. While the lack of clutter reduces overwhelm, the stark minimalism feels more like a waiting room than a refuge. They'd sleep here but wouldn't linger. By week two, the emotional distance of the space might increase feelings of isolation.";
            } else {
                behavior = "Morgan would cautiously begin using this space for rest, though it might take 3-4 days to feel truly comfortable. The balance of calm and warmth would support gradual emotional safety. By the end of the week, they might start bringing a sketchbook in — not to 'be productive,' but because the space no longer punishes creativity.";
            }

            recommendations = [
                warmth < 50 ? "Increase lighting warmth — warm tones (2700K-3000K) signal safety and support cortisol regulation for someone in recovery" : "Lighting warmth is good; maintain this level to support rest",
                intensity > 60 ? "Reduce overhead lighting intensity — install a bedside lamp with warm, dimmable bulbs for layered lighting control" : "Consider adding one more light source (bedside lamp) to create zones within the room",
                clutter > 50 ? "Create a 'project holding zone' (basket or closed cabinet) to contain unfinished items — out of sight reduces guilt without abandoning them" : "Current clutter level supports recovery; add one meaningful personal object (not productivity-related)",
                spaceData.materiality === 'minimal-metal' ? "Introduce soft textures (wool throw, linen bedding) to add tactile warmth and grounding" : "Material warmth is supporting recovery",
                "Add a small 'permission corner' — a cozy chair with no function except sitting and being — to practice rest without guilt"
            ];

            resolve({
                atmosphere,
                behavior,
                recommendations: recommendations.filter((r, i) => i < 5)
            });
        }, 1500);
    });
}

function displayFeedback(response) {
    const feedbackEl = document.getElementById('feedback');
    
    feedbackEl.innerHTML = `
        <h2>Emotional Analysis</h2>
        
        <div class="feedback-section">
            <h3>Emotional Atmosphere</h3>
            <p>${response.atmosphere}</p>
        </div>

        <div class="feedback-section">
            <h3>Behavioral Prediction</h3>
            <p>${response.behavior}</p>
        </div>

        <div class="feedback-section">
            <h3>Design Recommendations</h3>
            <ul>
                ${response.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
