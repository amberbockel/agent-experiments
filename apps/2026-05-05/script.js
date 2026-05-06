// Color theory models with descriptions
const colorModels = {
    monochromatic: {
        name: 'Monochromatic',
        description: 'Uses variations in lightness and saturation of a single color. Creates a cohesive, harmonious look.',
        generate: (baseHue) => {
            return [
                { hue: baseHue, sat: 70, light: 25, role: 'Dark' },
                { hue: baseHue, sat: 60, light: 40, role: 'Medium Dark' },
                { hue: baseHue, sat: 50, light: 55, role: 'Base' },
                { hue: baseHue, sat: 40, light: 70, role: 'Light' },
                { hue: baseHue, sat: 30, light: 85, role: 'Very Light' }
            ];
        }
    },
    complementary: {
        name: 'Complementary',
        description: 'Uses colors opposite each other on the color wheel. Creates high contrast and vibrant designs.',
        generate: (baseHue) => {
            const complement = (baseHue + 180) % 360;
            return [
                { hue: baseHue, sat: 65, light: 45, role: 'Primary' },
                { hue: baseHue, sat: 55, light: 65, role: 'Primary Light' },
                { hue: complement, sat: 65, light: 45, role: 'Complement' },
                { hue: complement, sat: 55, light: 65, role: 'Complement Light' },
                { hue: baseHue, sat: 10, light: 50, role: 'Neutral' }
            ];
        }
    },
    analogous: {
        name: 'Analogous',
        description: 'Uses colors adjacent to each other on the color wheel. Creates serene and comfortable designs.',
        generate: (baseHue) => {
            return [
                { hue: (baseHue - 30 + 360) % 360, sat: 60, light: 50, role: 'Left' },
                { hue: baseHue, sat: 65, light: 45, role: 'Base' },
                { hue: (baseHue + 30) % 360, sat: 60, light: 50, role: 'Right' },
                { hue: baseHue, sat: 40, light: 70, role: 'Light Tint' },
                { hue: baseHue, sat: 70, light: 30, role: 'Dark Shade' }
            ];
        }
    },
    triadic: {
        name: 'Triadic',
        description: 'Uses three colors equally spaced on the color wheel. Creates vibrant, balanced designs.',
        generate: (baseHue) => {
            return [
                { hue: baseHue, sat: 65, light: 45, role: 'Primary' },
                { hue: (baseHue + 120) % 360, sat: 65, light: 45, role: 'Secondary' },
                { hue: (baseHue + 240) % 360, sat: 65, light: 45, role: 'Tertiary' },
                { hue: baseHue, sat: 30, light: 70, role: 'Light Tint' },
                { hue: baseHue, sat: 10, light: 25, role: 'Dark Neutral' }
            ];
        }
    },
    tetradic: {
        name: 'Tetradic (Square)',
        description: 'Uses four colors evenly spaced on the color wheel. Offers plenty of possibilities but requires balance.',
        generate: (baseHue) => {
            return [
                { hue: baseHue, sat: 65, light: 45, role: 'Primary' },
                { hue: (baseHue + 90) % 360, sat: 65, light: 45, role: 'Secondary' },
                { hue: (baseHue + 180) % 360, sat: 65, light: 45, role: 'Tertiary' },
                { hue: (baseHue + 270) % 360, sat: 65, light: 45, role: 'Quaternary' },
                { hue: baseHue, sat: 10, light: 60, role: 'Neutral' }
            ];
        }
    },
    'split-complementary': {
        name: 'Split Complementary',
        description: 'Uses a base color and two colors adjacent to its complement. Offers high contrast with more nuance.',
        generate: (baseHue) => {
            const complement = (baseHue + 180) % 360;
            return [
                { hue: baseHue, sat: 65, light: 45, role: 'Base' },
                { hue: (complement - 30 + 360) % 360, sat: 60, light: 50, role: 'Split Left' },
                { hue: (complement + 30) % 360, sat: 60, light: 50, role: 'Split Right' },
                { hue: baseHue, sat: 40, light: 70, role: 'Light Tint' },
                { hue: baseHue, sat: 10, light: 35, role: 'Dark Neutral' }
            ];
        }
    }
};

