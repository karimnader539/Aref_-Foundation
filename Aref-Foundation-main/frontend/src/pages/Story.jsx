import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Story = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full overflow-x-hidden pt-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:h-[80vh] flex flex-col items-center justify-center -mt-24 px-4 sm:px-6 md:px-container-margin overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="interior of a luxury dim lit fine dining restaurant" className="w-full h-full object-cover opacity-40 filter grayscale-[30%] blur-[2px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvYiLp3LRoCx8WmT0fifLRH-UlCbutPpMBECkkNibh6WIm7WOqV_wvT2k49HFzM3guDkC9NsXO51YxBBcmyQHi_IB014D9Yj0B9zglxvBlhYK1Qh4HAR2aRljnDhfzNeSCOxaep1OUr5NDoRGyTvmyN-8NC2KpqdXGugbIuodD2M58dic7ssK5bW-nWSNQSAaHxH9_LLc5kfAV-mEigD1HrybdEQIPU3CdGFuRo8wqCFZABuSlyIyyu5PB7O51U6ulapdgcP5jcd8t" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent dark:from-[#0b0c0d] dark:via-[#0b0c0d]/80"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-stack-md pt-24 sm:pt-32 md:pt-36">
          <img alt="A.F Brand Logo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 sm:mb-6 object-contain opacity-90 drop-shadow-lg" src="/story-logo.png" />
          <h1 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-brand-gold text-shadow-sm tracking-tight text-shimmer">Curated Excellence.</h1>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant dark:text-zinc-300 max-w-2xl mt-2 sm:mt-4 tracking-wide leading-relaxed">
            We believe that true luxury is found in the details. A symphony of precise culinary execution, architectural poetry, and anticipatory service.
          </p>
          <div className="mt-8 sm:mt-12 h-[60px] sm:h-[100px] w-[1px] bg-gradient-to-b from-primary/50 to-transparent"></div>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="w-full py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-surface-container-lowest dark:bg-zinc-950/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-center">
          <div className="md:col-span-6 flex flex-col gap-stack-md order-2 md:order-1">
            <span className="font-label-caps text-label-caps text-primary dark:text-brand-gold tracking-[0.3em] uppercase"></span>
            <h2 className="font-headline-md text-3xl sm:text-4xl md:text-headline-md text-on-background dark:text-white">OUR STORY</h2>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed">
              For me, excellence has never been a destination—it has always been a lifelong commitment. From the very beginning of my career, I made a promise to myself that every project carrying our name would stand as a symbol of quality, elegance, and uncompromising craftsmanship. This philosophy has guided every decision we have made and every milestone we have achieved.
            </p>

            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed mb-4">
                Our journey began internationally in France in 1979, where the foundations of our vision were first established. Driven by experience, passion, and an unwavering dedication to perfection, we expanded our work to Egypt in 1990, bringing with us the same international standards that had shaped our success abroad.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed mb-4">
                Since then, we have proudly delivered a remarkable portfolio of projects that reflect our commitment to excellence. From prestigious developments along the breathtaking shores of the Red Sea to distinguished projects in the heart of Maadi, Cairo, every achievement has been built on precision, innovation, and attention to the finest details. Each completed project has strengthened our reputation and reinforced the trust our clients place in us.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed mb-4">
                One of the defining milestones in our journey was the opening of the Flistone Marsa Alam Project in 2002, a landmark development that showcased our ability to transform ambitious visions into reality while maintaining the highest standards of design, execution, and quality.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed mb-4">
                Beyond construction and development, our passion for excellence has also left a lasting impact on the hospitality industry. Through dedication, creativity, and relentless hard work, we successfully developed and elevated 14 restaurants, transforming them into some of the most recognized and respected dining destinations in Egypt. Their success stands as a testament to our belief that true quality is reflected not only in structures, but also in unforgettable experiences.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed mb-4">
                Our vision has never been limited to construction and hospitality alone. Over the years, we have also expanded our expertise into both the educational and artistic sectors, contributing to projects that promote learning, creativity, and cultural development. This diversification reflects our belief that building lasting value extends beyond physical spaces—it also means investing in knowledge, innovation, and the arts.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed mb-4">
                Today, after more than four decades of dedication and continuous growth, our story is not merely measured by the number of projects we have completed, but by the legacy we have built. Every building, every restaurant, and every development represents a promise fulfilled—a promise that quality will never be compromised, excellence will never be accidental, and every project we deliver will continue to inspire confidence for generations to come.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 leading-relaxed">
                Our history is written through achievement, our reputation is built on trust, and our future remains driven by the same principle that started it all: to create timeless projects defined by excellence, sophistication, and enduring value.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 sm:mt-8 flex items-center gap-4 group cursor-pointer bg-transparent border-none text-left p-0 focus:outline-none"
            >
              <span className="w-12 h-[1px] bg-primary dark:bg-brand-gold group-hover:w-24 transition-all duration-700 ease-in-out"></span>
              <span className="font-label-caps text-label-caps text-primary dark:text-brand-gold uppercase tracking-[0.2em]">
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
            </button>
          </div>
          <div className="md:col-span-6 relative order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container dark:bg-zinc-800 rounded-xl shadow-xl">
              <img alt="Founder portrait" className="w-full h-full object-cover" src="/founder.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center py-8 sm:py-16 bg-surface-container-lowest dark:bg-zinc-950/60">
        <div className="w-px h-16 sm:h-24 bg-primary/20 dark:bg-brand-gold/30 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-primary dark:bg-brand-gold"></div>
        </div>
      </div>

      {/* The Art of Selection */}
      <section className="w-full py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin bg-background dark:bg-[#0b0c0d]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-16">
          <div className="flex flex-col items-center text-center gap-stack-sm max-w-2xl mx-auto">
            <span className="font-label-caps text-label-caps text-primary dark:text-brand-gold tracking-[0.3em] uppercase">Methodology</span>
            <h2 className="font-headline-md text-3xl sm:text-4xl md:text-headline-md text-on-background dark:text-white">The Art of Selection</h2>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-300 mt-2 sm:mt-4">
              Induction into the A.F portfolio is a rigorous, uncompromising process. We evaluate on three immutable pillars, ensuring only the absolute zenith of culinary experiences reaches our discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 grid-rows-[auto] bg-transparent md:bg-primary/10 dark:md:bg-brand-gold/20 md:p-[1px]">
            <div className="bg-surface-container-low dark:bg-zinc-900 p-6 sm:p-8 md:p-12 flex flex-col gap-stack-sm hover:bg-surface-container dark:hover:bg-zinc-800 transition-colors duration-500 rounded-xl md:rounded-none">
              <span className="material-symbols-outlined text-primary dark:text-brand-gold text-3xl sm:text-4xl mb-2 sm:mb-4">diamond</span>
              <h3 className="font-headline-sm text-xl sm:text-headline-sm text-on-surface dark:text-white">Provenance</h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant dark:text-zinc-400">
                An uncompromising commitment to ingredients. We trace the lineage of every element, demanding sustainable, peerless quality from origin to plate.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 sm:p-8 md:p-12 flex flex-col gap-stack-sm hover:bg-surface-container transition-colors duration-500 rounded-xl md:rounded-none">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-2 sm:mb-4">architecture</span>
              <h3 className="font-headline-sm text-xl sm:text-headline-sm text-on-surface">Atmosphere</h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Space is the canvas of the meal. We require acoustic perfection, masterful lighting, and architectural intent that elevates without distracting.
              </p>
            </div>

            <div className="bg-surface-container-low p-6 sm:p-8 md:p-12 flex flex-col gap-stack-sm hover:bg-surface-container transition-colors duration-500 rounded-xl md:rounded-none">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-2 sm:mb-4">restaurant_menu</span>
              <h3 className="font-headline-sm text-xl sm:text-headline-sm text-on-surface">Execution</h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                The silent ballet of service and the absolute precision of technique. A flawless cadence from the first greeting to the final departure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maadi Heritage & History Section */}
      <section className="w-full py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-black/90 border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 flex items-center justify-center">
            <img
              alt="Maadi Society & History 1904-1962"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105 shadow-xl"
              src="/maadi-history.jpg"
            />
          </div>

          <div className="md:col-span-6 flex flex-col gap-stack-md">
            <span className="font-label-caps text-label-caps text-brand-gold tracking-[0.3em] uppercase">The Spirit of Place</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">Maadi-Quiet Elegance & Visual Comfort</h2>
            <p className="font-body-md text-zinc-300 leading-relaxed font-light text-sm sm:text-base">
              Founded in 1904 as a visionary garden suburb along the majestic banks of the Nile, Maadi has long been Cairo’s quietest, most peaceful haven—a sanctuary designed for visual comfort, leafy canopy avenues, and tranquil residential charm.
            </p>
            <p className="font-body-md text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              Away from the hustle of the city, Maadi’s tree-shaded streets, historical clubs, and charming villas offer a serene backdrop where time moves gracefully. Our destinations in Maadi honor this rich century-old heritage, providing guests with a comfortable, soothing environment for the eyes and a truly relaxing dining retreat.
            </p>
          </div>
        </div>
      </section>

      {/* Ramadan Atmosphere Section */}
      <section className="w-full py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-surface-container-low border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 relative group overflow-hidden rounded-2xl border border-brand-gold/20 shadow-2xl">
            <img
              alt="Ramadan illuminated food court crescent moons and golden lights"
              className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="/ramadan.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <span className="font-label-caps text-[10px] text-brand-gold tracking-[0.3em] uppercase block mb-1">Ramadan Magic</span>
              <h3 className="font-serif text-xl sm:text-2xl text-white">Golden Crescents & Radiant Evenings</h3>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col gap-stack-md">
            <span className="font-label-caps text-label-caps text-brand-gold tracking-[0.3em] uppercase">Ramadan at A.F Destinations</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-background leading-tight">Why Ramadan is Different With Us</h2>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
              Ramadan with us is far more than a meal—it is a cherished cultural ritual reimagined within an enchanting open-air sanctuary. As sunset approaches, our outdoor walkways, lush gardens, and food court space light up under a breathtaking canopy of warm golden stars, giant glowing crescent moons, and handcrafted traditional lanterns.
            </p>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
              The Ramadan vibes across our destinations bring together authentic Egyptian heritage, soulful oriental melodies, and exceptional culinary diversity across 8 distinct concepts. Whether breaking your fast with family over rich Lebanese grills, enjoying artisan teas and desserts, or lingering past midnight for a memorable Suhoor under the stars, every evening is crafted to offer unmatched visual comfort and warm togetherness.
            </p>
          </div>
        </div>
      </section>

      {/* Christmas Atmosphere Section */}
      <section className="w-full py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-background border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 flex flex-col gap-stack-md order-2 md:order-1">
            <span className="font-label-caps text-label-caps text-brand-gold tracking-[0.3em] uppercase">Christmas at A.F Destinations</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-background leading-tight">Illuminated Nights & Holiday Vibes</h2>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
              Experience the enchantment of the Christmas season across our dining destinations, where holiday warmth meets breathtaking atmospheric luxury. As evening arrives, our outdoor walkways, gardens, and food courts transform into a winter wonderland illuminated under a canopy of twinkling golden lights, glowing reindeer, festive gift displays, and elegant holiday decor.
            </p>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
              From festive family dinners and holiday celebrations to joyful winter evenings under the stars, our restaurants bring Cairo’s most vibrant Christmas vibes to life—combining gourmet seasonal menus, artisanal delicacies, lively social energy, and unforgettable holiday hospitality.
            </p>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 relative group overflow-hidden rounded-2xl border border-brand-gold/20 shadow-2xl">
            <img
              alt="Christmas festive lights and restaurant decorations"
              className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="/christmas.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <span className="font-label-caps text-[10px] text-brand-gold tracking-[0.3em] uppercase block mb-1">Holiday Magic</span>
              <h3 className="font-serif text-xl sm:text-2xl text-white">Festive Lights & Radiant Evenings</h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="w-full py-12 sm:py-16 md:py-section-gap relative overflow-hidden">
        <div className="w-full h-[400px] sm:h-[550px] md:h-[716px] relative">
          <img alt="elegant dining table" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUG8L1tNenqIzGRie4jFDGrHEmtsf8jhvoePhhFVyckjhjcVOnylaXdKHbVDLWvaEjduIc0eqq83F9GOJbSmzkL6uGuEGsHq-D9ln-2Gn1zrlQN_Xyp3HsOerTGi2cv82zBJxk6hhq-3OOOXu8lucl5xR8xK5KMW3m_DERUxSUTY9esmHUeRJLcD-H0HKDksAxpZK9dldzI7K7fpBS7nRnvUD7YHmp1ujgn9tjuveY1cFFLD3eN_xVchhu6kYcOCwjOUKBNMV7N_5L" />
          <div className="absolute inset-0 bg-background/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-4 sm:px-6 md:px-container-margin z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-start">
            <div className="bg-surface-container-lowest/95 backdrop-blur-md p-6 sm:p-10 md:p-16 max-w-xl border-l-[0.5px] border-primary/40 pointer-events-auto rounded-r-2xl shadow-2xl">
              <span className="font-label-caps text-xs text-primary tracking-[0.3em] uppercase mb-2 sm:mb-4 block">The Experience</span>
              <h2 className="font-headline-md text-2xl sm:text-3xl md:text-headline-md text-on-background mb-4 sm:mb-6">Beyond Dining</h2>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
                To dine within an A.F establishment is to step outside the flow of ordinary time. It is a curated immersion into sensory brilliance, where every interaction is anticipated and every flavor is a revelation. We do not merely serve meals; we orchestrate memories.
              </p>
              <Link to="/restaurants" className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-on-primary font-label-caps text-xs sm:text-label-caps uppercase tracking-widest hover:bg-primary-fixed-dim transition-colors duration-500 rounded-full">
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Story;
