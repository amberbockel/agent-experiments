'use client';

import { useState } from 'react';

// Bright Winter Color Palette
const COLORS = {
  // Icy & Cool
  ice_blue: { name: 'Ice Blue', hex: '#E0F7FA', category: 'neutral' },
  silver: { name: 'Silver', hex: '#C0C0C0', category: 'neutral' },
  charcoal: { name: 'Charcoal', hex: '#36454F', category: 'neutral' },
  pure_white: { name: 'Pure White', hex: '#FFFFFF', category: 'neutral' },
  true_black: { name: 'True Black', hex: '#000000', category: 'neutral' },
  
  // Bold & Bright
  electric_blue: { name: 'Electric Blue', hex: '#0096FF', category: 'bold' },
  hot_pink: { name: 'Hot Pink', hex: '#FF69B4', category: 'bold' },
  emerald: { name: 'Emerald', hex: '#50C878', category: 'bold' },
  royal_purple: { name: 'Royal Purple', hex: '#7851A9', category: 'bold' },
  
  // Soft Accents
  soft_pink: { name: 'Soft Pink', hex: '#FFB3D9', category: 'accent' },
  lavender: { name: 'Lavender', hex: '#E6E6FA', category: 'accent' },
  mint: { name: 'Mint', hex: '#98FF98', category: 'accent' },
};

interface OutfitPiece {
  name: string;
  hex: string;
  category: string;
}

interface Outfit {
  top: OutfitPiece;
  bottom: OutfitPiece;
  shoes: OutfitPiece;
  accessory: OutfitPiece;
}

// Simple outfit generator - Bright Winter palette
function generateOutfit(): Outfit {
  const colorArray = Object.values(COLORS);
  
  // Top: Bold or neutral
  const topColors = colorArray.filter(c => 
    c.category === 'bold' || c.category === 'neutral'
  );
  const top = topColors[Math.floor(Math.random() * topColors.length)];
  
  // Bottom: Neutral or complementary
  const bottomColors = colorArray.filter(c => 
    c.category === 'neutral' && c.name !== top.name
  );
  const bottom = bottomColors[Math.floor(Math.random() * bottomColors.length)];
  
  // Shoes: Neutral
  const shoeColors = [COLORS.true_black, COLORS.pure_white, COLORS.silver, COLORS.charcoal];
  const shoes = shoeColors[Math.floor(Math.random() * shoeColors.length)];
  
  // Accessory: Accent or bold
  const accessoryColors = colorArray.filter(c => 
    (c.category === 'accent' || c.category === 'bold') && 
    c.name !== top.name
  );
  const accessory = accessoryColors[Math.floor(Math.random() * accessoryColors.length)];
  
  return { top, bottom, shoes, accessory };
}

