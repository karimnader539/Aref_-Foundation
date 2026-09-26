import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const restaurantsData = [
  {
    id: 'tenaya',
    name: 'TENAYA',
    image: '/tenaya.jpg',
    description: "An elevated Nile-side dining destination serving Egyptian favourites, Mediterranean dishes, seafood, sushi and international classics from breakfast through dinner."
  },
  {
    id: 'estro',
    name: 'ESTRO',
    image: '/estro.jpg',
    description: 'A rooftop Italian restaurant celebrating regional cooking through antipasti, pasta, risotto and seasonal dishes, framed by Maadi skyline views and sunset aperitivo.'
  },
  {
    id: 'ovio',
    name: 'OVIO',
    image: '/ovio.jpg',
    description: 'An all-day European café and restaurant known for artisan baking, breakfast and brunch classics, savoury dishes, desserts and carefully crafted coffee.'
  },
  {
    id: 'tipsy-camel',
    name: 'TIPSY CAMEL',
    image: '/tipsy-camel.jpg',
    description: 'A lively Maadi sports bar where live matches, pool and upbeat social energy meet comfort food, burgers, wings, pizza, cocktails and cold brews.'
  },
  {
    id: 'tawlet-yvonne',
    name: 'TAWLET YVONNE',
    image: '/tawlet-yvonne.jpg',
    description: 'An inviting Maadi table serving home-style Lebanese cooking, from freshly baked manakish and mezze to grills, breakfast favourites and comforting family recipes.'
  },
  {
    id: 'asian-corner',
    name: 'ASIAN CORNER',
    image: '/asian-corner.jpg',
    description: 'A long-standing Cairo favourite for Japanese, Chinese and Thai dishes, with a broad menu spanning sushi, noodles, dim sum and wok-fired classics.'
  },
  {
    id: 'leclipse',
    name: 'CARMEL',
    image: '/carmel-restaurants.jpg',
    description: 'A relaxed, California-inspired Maadi café known for hearty breakfasts, freshly baked bagels, pastries and coffee, with an all-day menu from brunch through dinner.'
  },
  {
    id: 'bistro-paris',
    name: 'BISTRO PARIS',
    image: '/bistro-paris.jpg',
    description: 'A lively Parisian-inspired bistro serving French delicacies alongside international favourites, with breakfast, brunch and live entertainment in an elegant setting.'
  },
  {
    id: 'frank-co',
    name: 'FRANK & CO',
    image: '/frank-co.jpg',
    description: 'A warm Maadi tapas bar built around sharing, serving fried, baked and grilled small plates alongside breakfast, sandwiches, salads, coffee and a well-stocked bar.'
  },
  {
    id: 'ceryle',
    name: 'CERYLE',
    image: '/ceryle.jpg',
    description: 'A contemporary high-end resto bar on the Nile, pairing refined dining and drinks with live music, entertainment and a sophisticated late-night atmosphere.'
  },
  {
    id: 'koupa',
    name: 'KOUPA',
    image: '/koupa.jpg',
    description: 'A casual wellness-minded spot for fresh fruit juices, smoothies, coffee and healthy snacks—made for quick pick-me-ups and easy everyday stops.'
  },
  {
    id: 'moshi',
    name: 'MOISHI',
    image: '/moshi.jpg',
    description: 'A Japanese-inspired dessert concept best known for mochi ice cream in signature flavours, alongside creative drinks, sweet treats and gift-ready boxes.'
  },
  {
    id: 'caribou',
    name: 'CARIBOU',
    image: '/caribou.jpg',
    description: 'An international coffeehouse serving handcrafted espresso drinks, brewed coffee, blended beverages, breakfast, sandwiches and bakery treats throughout the day.'
  },
  {
    id: 'fat-lemon',
    name: 'FAT LEMON',
    tagline: 'Modern Culinary Art & Lifestyle',
    image: '/fat-lemon.png',
    isComingSoon: true,
    description: 'An upcoming sanctuary of modern culinary art, Mediterranean flavors, artisanal dining, and unforgettable atmospheres.'
  }
];

const Restaurants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-24 px-4 sm:px-8 md:px-16 lg:px-32 max-w-[1920px] mx-auto pb-16 sm:pb-24 md:pb-section-gap w-full flex flex-col flex-grow">
      {/* Header Section */}
      <header className="mb-8 sm:mb-12 mt-4 sm:mt-8 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-background mb-stack-md">Curated Excellence</h1>
        <div className="w-12 h-[1px] bg-primary mb-stack-md"></div>
        <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-2xl">
          Discover our exclusive collection of culinary destinations. Each establishment has been selected for its uncompromising dedication to taste, atmosphere, and service.
        </p>
      </header>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-6 md:gap-x-8">
        {restaurantsData.map((est) => (
          <Link
            key={est.id}
            to={`/restaurants/${est.id}`}
            className="col-span-1 group cursor-pointer card-hover-effect flex flex-col p-3 sm:p-4 bg-surface-dim rounded-xl block"
          >
            <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[21/9] mb-3 bg-surface-container-highest rounded-lg">
              <img
                alt={est.name}
                className={`w-full h-full object-cover image-zoom transition-opacity duration-700 ${est.isComingSoon
                  ? 'opacity-50 group-hover:opacity-75 filter grayscale-[50%]'
                  : 'opacity-80 group-hover:opacity-100'
                  }`}
                src={est.image}
              />
              {est.tag && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md px-3 py-1 font-label-caps text-[10px] sm:text-label-caps text-primary border border-primary/30 rounded-sm">
                  {est.tag}
                </div>
              )}
              {est.isComingSoon && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-all duration-500 group-hover:backdrop-blur-none group-hover:bg-black/25">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 shadow-2xl border border-primary/30">
                    <span className="font-label-caps text-label-caps text-primary tracking-[0.25em] text-xs font-semibold">
                      COMING SOON
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-primary mb-1 uppercase tracking-[0.2em]">
                  {est.tagline}
                </span>
                <h2 className="font-headline-sm text-xl sm:text-headline-sm text-on-background mb-1 sm:mb-2">
                  {est.name}
                </h2>
                <p className="font-body-md text-xs sm:text-[14px] text-on-surface-variant max-w-md line-clamp-2">
                  {est.description}
                </p>
              </div>
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border border-outline-variant rounded-full group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-500 shrink-0">
                <span className="material-symbols-outlined text-primary font-light text-base sm:text-lg">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Restaurants;
