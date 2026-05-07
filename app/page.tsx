'use client';

import { useState } from 'react';
import brightWinterData from '../data/bright-winter-palette.json';
import trendData from '../data/trend-data-2026.json';

type StylePreference = 'edgy' | 'sporty' | 'glam' | 'minimal';
type Occasion = 'work' | 'weekend' | 'date_night';

interface ColorItem {
  name: string;
  hex: string;
  category: string;
  intensity: string;
}

interface Outfit {
  id: string;
  top: ColorItem;
  bottom: ColorItem;
  outerwear: ColorItem | null;
  shoes: ColorItem;
  accessories: ColorItem;
  occasion: Occasion;
  styleNote: string;
  weatherNote?: string;
}

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateOutfit(
  style: StylePreference,
  occasion: Occasion,
  temperature?: number
): Outfit {
  const palette = brightWinterData.bright_winter.colors;
  const stylePref = brightWinterData.style_preferences[style];
  const occasionGuide = trendData.occasion_guidelines[occasion];
  const trendGuide = trendData.trends[style];

  // Filter colors based on style preference and occasion
  const preferredColorNames = stylePref.preferred_colors;
  
  const tops = palette.tops.filter(c => 
    preferredColorNames.includes(c.name) && occasionGuide.tops.includes(c.name)
  );
  const bottoms = palette.bottoms.filter(c => 
    occasionGuide.bottoms.includes(c.name)
  );
  const shoes = palette.shoes.filter(c => 
    occasionGuide.shoes.includes(c.name)
  );
  const accessories = palette.accessories.filter(c => 
    occasionGuide.accessories.includes(c.name)
  );

  // Weather-based outerwear
  let outerwear: ColorItem | null = null;
  let weatherNote: string | undefined;
  
  if (temperature !== undefined && temperature < 70) {
    const weatherKey = temperature < 40 ? 'cold' : temperature < 55 ? 'cool' : 'mild';
    const weatherGuide = brightWinterData.weather_guidelines[weatherKey];
    
    if (weatherGuide.outerwear) {
      const outerwearColors = palette.outerwear.filter(c => 
        weatherGuide.outerwear?.includes(c.name)
      );
      outerwear = outerwearColors.length > 0 ? getRandomItem(outerwearColors) : null;
      weatherNote = weatherGuide.notes;
    }
  }

  const outfit: Outfit = {
    id: Math.random().toString(36).substr(2, 9),
    top: tops.length > 0 ? getRandomItem(tops) : getRandomItem(palette.tops),
    bottom: bottoms.length > 0 ? getRandomItem(bottoms) : getRandomItem(palette.bottoms),
    outerwear,
    shoes: shoes.length > 0 ? getRandomItem(shoes) : getRandomItem(palette.shoes),
    accessories: accessories.length > 0 ? getRandomItem(accessories) : getRandomItem(palette.accessories),
    occasion,
    styleNote: `${stylePref.styling_notes}. ${trendGuide.styling}`,
    weatherNote,
  };

  return outfit;
}

export default function Home() {
  const [style, setStyle] = useState<StylePreference>('minimal');
  const [occasion, setOccasion] = useState<Occasion>('work');
  const [currentOutfit, setCurrentOutfit] = useState<Outfit | null>(null);
  const [outfitHistory, setOutfitHistory] = useState<Outfit[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGenerate = () => {
    const newOutfit = generateOutfit(style, occasion, 50); // Mock temp for now
    setOutfitHistory([...outfitHistory, newOutfit]);
    setCurrentIndex(outfitHistory.length);
    setCurrentOutfit(newOutfit);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex < outfitHistory.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentOutfit(outfitHistory[nextIndex]);
    } else if (direction === 'right' && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentOutfit(outfitHistory[prevIndex]);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Daily Outfit
          </h1>
          <p className="text-sm text-gray-500">
            Bright Winter · Seasonal Color Analysis
          </p>
        </header>

        {/* Style Toggle */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Your Style
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(['edgy', 'sporty', 'glam', 'minimal'] as StylePreference[]).map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${style === s 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Occasion Toggle */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Occasion
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['work', 'weekend', 'date_night'] as Occasion[]).map((occ) => (
              <button
                key={occ}
                onClick={() => setOccasion(occ)}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${occasion === occ 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {occ === 'date_night' ? 'Date Night' : occ.charAt(0).toUpperCase() + occ.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-gray-900 text-white py-4 rounded-2xl font-semibold text-base shadow-lg hover:bg-gray-800 transition-all mb-12"
        >
          Generate Outfit
        </button>

        {/* Outfit Display */}
        {currentOutfit && (
          <div className="space-y-6">
            {/* Outfit Card */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-5">
              {/* Top */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: currentOutfit.top.hex }}
                />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Top</div>
                  <div className="font-semibold text-gray-900">{currentOutfit.top.name}</div>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: currentOutfit.bottom.hex }}
                />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Bottom</div>
                  <div className="font-semibold text-gray-900">{currentOutfit.bottom.name}</div>
                </div>
              </div>

              {/* Outerwear */}
              {currentOutfit.outerwear && (
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 flex-shrink-0"
                    style={{ backgroundColor: currentOutfit.outerwear.hex }}
                  />
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Outerwear</div>
                    <div className="font-semibold text-gray-900">{currentOutfit.outerwear.name}</div>
                  </div>
                </div>
              )}

              {/* Shoes */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: currentOutfit.shoes.hex }}
                />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Shoes</div>
                  <div className="font-semibold text-gray-900">{currentOutfit.shoes.name}</div>
                </div>
              </div>

              {/* Accessories */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: currentOutfit.accessories.hex }}
                />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Accessories</div>
                  <div className="font-semibold text-gray-900">{currentOutfit.accessories.name}</div>
                </div>
              </div>
            </div>

            {/* Styling Notes */}
            <div className="bg-blue-50 rounded-2xl p-5">
              <div className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">
                Styling Note
              </div>
              <p className="text-sm text-blue-800 leading-relaxed">
                {currentOutfit.styleNote}
              </p>
              {currentOutfit.weatherNote && (
                <p className="text-sm text-blue-700 leading-relaxed mt-3 italic">
                  {currentOutfit.weatherNote}
                </p>
              )}
            </div>

            {/* Navigation */}
            {outfitHistory.length > 1 && (
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => handleSwipe('right')}
                  disabled={currentIndex === 0}
                  className="text-sm text-gray-500 disabled:opacity-30"
                >
                  ← Previous
                </button>
                <div className="text-xs text-gray-400">
                  {currentIndex + 1} / {outfitHistory.length}
                </div>
                <button
                  onClick={() => handleSwipe('left')}
                  disabled={currentIndex === outfitHistory.length - 1}
                  className="text-sm text-gray-500 disabled:opacity-30"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!currentOutfit && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-gray-500">
              Select your style and occasion, then generate your first outfit
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
