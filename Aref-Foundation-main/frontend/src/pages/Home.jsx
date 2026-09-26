import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const establishments = [
  {
    name: 'TENAYA',
    tagline: 'Riverside Brunch',
    image: '/tenaya.jpg',
    link: '/restaurants/tenaya',
    description: 'A sun-drenched sanctuary on the river\'s edge, where artisanal morning feasts meet the rhythm of the water.'
  },
  {
    name: 'ESTRO',
    tagline: 'Modern Italian',
    image: '/estro.jpg',
    link: '/restaurants/estro',
    description: 'An immersive journey through the soul of modern Italian cuisine serving progressive narratives.'
  },
  {
    name: 'OVIO',
    tagline: 'Artisanal European & Bakery',
    image: '/ovio.jpg',
    link: '/restaurants/ovio',
    description: 'A warm, sophisticated European sanctuary celebrating artisanal baking, handcrafted pasta, and the fine art of all-day dining.'
  },
  {
    name: 'TIPSY CAMEL',
    tagline: 'Pub & Social Lounge',
    image: '/tipsy-camel.jpg',
    link: '/restaurants/tipsy-camel',
    description: 'A lively social lounge featuring premium drinks, artisanal pub fare, and a friendly game of pool in a cozy brick-lined sanctuary.'
  },
  {
    name: 'TAWLET YVONNE',
    tagline: 'Lebanese Food Court & Grill',
    image: '/tawlet-yvonne.jpg',
    link: '/restaurants/tawlet-yvonne',
    description: 'A gorgeous open-air food court garden sanctuary serving upscale, authentic Lebanese heritage cuisine.'
  },
  {
    name: 'ASIAN CORNER',
    tagline: 'Zen & Pan-Asian',
    image: '/asian-corner.jpg',
    link: '/restaurants/asian-corner',
    description: 'A majestic fusion of ancient eastern traditions and modern culinary innovation.'
  },
  {
    name: 'CARMEL',
    tagline: 'Contemporary French',
    image: '/carmel-restaurants.jpg',
    link: '/restaurants/leclipse',
    description: 'A masterclass in modern gastronomy, blending classic French techniques with avant-garde presentation.'
  },
  {
    name: 'BISTRO PARIS',
    tagline: 'Authentic French Dining',
    image: '/bistro-paris.jpg',
    link: '/restaurants/bistro-paris',
    description: 'An authentic culinary gateway to Paris, featuring table-side theater, traditional bistro classics, and a vibrant atmosphere.'
  },
  {
    name: 'FRANK & CO',
    tagline: 'Casual Gourmet & Social',
    image: '/frank-co.jpg',
    link: '/restaurants/frank-co',
    description: 'A lively neighborhood sanctuary serving chef-driven comfort foods, craft mixology, and garden vibes.'
  },
  {
    name: 'CERYLE',
    tagline: 'Riverside Fine Dining',
    image: '/ceryle.jpg',
    link: '/restaurants/ceryle',
    description: 'A stunning riverside sanctuary blending modern architectural elegance with panoramic water views.'
  },
  {
    name: 'KOUPA',
    tagline: 'Juice Bar & Coffee Oasis',
    image: '/koupa.jpg',
    link: '/restaurants/koupa',
    description: 'An organic juice bar and artisanal coffee sanctuary nestled in a lush, garden oasis.'
  },
  {
    name: 'MOISHI',
    tagline: 'Japanese Desserts',
    image: '/moshi.jpg',
    link: '/restaurants/moshi',
    description: 'A delightful sweet escape, bringing hand-crafted Japanese mochi ice cream and artisanal desserts to your palate.'
  },
  {
    name: 'CARIBOU',
    tagline: 'Artisanal Coffee & Garden Sanctuary',
    image: '/caribou.jpg',
    link: '/restaurants/caribou',
    description: 'A vibrant outdoor garden sanctuary serving premium handcrafted coffee, fresh brews, and delightful morning bites.'
  },
  {
    name: 'FAT LEMON',
    tagline: 'Modern Culinary Art & Lifestyle',
    image: '/fat-lemon.png',
    link: '/restaurants/fat-lemon',
    isComingSoon: true,
    description: 'An upcoming sanctuary of modern culinary art, Mediterranean flavors, artisanal dining, and unforgettable atmospheres.'
  },
  {
    name: 'ROYAL RESIDENCE',
    tagline: 'Coastal Hotel & Sanctuary',
    image: '/royal-hotel.jpg',
    link: '/hotels/royal',
    description: 'A masterclass in architectural elegance, blending seamlessly with the rugged coastline.'
  },
  {
    name: 'ELPHISTONE',
    tagline: 'Red Sea Resort & Golden Sanctuary',
    image: '/elphistone.jpg',
    link: '/hotels/elphistone',
    description: 'A breathtaking beachfront resort where the golden sands meet the crystal waters of the Red Sea, offering an oasis of relaxation.'
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      let perPage = 3;
      if (window.innerWidth < 768) {
        perPage = 1;
      } else if (window.innerWidth < 1024) {
        perPage = 2;
      }
      setItemsPerPage(perPage);
      setCurrentIndex((prev) => Math.min(prev, establishments.length - perPage));
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? establishments.length - itemsPerPage : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= establishments.length - itemsPerPage ? 0 : prev + 1));
  };

  return (
    <>
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#fdfcfb] dark:bg-[#0b0c0d] pt-24 pb-6 transition-colors duration-300">
        <div className="absolute inset-0 z-0 flex items-center justify-center p-4 sm:p-8">
          <img
            alt="Hero"
            className="w-full h-full object-contain opacity-100 max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] dark:invert dark:hue-rotate-180 dark:mix-blend-screen transition-all duration-300"
            src="/hero-bg.jpg"
          />
        </div>
        <div className="h-10"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-auto mb-6 sm:mb-10">
          <Link to="/restaurants" className="bg-primary text-on-primary font-label-caps text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 uppercase tracking-[0.2em] hover:bg-primary-fixed-dim transition-all duration-500 shadow-xl rounded-sm">
            Explore Restaurants
          </Link>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-1 opacity-60 pb-2">
          <span className="font-label-caps text-[10px] text-primary dark:text-brand-gold tracking-widest uppercase">Scroll to Discover</span>
          <div className="h-6 sm:h-10 w-[0.5px] bg-primary dark:bg-brand-gold"></div>
        </div>
      </section>

      {/* Storytelling Parallax Concept */}
      <section className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
          <div className="flex flex-col gap-stack-md">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Our Philosophy</span>
            <h2 className="font-headline-md text-3xl sm:text-4xl md:text-headline-md text-brand-gold">The Art of Atmosphere.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-300">We believe that a truly exceptional meal is about more than just the food on the plate. It is a symphony of sensory experiences—the precise placement of a light, the weight of the cutlery, the hush of a well-appointed room.</p>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-300">Every establishment in our curated collection has been meticulously selected to guarantee an environment that elevates the act of dining into an unforgettable event.</p>
            <div className="mt-stack-sm">
              <Link to="/story" className="group inline-flex items-center gap-2 font-label-caps text-label-caps text-primary dark:text-brand-gold uppercase tracking-widest border-b-[0.5px] border-primary dark:border-brand-gold pb-1">
                Read the Story
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[450px] md:h-[600px] w-full rounded-xl overflow-hidden">
            <img alt="Dining detail" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZwFmBGovTkVoOpwryJ6m3Bioh-vCHu-RQfrExO1q13twmqZzmC4xg1XqDYnknpy8Nw3sUoyT3ag2SExqggNiDw1KG_uXPiNxIAmU0UyGDzZt5D09QY9pLQw7fHeYPwJISPjleRd2-yvpFiBxgA52vCmAS0fwq_30UXJ9-cldibqURQupm567jEdK_ljMOOpfZG6XTHLkkRx4Ya7dKCs7MqYLCDZe4jrl_blSB0SwwLZbsYHGVXw7AxvdMjWGADAg4CWB1QdteA1pI" />
            <div className="absolute inset-0 border border-primary/20 dark:border-brand-gold/30 scale-[0.95]"></div>
          </div>
        </div>
      </section>

      {/* ONE 8 Food Court Destination Section */}
      <section className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-zinc-950/90 border-y border-brand-gold/30 my-8 sm:my-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-5 flex items-center justify-center">
            <img
              alt="ONE 8 Food Court Logo"
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] h-auto object-contain transition-transform duration-700 hover:scale-105"
              src="/one8.png"
            />
          </div>

          <div className="md:col-span-7 flex flex-col gap-4 sm:gap-6">
            <span className="font-label-caps text-xs text-brand-gold tracking-[0.3em] uppercase">Maadi's Premier Destination</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              ONE 8 Food Court
            </h2>
            <p className="font-body-md text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
              ONE 8 is Maadi’s most unique, vibrant sanctuary—a grand open-air garden food court uniting 8 world-class hospitality and dining concepts in one exceptional location. Designed as a premier lifestyle destination, ONE 8 offers a captivating food court atmosphere, beautiful outdoor views, lush greenery, and a warm social energy found nowhere else in Maadi.
            </p>
            <p className="font-body-md text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              Whether you seek luxury hospitality at Royal Residence, authentic Lebanese heritage cooking at Tawlet Yvonne, Parisian bistro classics, sports lounge energy at Tipsy Camel, organic garden juices at Koupa, California breakfasts at Carmel, artisanal coffee at Caribou, or modern culinary art at Fat Lemon—ONE 8 brings iconic destinations together into one seamless food court experience.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">ROYAL RESIDENCE</span>
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">CARIBOU</span>
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">TAWLET YVONNE</span>
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">KOUPA</span>
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">TIPSY CAMEL</span>
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">BISTRO PARIS</span>
              <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider">CARMEL</span>
              <span className="px-3 py-1 bg-brand-gold/20 border border-brand-gold/50 rounded-full text-brand-gold text-[10px] sm:text-xs font-medium uppercase tracking-wider flex items-center gap-1.5">
                FAT LEMON
                <span className="text-[9px] bg-brand-gold text-black font-bold px-1.5 py-0.5 rounded-full">SOON</span>
              </span>
            </div>

            <div className="mt-4">
              <Link to="/restaurants" className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-black font-label-caps text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 rounded-full shadow-xl">
                Discover The Food Court
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maadi Heritage & Serenity Section */}
      <section className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-zinc-950/95 border-y border-brand-gold/20 my-8 sm:my-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 flex items-center justify-center">
            <img
              alt="Maadi Society & History 1904-1962"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105 shadow-xl"
              src="/maadi-history.jpg"
            />
          </div>

          <div className="md:col-span-6 flex flex-col gap-4 sm:gap-6">
            <span className="font-label-caps text-xs text-brand-gold tracking-[0.3em] uppercase">The Spirit of Place</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Maadi-Quiet Elegance & Timeless Heritage
            </h2>
            <p className="font-body-md text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
              Founded in 1904 as a visionary garden suburb along the majestic banks of the Nile, Maadi has long been Cairo’s quietest, most peaceful haven—a sanctuary designed for visual comfort, lush green canopy avenues, and tranquil residential charm.
            </p>
            <p className="font-body-md text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              Away from the hustle of the city, Maadi’s tree-shaded streets, historical clubs, and charming villas offer a serene backdrop where time moves gracefully. Our destinations in Maadi honor this rich century-old heritage, providing guests with a comfortable, soothing environment for the eyes and a truly relaxing dining retreat.
            </p>
            <div className="mt-4">
              <Link to="/story" className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-brand-gold/50 text-brand-gold font-label-caps text-xs font-semibold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-black transition-all duration-300 rounded-full shadow-lg">
                Read Our Full Story
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ramadan Festive Section */}
      <section className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-zinc-950/80 border-y border-brand-gold/20 my-8 sm:my-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 flex flex-col gap-4 sm:gap-6 order-2 md:order-1">
            <span className="font-label-caps text-xs text-brand-gold tracking-[0.3em] uppercase">Ramadan at A.F Destinations</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">Ramadan Nights & Illuminated Food Courts</h2>
            <p className="font-body-md text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
              Ramadan with us is an experience like no other. As twilight sets over Maadi, our open-air garden food court transforms into a glowing sanctuary decorated with giant illuminated crescent moons, star-lit trees, and traditional Ramadan lanterns. The atmosphere balances serene luxury with the deep cultural warmth of Egyptian hospitality.
            </p>
            <p className="font-body-md text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              Immerse yourself in authentic Ramadan vibes—from lavish Iftar buffets and curated family feasts to late-night Suhoor under the stars. Enjoy live oriental tunes, signature Ramadan beverages, artisan Lebanese, Mediterranean, and international delicacies, and unforgettable evenings with loved ones that make Ramadan at ONE 8 truly extraordinary.
            </p>
            <div className="mt-4">
              <Link to="/restaurants" className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-black font-label-caps text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 rounded-full shadow-lg">
                Explore Ramadan Dining
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 relative group overflow-hidden rounded-2xl border border-brand-gold/30 shadow-2xl">
            <img
              alt="Ramadan Festive Atmosphere"
              className="w-full h-[280px] sm:h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="/ramadan.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <span className="font-label-caps text-xs text-brand-gold tracking-[0.3em] uppercase block mb-1">Ramadan Sanctuary</span>
              <h3 className="font-serif text-xl sm:text-2xl text-white">Golden Crescents & Radiant Nights</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Festive Section */}
      <section className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin relative bg-zinc-950/80 border-y border-brand-gold/20 my-8 sm:my-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 flex flex-col gap-4 sm:gap-6 order-2 md:order-1">
            <span className="font-label-caps text-xs text-brand-gold tracking-[0.3em] uppercase">Festive Holiday Season</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">Christmas Nights & Magical Vibes</h2>
            <p className="font-body-md text-zinc-300 leading-relaxed text-base sm:text-lg font-light">
              Experience the enchantment of the Christmas season across our dining destinations, where holiday warmth meets breathtaking atmospheric luxury. As evening arrives, our outdoor walkways, gardens, and food courts transform into a winter wonderland illuminated under a canopy of twinkling golden lights, glowing reindeer, festive gift displays, and elegant holiday decor.
            </p>
            <p className="font-body-md text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
              From festive family dinners and holiday celebrations to joyful winter evenings under the stars, our restaurants bring Cairo’s most vibrant Christmas vibes to life—combining gourmet seasonal menus, artisanal delicacies, lively social energy, and unforgettable holiday hospitality.
            </p>
            <div className="mt-4">
              <Link to="/restaurants" className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-black font-label-caps text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 rounded-full shadow-lg">
                Explore Destinations
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 relative group overflow-hidden rounded-2xl border border-brand-gold/30 shadow-2xl">
            <img
              alt="Christmas Festive Atmosphere"
              className="w-full h-[280px] sm:h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              src="/christmas.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <span className="font-label-caps text-xs text-brand-gold tracking-[0.3em] uppercase block mb-1">Holiday Magic</span>
              <h3 className="font-serif text-xl sm:text-2xl text-white">Golden Lights & Festive Celebrations</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider max-w-7xl mx-auto opacity-30"></div>

      {/* Featured Establishments Section */}
      <section className="py-12 sm:py-16 md:py-section-gap px-4 sm:px-6 md:px-container-margin overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-16">
            <div>
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-2 sm:mb-4">Curated Selection</span>
              <h2 className="font-headline-sm text-2xl sm:text-headline-sm text-primary">Featured Establishments</h2>
            </div>
            <div className="flex gap-4">
              <button onClick={handlePrev} className="w-10 h-10 sm:w-12 sm:h-12 border-[0.5px] border-primary/40 rounded-full flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button onClick={handleNext} className="w-10 h-10 sm:w-12 sm:h-12 border-[0.5px] border-primary/40 rounded-full flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="overflow-hidden w-full -mx-4 px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {establishments.map((est) => (
                <Link
                  key={est.name}
                  to={est.link}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-4 group cursor-pointer block"
                >
                  <div className="bg-zinc-950 h-[380px] sm:h-[450px] relative overflow-hidden w-full rounded-xl">
                    <img alt={est.name} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${est.isComingSoon ? 'opacity-30 group-hover:opacity-55 grayscale-[50%] scale-100' : 'opacity-60 group-hover:opacity-80 group-hover:scale-105'}`} src={est.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                    {est.isComingSoon && (
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center transition-all duration-500 group-hover:backdrop-blur-none group-hover:bg-black/25">
                        <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 shadow-2xl border border-brand-gold/30">
                          <span className="font-label-caps text-brand-dark tracking-[0.25em] text-xs font-semibold">
                            COMING SOON
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col gap-2">
                      <span className="font-label-caps text-[10px] text-brand-gold tracking-widest uppercase">{est.tagline}</span>
                      <h3 className="font-headline-sm text-xl sm:text-[24px] text-white">{est.name}</h3>
                      <div className="w-8 h-[0.5px] bg-brand-gold my-2"></div>
                      <p className="font-body-md text-xs sm:text-sm text-zinc-300 line-clamp-2">{est.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
