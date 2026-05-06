import palettes from '../data/palettes.json';

export interface ColorItem {
  name: string;
  hex: string;
  category: 'warm' | 'cool' | 'neutral';
}

export interface Outfit {
  id: string;
  top: ColorItem;
  bottom: ColorItem;
  outerwear: ColorItem;
  shoes: ColorItem;
  bag: ColorItem;
  styleNote: string;
}

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

// Color harmony rules
const harmonyRules = {
  monochromatic: (base: ColorItem, colors: ColorItem[]) => 
    colors.filter(c => c.category === base.category),
  
  complementary: (base: ColorItem, colors: ColorItem[]) => {
    if (base.category === 'warm') return colors.filter(c => c.category === 'cool');
    if (base.category === 'cool') return colors.filter(c => c.category === 'warm');
    return colors;
  },
  
  neutral: (base: ColorItem, colors: ColorItem[]) => 
    colors.filter(c => c.category === 'neutral' || c.category === base.category),
};

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateStyleNote(outfit: Outfit): string {
  const notes = [
    `Classic ${outfit.top.category} tones with ${outfit.bottom.name.toLowerCase()} create a polished look.`,
    `The ${outfit.outerwear.name.toLowerCase()} adds the perfect finishing touch.`,
    `${outfit.shoes.name} ground this outfit with effortless style.`,
    `A ${outfit.bag.name.toLowerCase()} completes the ensemble with sophistication.`,
    `This ${outfit.top.category}-toned combination feels fresh and modern.`,
    `Balance ${outfit.top.name.toLowerCase()} with neutral ${outfit.bottom.name.toLowerCase()} for versatility.`,
    `Layer with the ${outfit.outerwear.name.toLowerCase()} for dimension and warmth.`,
    `The color harmony between top and outerwear creates visual cohesion.`,
  ];
  return getRandomItem(notes);
}

export function generateOutfit(season: Season, preferredCategory?: 'warm' | 'cool' | 'neutral'): Outfit {
  const seasonData = palettes[season];
  const { colors } = seasonData;

  // Select base piece (top) based on preference if provided
  let top: ColorItem;
  if (preferredCategory) {
    const filtered = colors.tops.filter(t => t.category === preferredCategory);
    top = filtered.length > 0 ? getRandomItem(filtered) : getRandomItem(colors.tops);
  } else {
    top = getRandomItem(colors.tops);
  }

  // Generate harmonious combinations
  const harmonyType = getRandomItem(['monochromatic', 'complementary', 'neutral'] as const);
  
  let bottomOptions = colors.bottoms;
  let outerwearOptions = colors.outerwear;
  
  // Apply harmony rules for variety
  if (harmonyType === 'monochromatic') {
    bottomOptions = harmonyRules.monochromatic(top, colors.bottoms);
    outerwearOptions = harmonyRules.monochromatic(top, colors.outerwear);
  } else if (harmonyType === 'complementary') {
    bottomOptions = harmonyRules.complementary(top, colors.bottoms);
  } else {
    // neutral harmony - keep it safe
    bottomOptions = harmonyRules.neutral(top, colors.bottoms);
  }

  const bottom = getRandomItem(bottomOptions.length > 0 ? bottomOptions : colors.bottoms);
  const outerwear = getRandomItem(outerwearOptions.length > 0 ? outerwearOptions : colors.outerwear);
  const shoes = getRandomItem(colors.shoes);
  const bag = getRandomItem(colors.bags);

  const outfit: Outfit = {
    id: Math.random().toString(36).substr(2, 9),
    top,
    bottom,
    outerwear,
    shoes,
    bag,
    styleNote: '',
  };

  outfit.styleNote = generateStyleNote(outfit);

  return outfit;
}

export function generateOutfits(season: Season, count: number = 3, preferredCategory?: 'warm' | 'cool' | 'neutral'): Outfit[] {
  const outfits: Outfit[] = [];
  const seen = new Set<string>();

  let attempts = 0;
  const maxAttempts = count * 10;

  while (outfits.length < count && attempts < maxAttempts) {
    const outfit = generateOutfit(season, preferredCategory);
    const signature = `${outfit.top.hex}-${outfit.bottom.hex}-${outfit.outerwear.hex}`;
    
    if (!seen.has(signature)) {
      seen.add(signature);
      outfits.push(outfit);
    }
    attempts++;
  }

  return outfits;
}

export function getSeasons(): Season[] {
  return ['spring', 'summer', 'fall', 'winter'];
}

export function getSeasonData(season: Season) {
  return palettes[season];
}
