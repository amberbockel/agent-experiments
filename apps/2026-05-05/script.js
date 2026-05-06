// Trending palettes from Coolors.co (expanded list)
const trendingPalettes = [
    { name: 'Olive Garden Feast', colors: ['#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25'] },
    { name: 'Pastel Dreamland Adventure', colors: ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'] },
    { name: 'Sunny Beach Day', colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'] },
    { name: 'Golden Summer Fields', colors: ['#CCD5AE', '#E9EDC9', '#FEFAE0', '#FAEDCD', '#D4A373'] },
    { name: 'Fiery Ocean', colors: ['#780000', '#C1121F', '#FDF0D5', '#003049', '#669BBC'] },
    { name: 'Watermelon Sorbet', colors: ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'] },
    { name: 'Ocean Blue Serenity', colors: ['#03045E', '#023E8A', '#0077B6', '#0096C7', '#00B4D8'] },
    { name: 'Peachy Delight', colors: ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'] },
    { name: 'Crimson Hues', colors: ['#250902', '#38040E', '#640D14', '#800E13', '#AD2831'] },
    { name: 'Bold Berry', colors: ['#F9DBBD', '#FFA5AB', '#DA627D', '#A53860', '#450920'] },
    { name: 'Refreshing Summer Fun', colors: ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500'] },
    { name: 'Ocean Breeze', colors: ['#03045E', '#0077B6', '#00B4D8', '#90E0EF', '#CAF0F8'] },
    { name: 'Soft Sand', colors: ['#EDEDE9', '#D6CCC2', '#F5EBE0', '#E3D5CA', '#D5BDAF'] },
    { name: 'Pastel Rainbow', colors: ['#70D6FF', '#FF70A6', '#FF9770', '#FFD670', '#E9FF70'] },
    { name: 'Autumn Harvest', colors: ['#6F1D1B', '#BB9457', '#432818', '#99582A', '#FFE6A7'] },
    { name: 'Ocean Pearl Delight', colors: ['#006D77', '#83C5BE', '#EDF6F9', '#FFDDD2', '#E29578'] },
    { name: 'Dark Sunset', colors: ['#335C67', '#FFF3B0', '#E09F3E', '#9E2A2B', '#540B0E'] },
    { name: 'Earthy Forest Hues', colors: ['#DAD7CD', '#A3B18A', '#588157', '#3A5A40', '#344E41'] },
    { name: 'Fresh Greens', colors: ['#386641', '#6A994E', '#A7C957', '#F2E8CF', '#BC4749'] },
    { name: 'Summer Ocean Breeze', colors: ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'] },
    // Additional trending palettes
    { name: 'Black & Gold Elegance', colors: ['#000000', '#14213D', '#FCA311', '#E5E5E5', '#FFFFFF'] },
    { name: 'Soft Lavender', colors: ['#22223B', '#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4'] },
    { name: 'Muted Earthy Tones', colors: ['#FFCDB2', '#FFB4A2', '#E5989B', '#B5838D', '#6D6875'] },
    { name: 'Golden Twilight', colors: ['#000814', '#001D3D', '#003566', '#FFC300', '#FFD60A'] },
    { name: 'Bright Green', colors: ['#004B23', '#006400', '#007200', '#008000', '#38B000'] },
    { name: 'Cool Coastal Vibes', colors: ['#2B2D42', '#8D99AE', '#EDF2F4', '#EF233C', '#D90429'] },
    { name: 'Fiery Red Sunset', colors: ['#03071E', '#370617', '#6A040F', '#9D0208', '#D00000'] },
    { name: 'Vibrant Color Fiesta', colors: ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'] },
    { name: 'Bold Hues', colors: ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'] },
    { name: 'Neutral Harmony Bliss', colors: ['#F4F1DE', '#E07A5F', '#3D405B', '#81B29A', '#F2CC8F'] },
    { name: 'Summer Sunset', colors: ['#FF6B35', '#F7C59F', '#EFEFD0', '#004E89', '#1A659E'] },
    { name: 'Soft Pink Delight', colors: ['#FFE5EC', '#FFC2D1', '#FFB3C6', '#FF8FAB', '#FB6F92'] },
    { name: 'Vivid Nightfall', colors: ['#10002B', '#240046', '#3C096C', '#5A189A', '#7B2CBF'] },
    { name: 'Neutral Earth Tones', colors: ['#0A0908', '#22333B', '#EAE0D5', '#C6AC8F', '#5E503F'] },
    { name: 'Sunset Shades', colors: ['#F7B267', '#F79D65', '#F4845F', '#F27059', '#F25C54'] },
    { name: 'Warm Autumn Glow', colors: ['#003049', '#D62828', '#F77F00', '#FCBF49', '#EAE2B7'] },
    { name: 'Meadow Green', colors: ['#D9ED92', '#B5E48C', '#99D98C', '#76C893', '#52B69A'] },
    { name: 'Rustic Charm', colors: ['#FFFCF2', '#CCC5B9', '#403D39', '#252422', '#EB5E28'] },
    { name: 'Rose Petal', colors: ['#880D1E', '#DD2D4A', '#F26A8D', '#F49CBB', '#CBEEF3'] },
    { name: 'Soft Rainbow', colors: ['#FBF8CC', '#FDE4CF', '#FFCFD2', '#F1C0E8', '#CFBAF0'] }
];

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

// Hex to HSL conversion
function hexToHsl(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return { h: 0, s: 50, l: 50 };
    
    let r = parseInt(result[1], 16) / 255;
    let g = parseInt(result[2], 16) / 255;
    let b = parseInt(result[3], 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

// Generate palette from base color
function generatePalette(usePickedColor = false) {
    const modelKey = document.getElementById('model-select').value;
    const model = colorModels[modelKey];
    
    let baseHue;
    if (usePickedColor) {
        const pickedColor = document.getElementById('color-picker').value;
        const hsl = hexToHsl(pickedColor);
        baseHue = hsl.h;
    } else {
        // Random base hue
        baseHue = Math.floor(Math.random() * 360);
        // Update color picker to match
        document.getElementById('color-picker').value = hslToHex(baseHue, 60, 50);
    }
    
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
        container.innerHTML = '<p style="color: var(--text-muted); font-size: 14px;">No saved palettes yet. Generate and save one to get started.</p>';
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

// Load trending palette
function loadTrendingPalette(index) {
    const palette = trendingPalettes[index];
    
    window.currentPalette = {
        model: palette.name,
        colors: palette.colors
    };
    
    document.getElementById('model-description').textContent = 
        `Trending: ${palette.name}`;
    
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
    
    // Scroll to generated palette
    document.getElementById('palette').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Render trending palettes
function renderTrendingPalettes() {
    const container = document.getElementById('trending-list');
    container.innerHTML = '';
    
    trendingPalettes.forEach((palette, index) => {
        const div = document.createElement('div');
        div.className = 'trending-palette';
        div.onclick = () => loadTrendingPalette(index);
        
        const swatches = palette.colors.map(color => 
            `<div class="trending-swatch" style="background-color: ${color}"></div>`
        ).join('');
        
        div.innerHTML = `
            <div class="trending-swatches">${swatches}</div>
            <div class="trending-info">
                <div class="trending-name">${palette.name}</div>
                <div class="trending-load">Click to load</div>
            </div>
        `;
        
        container.appendChild(div);
    });
}

// Theme toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Event listeners
document.getElementById('generate-btn').addEventListener('click', () => {
    generatePalette(true); // Use picked color
    savePalette();
});

document.getElementById('random-btn').addEventListener('click', () => {
    generatePalette(false); // Random
    savePalette();
});

document.getElementById('color-picker').addEventListener('input', () => {
    generatePalette(true); // Live update
});

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

document.getElementById('export-btn').addEventListener('click', exportPalette);
document.getElementById('copy-btn').addEventListener('click', copyAllHex);

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Initialize
generatePalette(true); // Use default color from picker
renderSavedPalettes();
renderTrendingPalettes();