// HSL to Hex conversion
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = x => Math.round(255 * x).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`.toUpperCase();
}

// Generate palette
function generatePalette() {
    const modelKey = document.getElementById('model-select').value;
    const model = colorModels[modelKey];
    
    // Random base hue
    const baseHue = Math.floor(Math.random() * 360);
    
    // Generate colors
    const colors = model.generate(baseHue);
    
    // Update description
    document.getElementById('model-description').textContent = 
        `${model.name}: ${model.description}`;
    
    // Render palette
    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = '';
    
    colors.forEach(color => {
        const hex = hslToHex(color.hue, color.sat, color.light);
        
        const card = document.createElement('div');
        card.className = 'color-card';
        card.innerHTML = `
            <div class="color-swatch" style="background-color: ${hex}"></div>
            <div class="color-info">
                <div class="color-hex">${hex}</div>
                <div class="color-role">${color.role}</div>
            </div>
        `;
        
        card.addEventListener('click', () => copyToClipboard(hex));
        paletteContainer.appendChild(card);
    });
    
    // Store current palette
    window.currentPalette = {
        model: model.name,
        colors: colors.map(c => hslToHex(c.hue, c.sat, c.light))
    };
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`Copied ${text}`);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Export as JSON
function exportPalette() {
    if (!window.currentPalette) return;
    
    const dataStr = JSON.stringify(window.currentPalette, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `palette-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Copy all hex codes
function copyAllHex() {
    if (!window.currentPalette) return;
    
    const hexCodes = window.currentPalette.colors.join(', ');
    copyToClipboard(hexCodes);
}

// Save palette to localStorage
function savePalette() {
    if (!window.currentPalette) return;
    
    const saved = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    saved.push({
        ...window.currentPalette,
        timestamp: Date.now()
    });
    localStorage.setItem('savedPalettes', JSON.stringify(saved));
    
    renderSavedPalettes();
    showNotification('Palette saved!');
}

// Render saved palettes
function renderSavedPalettes() {
    const saved = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    const container = document.getElementById('saved-list');
    
    if (saved.length === 0) {
        container.innerHTML = '<p style="color: #666; font-size: 14px;">No saved palettes yet. Generate and save one to get started.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    saved.reverse().forEach((palette, index) => {
        const div = document.createElement('div');
        div.className = 'saved-palette';
        
        const swatches = palette.colors.map(color => 
            `<div class="saved-swatch" style="background-color: ${color}"></div>`
        ).join('');
        
        div.innerHTML = `
            <div class="saved-swatches">${swatches}</div>
            <div class="saved-model">${palette.model}</div>
            <div class="saved-actions">
                <button onclick="loadPalette(${saved.length - 1 - index})">Load</button>
                <button onclick="deletePalette(${saved.length - 1 - index})" class="secondary">Delete</button>
            </div>
        `;
        
        container.appendChild(div);
    });
}

// Load saved palette
function loadPalette(index) {
    const saved = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    const palette = saved[index];
    
    window.currentPalette = palette;
    
    // Find matching model key
    const modelKey = Object.keys(colorModels).find(key => 
        colorModels[key].name === palette.model
    );
    
    if (modelKey) {
        document.getElementById('model-select').value = modelKey;
        document.getElementById('model-description').textContent = 
            `${palette.model}: ${colorModels[modelKey].description}`;
    }
    
    // Render palette
    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = '';
    
    palette.colors.forEach((hex, i) => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.innerHTML = `
            <div class="color-swatch" style="background-color: ${hex}"></div>
            <div class="color-info">
                <div class="color-hex">${hex}</div>
                <div class="color-role">Color ${i + 1}</div>
            </div>
        `;
        
        card.addEventListener('click', () => copyToClipboard(hex));
        paletteContainer.appendChild(card);
    });
    
    showNotification('Palette loaded!');
}

// Delete saved palette
function deletePalette(index) {
    const saved = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    saved.splice(index, 1);
    localStorage.setItem('savedPalettes', JSON.stringify(saved));
    renderSavedPalettes();
    showNotification('Palette deleted');
}

// Event listeners
document.getElementById('generate-btn').addEventListener('click', () => {
    generatePalette();
    savePalette();
});

document.getElementById('export-btn').addEventListener('click', exportPalette);
document.getElementById('copy-btn').addEventListener('click', copyAllHex);

// Initialize
generatePalette();
renderSavedPalettes();
