'use client';

import { useState } from 'react';
import { Season, Outfit, generateOutfits, getSeasons, getSeasonData } from '@/lib/outfitGenerator';

export default function Home() {
  const [selectedSeason, setSelectedSeason] = useState<Season>('spring');
  const [preferredTone, setPreferredTone] = useState<'warm' | 'cool' | 'neutral' | 'any'>('any');
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const generated = generateOutfits(
        selectedSeason, 
        3, 
        preferredTone === 'any' ? undefined : preferredTone
      );
      setOutfits(generated);
      setIsGenerating(false);
    }, 300);
  };

  const seasons = getSeasons();
  const seasonData = getSeasonData(selectedSeason);

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
            Daily Outfit Planner
          </h1>
          <p className="text-gray-600 text-lg">
            Create perfectly coordinated outfits with seasonal color palettes
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Season Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Season
              </label>
              <div className="grid grid-cols-2 gap-3">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      selectedSeason === season
                        ? 'bg-gradient-to-r from-rose-500 to-blue-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {season.charAt(0).toUpperCase() + season.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone Preference */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Preferred Tone
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['any', 'warm', 'cool', 'neutral'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setPreferredTone(tone as any)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      preferredTone === tone
                        ? 'bg-gradient-to-r from-rose-500 to-blue-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tone.charAt(0).toUpperCase() + tone.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Season Description */}
          <div className="mb-6 p-4 bg-gradient-to-r from-rose-50 to-blue-50 rounded-xl">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">{seasonData.name}:</span> {seasonData.description}
            </p>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-rose-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating...' : 'Generate Outfits'}
          </button>
        </div>

        {/* Outfit Results */}
        {outfits.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {outfits.map((outfit, index) => (
              <div key={outfit.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-rose-100 to-blue-100 p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Outfit {index + 1}
                  </h3>
                  <p className="text-sm text-gray-600 italic">{outfit.styleNote}</p>
                </div>

                <div className="p-6 space-y-4">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                        style={{ backgroundColor: outfit.top.hex }}
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Top</div>
                        <div className="font-semibold text-gray-800">{outfit.top.name}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {outfit.top.category}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                        style={{ backgroundColor: outfit.bottom.hex }}
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Bottom</div>
                        <div className="font-semibold text-gray-800">{outfit.bottom.name}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {outfit.bottom.category}
                    </span>
                  </div>

                  {/* Outerwear */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                        style={{ backgroundColor: outfit.outerwear.hex }}
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Outerwear</div>
                        <div className="font-semibold text-gray-800">{outfit.outerwear.name}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {outfit.outerwear.category}
                    </span>
                  </div>

                  {/* Shoes */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                        style={{ backgroundColor: outfit.shoes.hex }}
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Shoes</div>
                        <div className="font-semibold text-gray-800">{outfit.shoes.name}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {outfit.shoes.category}
                    </span>
                  </div>

                  {/* Bag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg shadow-md border-2 border-gray-200"
                        style={{ backgroundColor: outfit.bag.hex }}
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Bag</div>
                        <div className="font-semibold text-gray-800">{outfit.bag.name}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {outfit.bag.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {outfits.length === 0 && !isGenerating && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👗</div>
            <p className="text-gray-500 text-lg">
              Select your preferences and click Generate Outfits to get started
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