export default function Home() {
  const [outfit, setOutfit] = useState<Outfit | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate brief generation moment for smooth UX
    setTimeout(() => {
      setOutfit(generateOutfit());
      setIsGenerating(false);
    }, 300);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6" 
          style={{ background: 'var(--gray-50)' }}>
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3" 
              style={{ 
                color: 'var(--gray-900)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}>
            Daily Outfit
          </h1>
          <p className="text-sm" style={{ color: 'var(--gray-500)' }}>
            Bright Winter Color Palette
          </p>
        </header>

        {/* Outfit Card */}
        {outfit && (
          <div 
            className="mb-8 rounded-2xl overflow-hidden"
            style={{
              background: 'white',
              boxShadow: 'var(--shadow-lg)',
              animation: isGenerating ? 'none' : 'slideUp 300ms var(--ease-out)',
            }}
          >
            {/* Top */}
            <div className="relative h-48 flex items-end p-6"
                 style={{ 
                   background: `linear-gradient(180deg, ${outfit.top.hex} 0%, ${outfit.top.hex}dd 100%)`,
                   transition: 'all var(--duration-base) var(--ease-out)'
                 }}>
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-wider mb-1"
                     style={{ 
                       color: outfit.top.hex === '#FFFFFF' || outfit.top.hex === '#E0F7FA' || outfit.top.hex === '#FFB3D9' || outfit.top.hex === '#E6E6FA' || outfit.top.hex === '#98FF98' 
                         ? 'rgba(0,0,0,0.6)' 
                         : 'rgba(255,255,255,0.8)',
                       letterSpacing: '0.08em'
                     }}>
                  Top
                </div>
                <div className="text-2xl font-bold"
                     style={{ 
                       color: outfit.top.hex === '#FFFFFF' || outfit.top.hex === '#E0F7FA' || outfit.top.hex === '#FFB3D9' || outfit.top.hex === '#E6E6FA' || outfit.top.hex === '#98FF98'
                         ? 'rgba(0,0,0,0.9)' 
                         : 'white',
                       letterSpacing: '-0.02em'
                     }}>
                  {outfit.top.name}
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="relative h-40 flex items-end p-6"
                 style={{ 
                   background: `linear-gradient(180deg, ${outfit.bottom.hex} 0%, ${outfit.bottom.hex}dd 100%)`,
                   transition: 'all var(--duration-base) var(--ease-out)'
                 }}>
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-wider mb-1"
                     style={{ 
                       color: outfit.bottom.hex === '#FFFFFF' || outfit.bottom.hex === '#E0F7FA' || outfit.bottom.hex === '#FFB3D9' || outfit.bottom.hex === '#E6E6FA' || outfit.bottom.hex === '#98FF98'
                         ? 'rgba(0,0,0,0.6)' 
                         : 'rgba(255,255,255,0.8)',
                       letterSpacing: '0.08em'
                     }}>
                  Bottom
                </div>
                <div className="text-2xl font-bold"
                     style={{ 
                       color: outfit.bottom.hex === '#FFFFFF' || outfit.bottom.hex === '#E0F7FA' || outfit.bottom.hex === '#FFB3D9' || outfit.bottom.hex === '#E6E6FA' || outfit.bottom.hex === '#98FF98'
                         ? 'rgba(0,0,0,0.9)' 
                         : 'white',
                       letterSpacing: '-0.02em'
                     }}>
                  {outfit.bottom.name}
                </div>
              </div>
            </div>

            {/* Shoes & Accessory Row */}
            <div className="flex">
              <div className="relative flex-1 h-32 flex items-end p-5"
                   style={{ 
                     background: `linear-gradient(180deg, ${outfit.shoes.hex} 0%, ${outfit.shoes.hex}dd 100%)`,
                     transition: 'all var(--duration-base) var(--ease-out)'
                   }}>
                <div className="relative z-10">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1"
                       style={{ 
                         color: outfit.shoes.hex === '#FFFFFF' || outfit.shoes.hex === '#C0C0C0' || outfit.shoes.hex === '#E0F7FA'
                           ? 'rgba(0,0,0,0.6)' 
                           : 'rgba(255,255,255,0.8)',
                         letterSpacing: '0.08em'
                       }}>
                    Shoes
                  </div>
                  <div className="text-lg font-bold leading-tight"
                       style={{ 
                         color: outfit.shoes.hex === '#FFFFFF' || outfit.shoes.hex === '#C0C0C0' || outfit.shoes.hex === '#E0F7FA'
                           ? 'rgba(0,0,0,0.9)' 
                           : 'white',
                         letterSpacing: '-0.02em'
                       }}>
                    {outfit.shoes.name}
                  </div>
                </div>
              </div>

              <div className="relative flex-1 h-32 flex items-end p-5"
                   style={{ 
                     background: `linear-gradient(180deg, ${outfit.accessory.hex} 0%, ${outfit.accessory.hex}dd 100%)`,
                     transition: 'all var(--duration-base) var(--ease-out)'
                   }}>
                <div className="relative z-10">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1"
                       style={{ 
                         color: outfit.accessory.hex === '#FFFFFF' || outfit.accessory.hex === '#E0F7FA' || outfit.accessory.hex === '#FFB3D9' || outfit.accessory.hex === '#E6E6FA' || outfit.accessory.hex === '#98FF98'
                           ? 'rgba(0,0,0,0.6)' 
                           : 'rgba(255,255,255,0.8)',
                         letterSpacing: '0.08em'
                       }}>
                    Accent
                  </div>
                  <div className="text-lg font-bold leading-tight"
                       style={{ 
                         color: outfit.accessory.hex === '#FFFFFF' || outfit.accessory.hex === '#E0F7FA' || outfit.accessory.hex === '#FFB3D9' || outfit.accessory.hex === '#E6E6FA' || outfit.accessory.hex === '#98FF98'
                           ? 'rgba(0,0,0,0.9)' 
                           : 'white',
                         letterSpacing: '-0.02em'
                       }}>
                    {outfit.accessory.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!outfit && (
          <div className="text-center py-20 mb-8"
               style={{ 
                 animation: 'fadeIn 300ms var(--ease-out)',
               }}>
            <div className="text-7xl mb-5">✨</div>
            <p style={{ color: 'var(--gray-500)' }}>
              Generate your first outfit
            </p>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full rounded-2xl font-semibold text-lg"
          style={{
            background: 'var(--gray-900)',
            color: 'white',
            height: '52px',
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--duration-base) var(--ease-out)',
            opacity: isGenerating ? 0.6 : 1,
            cursor: isGenerating ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={(e) => {
            if (!isGenerating) {
              e.currentTarget.style.transform = 'scale(1.01)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseDown={(e) => {
            if (!isGenerating) {
              e.currentTarget.style.transform = 'scale(0.99)';
            }
          }}
          onMouseUp={(e) => {
            if (!isGenerating) {
              e.currentTarget.style.transform = 'scale(1.01)';
            }
          }}
        >
          {isGenerating ? 'Generating...' : 'Generate Outfit'}
        </button>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
