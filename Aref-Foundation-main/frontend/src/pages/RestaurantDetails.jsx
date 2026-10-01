import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const restaurantData = {
    'leclipse': {
        name: 'CARMEL',
        tagline: 'California-Inspired Café & Bakery',
        heroImage: '/carmel-restaurants.jpg',
        description: 'A cinematic exploration of taste, shadow, and absolute precision. An exclusive minimalist sanctuary elevated above the city.',
        conceptTitle: 'A relaxed, California-inspired Maadi café known for hearty breakfasts, freshly baked bagels, pastries and coffee, with an all-day menu from brunch through dinner.',
        locationUrl: 'https://maps.app.goo.gl/W7iCg9q1Er4ErW6PA',
        gallery: [
            '/carmel-gallery1.jpg',
            '/carmel-gallery2.jpg',
            '/carmel-gallery3.jpg',
            '/carmel-gallery4.jpg',
            '/carmel-gallery5.jpg',
            '/carmel-gallery6.jpg',
        ]
    },
    'tenaya': {
        name: 'TENAYA',
        tagline: 'The Art of the Riverside Brunch',
        heroImage: '/tenaya.jpg',
        description: 'A sun-drenched sanctuary on the river\'s edge, where artisanal morning feasts meet the gentle rhythm of the water.',
        conceptTitle: 'An elevated Nile-side dining destination serving Egyptian favourites, Mediterranean dishes, seafood, sushi and international classics from breakfast through dinner.',
        locationUrl: 'https://maps.app.goo.gl/igtJpqXQ4HhkQZFh9',
        gallery: [
            '/tenaya-12.jpg',
            '/tenaya-13.jpg',
            '/tenaya-14.jpg',
            '/tenaya-15.jpg',
            '/tenaya-16.jpg',
            '/tenaya-17.jpg',
            '/tenaya-18.jpg',
            '/tenaya-19.jpg',
            '/tenaya-20.jpg',
            '/tenaya-21.jpg',
            '/tenaya-22.jpg',
            '/tenaya-23.jpg',
            '/tenaya-24.jpg',
            '/tenaya-25.jpg',
            '/tenaya-26.jpg',
            '/tenaya-27.jpg',
            '/tenaya-28.jpg',
            '/tenaya-29.jpg',
            '/tenaya-30.jpg',
            '/tenaya-31.jpg',
        ]
    },
    'asian-corner': {
        name: 'ASIAN CORNER',
        tagline: 'Zen & Pan-Asian Culinary Art',
        heroImage: '/asian-corner.jpg',
        description: 'A majestic fusion of ancient eastern traditions and modern culinary innovation, set against a tranquil, candlelit sanctuary.',
        conceptTitle: 'A long-standing Cairo favourite for Japanese, Chinese and Thai dishes, with a broad menu spanning sushi, noodles, dim sum and wok-fired classics.',
        locationUrl: 'https://maps.app.goo.gl/eqDViNQP4rmKLn5L7?g_st=ic',
        gallery: [
            '/Bakmi Goreng.jpg',
            '/Beef Sechuan.jpg',
            '/Calamari Shantong.jpg',
            '/Chicken Sweet & Sour.jpg',
            '/IMG_0709.jpg',
            '/Shrimp Konafa.jpg',
        ]
    },
    'estro': {
        name: 'ESTRO',
        tagline: 'The Poetry of Italian Modernity',
        heroImage: '/estro.jpg',
        description: 'An immersive journey through the soul of modern Italian cuisine, suspended between history and avant-garde culinary theater.',
        conceptTitle: 'A rooftop Italian restaurant celebrating regional cooking through antipasti, pasta, risotto and seasonal dishes, framed by Maadi skyline views and sunset aperitivo.',
        locationUrl: 'https://maps.app.goo.gl/Jep4Sw3vd9TKbWAY7',
        gallery: [
            '/estro-gallery-1.jpg',
            '/estro-gallery-2.jpg',
            '/estro-gallery-3.jpg',
            '/estro-gallery-4.jpg',
            '/estro-gallery-5.jpg',
            '/estro-gallery-6.jpg',
            '/estro-gallery-7.jpg',
            '/estro-gallery-8.jpg',
            '/estro-gallery-9.jpg',
            '/estro-gallery-10.jpg',
            '/estro-gallery-11.jpg',
            '/estro-gallery-12.jpg',
            '/estro-gallery-13.jpg',
            '/estro-gallery-14.jpg'
        ]
    },
    'frank-co': {
        name: 'FRANK & CO',
        tagline: 'Casual Gourmet & Social Dining',
        heroImage: '/frank-co.jpg',
        description: 'A vibrant social sanctuary where chef-driven comfort food, signature mixology, and relaxed sophistication meet.',
        conceptTitle: 'A warm Maadi tapas bar built around sharing, serving fried, baked and grilled small plates alongside breakfast, sandwiches, salads, coffee and a well-stocked bar.',
        locationUrl: 'https://maps.app.goo.gl/Pm4tBBrTvLDPDTmz6',
        gallery: [
            '/frank-co-gallery-1.jpg',
            '/frank-co-gallery-2.jpg',
            '/frank-co-gallery-3.jpg',
            '/frank-co-gallery-4.jpg',
            '/frank-co-gallery-5.jpg',
            '/frank-co-gallery-6.jpg',
            '/frank-co-gallery-7.jpg',
            '/frank-co-gallery-8.jpg',
            '/frank-co-gallery-9.jpg',
            '/frank-co-gallery-10.jpg',
            '/frank-co-gallery-11.jpg',
            '/frank-co-gallery-12.jpg',
            '/frank-co-gallery-13.jpg',
            '/frank-co-gallery-14.jpg',
            '/frank-co-gallery-15.jpg'
        ]
    },
    'ceryle': {
        name: 'CERYLE',
        tagline: 'Riverside Elegance & Modern Gastronomy',
        heroImage: '/ceryle.jpg',
        description: 'A stunning riverside sanctuary blending modern architectural elegance with panoramic water views and chef-curated international cuisine.',
        conceptTitle: 'A contemporary high-end resto bar on the Nile, pairing refined dining and drinks with live music, entertainment and a sophisticated late-night atmosphere.',
        locationUrl: 'https://maps.app.goo.gl/iChGZZRc8K6yaDmm6?g_st=ic',
        gallery: [
            '/ceryle-gallery-1.jpg',
            '/ceryle-gallery-2.jpg',
            '/ceryle-gallery-3.jpg',
            '/ceryle-gallery-4.jpg',
            '/ceryle-gallery-5.jpg'
        ]
    },
    'koupa': {
        name: 'KOUPA',
        tagline: 'Organic Juice Bar & Artisanal Coffee',
        heroImage: '/koupa.jpg',
        description: 'An organic juice bar and artisanal coffee sanctuary nestled in a lush garden oasis, serving vibrant wellness elixirs and hand-roasted blends.',
        conceptTitle: 'A casual wellness-minded spot for fresh fruit juices, smoothies, coffee and healthy snacks—made for quick pick-me-ups and easy everyday stops.',
        locationUrl: 'https://maps.app.goo.gl/B2pTGpa36cz2xwQq5',
        gallery: [
            '/koupa-gallery-1.jpg',
            '/koupa-gallery-2.jpg',
            '/koupa-gallery-3.jpg',
            '/koupa-gallery-4.jpg',
            '/koupa-gallery-5.jpg',
            '/koupa-gallery-6.jpg',
            '/koupa-gallery-7.jpg',
            '/koupa-gallery-8.jpg',
            '/koupa-gallery-9.jpg',
            '/koupa-gallery-10.jpg',
            '/koupa-gallery-11.jpg',
            '/koupa-gallery-12.jpg',
            '/koupa-gallery-13.jpg',
            '/koupa-gallery-14.jpg',
            '/koupa-gallery-15.jpg',
            '/koupa-gallery-16.jpg',
            '/koupa-gallery-17.jpg',
            '/koupa-gallery-18.jpg',
            '/koupa-gallery-19.jpg',
            '/koupa-gallery-20.jpg',
            '/koupa-gallery-21.jpg',
            '/koupa-gallery-22.jpg',
            '/koupa-gallery-23.jpg',
            '/koupa-gallery-24.jpg'
        ]
    },
    'tawlet-yvonne': {
        name: 'TAWLET YVONNE',
        tagline: 'Lebanese Courtyard & Grill',
        heroImage: '/tawlet-yvonne.jpg',
        description: 'A gorgeous open-air courtyard garden sanctuary serving upscale, authentic Lebanese heritage cuisine and signature mezze.',
        conceptTitle: 'An inviting Maadi table serving home-style Lebanese cooking, from freshly baked manakish and mezze to grills, breakfast favourites and comforting family recipes.',
        locationUrl: 'https://maps.app.goo.gl/Jo2J3qbQYXWFFutMA?g_st=ic',
        gallery: [
            '/tawlet-yvonne-gallery-1.jpg',
            '/tawlet-yvonne-gallery-2.jpg',
            '/tawlet-yvonne-gallery-3.jpg',
            '/tawlet-yvonne-gallery-4.jpg',
            '/tawlet-yvonne-gallery-5.jpg',
            '/tawlet-yvonne-gallery-6.jpg',
            '/tawlet-yvonne-gallery-7.jpg',
            '/tawlet-yvonne-gallery-8.jpg',
            '/tawlet-yvonne-gallery-9.jpg',
            '/tawlet-yvonne-gallery-10.jpg',
            '/tawlet-yvonne-gallery-11.jpg',
            '/tawlet-yvonne-gallery-12.jpg',
            '/tawlet-yvonne-gallery-13.jpg',
            '/tawlet-yvonne-gallery-14.jpg',
            '/tawlet-yvonne-gallery-15.jpg',
            '/tawlet-yvonne-gallery-16.jpg',
            '/tawlet-yvonne-gallery-17.jpg',
            '/tawlet-yvonne-gallery-18.jpg',
            '/tawlet-yvonne-gallery-19.jpg'
        ]

    },
    'ovio': {
        name: 'OVIO',
        tagline: 'Artisanal European Gastronomy',
        heroImage: '/ovio.jpg',
        description: 'A warm, sophisticated European sanctuary celebrating artisanal baking, handcrafted pasta, and the fine art of all-day dining.',
        conceptTitle: 'An all-day European café and restaurant known for artisan baking, breakfast and brunch classics, savoury dishes, desserts and carefully crafted coffee.',
        locationUrl: 'https://maps.app.goo.gl/C6gXRRTGq4QcK3y19',
        gallery: [
            '/ovio-gallery-1.jpg',
            '/ovio-gallery-2.jpg',
            '/ovio-gallery-3.jpg',
            '/ovio-gallery-4.jpg',
            '/ovio-gallery-5.jpg',
            '/ovio-gallery-6.jpg',
            '/ovio-gallery-7.jpg'
        ]
    },
    'bistro-paris': {
        name: 'BISTRO PARIS',
        tagline: 'Authentic French Gastronomy',
        heroImage: '/bistro-paris.jpg',
        description: 'An authentic culinary gateway to Paris, featuring table-side theater, traditional bistro classics, and a vibrant, passionate atmosphere.',
        conceptTitle: 'A lively Parisian-inspired bistro serving French delicacies alongside international favourites, with breakfast, brunch and live entertainment in an elegant setting.',
        locationUrl: 'https://maps.app.goo.gl/kdknPUvEUFBU2YMa6',
        gallery: [
            '/bistro-paris-gallery-1.jpg',
            '/bistro-paris-gallery-2.jpg',
            '/bistro-paris-gallery-3.jpg',
            '/bistro-paris-gallery-4.jpg',
            '/bistro-paris-gallery-5.jpg',
            '/bistro-paris-gallery-6.jpg',
            '/bistro-paris-gallery-7.jpg',
            '/bistro-paris-gallery-8.jpg',
            '/bistro-paris-gallery-9.jpg',
            '/bistro-paris-gallery-10.jpg',
            '/bistro-paris-gallery-11.jpg'
        ]
    },
    'moshi': {
        name: 'MOISHI',
        tagline: 'Japanese Desserts',
        heroImage: '/moshi.jpg',
        description: 'A delightful sweet escape, bringing hand-crafted Japanese mochi ice cream and artisanal desserts to your palate.',
        conceptTitle: 'A Japanese-inspired dessert concept best known for mochi ice cream in signature flavours, alongside creative drinks, sweet treats and gift-ready boxes.',
        locationUrl: 'https://maps.app.goo.gl/X2Xo2t1NXnqnd9Yd7?g_st=ic',
        gallery: [
            '/moshi-gallery-2.jpg',
            '/moshi-gallery-3.jpg',
            '/moshi-gallery-4.jpg',
            '/moshi-gallery-5.jpg',
            '/moshi-gallery-7.jpg',
            '/moshi-gallery-8.jpg',
            '/moshi-gallery-9.jpg'
        ]
    },
    'tipsy-camel': {
        name: 'TIPSY CAMEL',
        tagline: 'Pub & Social Lounge',
        heroImage: '/tipsy-camel.jpg',
        description: 'A lively social lounge featuring premium drinks, artisanal pub fare, and a friendly game of pool in a cozy brick-lined sanctuary.',
        conceptTitle: 'A lively Maadi sports bar where live matches, pool and upbeat social energy meet comfort food, burgers, wings, pizza, cocktails and cold brews.',
        locationUrl: 'https://maps.app.goo.gl/V5MNavoiY7Q7jYE28',
        gallery: [
            '/tipsy-camel-gallery-1.jpg',
            '/tipsy-camel-gallery-2.jpg',
            '/tipsy-camel-gallery-3.jpg',
            '/tipsy-camel-gallery-4.jpg',
            '/tipsy-camel-gallery-5.jpg',
            '/tipsy-camel-gallery-6.jpg',
            '/tipsy-camel-gallery-7.jpg'
        ]
    },
    'caribou': {
        name: 'CARIBOU',
        tagline: 'Artisanal Coffee & Garden Sanctuary',
        heroImage: '/caribou.jpg',
        description: 'A vibrant outdoor garden sanctuary serving premium handcrafted coffee, fresh brews, and delightful morning bites.',
        conceptTitle: 'An international coffeehouse serving handcrafted espresso drinks, brewed coffee, blended beverages, breakfast, sandwiches and bakery treats throughout the day.',
        locationUrl: 'https://maps.app.goo.gl/jypeK1LhRbVH7sZx7',
        gallery: [
            '/caribou-gallery-1.jpg',
            '/caribou-gallery-2.jpg',
            '/caribou-gallery-3.jpg',
            '/caribou-gallery-4.jpg',
            '/caribou-gallery-5.jpg',
            '/caribou-gallery-6.jpg',
            '/caribou-gallery-7.jpg',
            '/caribou-gallery-8.jpg',
            '/caribou-gallery-9.jpg'
        ]
    },
    'fat-lemon': {
        name: 'FAT LEMON',
        tagline: 'Modern Culinary Art & Lifestyle',
        heroImage: '/fat-lemon.png',
        isComingSoon: true,
        description: 'An upcoming sanctuary of modern culinary art, Mediterranean flavors, artisanal dining, and unforgettable atmospheres.',
        conceptTitle: 'A signature lifestyle dining destination opening soon.',
        conceptSubtitle: 'Mediterranean cuisine, artisanal mixology, and curated  aesthetic design.',
        conceptDescription: 'Preparing to bring Egypt’s most revered lifestyle dining experience to our collection. Fat Lemon combines bold culinary craft, artisanal beverages, and effortless atmospheric luxury.',
        gallery: [
            '/fat-lemon.png'
        ]
    },
    'lemon-tree': {
        name: 'FAT LEMON',
        tagline: 'Modern Culinary Art & Lifestyle',
        heroImage: '/fat-lemon.png',
        isComingSoon: true,
        description: 'An upcoming sanctuary of modern culinary art, Mediterranean flavors, artisanal dining, and unforgettable atmospheres.',
        conceptTitle: 'A signature lifestyle dining destination opening soon.',
        conceptSubtitle: 'Mediterranean cuisine, artisanal mixology, and curated aesthetic design.',
        conceptDescription: 'Preparing to bring Egypt’s most revered lifestyle dining experience to our collection. Fat Lemon combines bold culinary craft, artisanal beverages, and effortless atmospheric luxury.',
        gallery: [
            '/fat-lemon.png'
        ]
    }
};

const RestaurantDetails = () => {
    const { id } = useParams();
    const data = restaurantData[id] || restaurantData['leclipse']; // Fallback to Carmel if not found

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="font-sans bg-brand-dark dark:bg-[#0b0c0d] text-brand-text dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">
            {/* Header / Hero */}
            <header className="relative min-h-[80vh] md:h-screen w-full flex flex-col items-center justify-center pt-20 md:pt-24 overflow-hidden">
                <div className="absolute inset-0 w-full h-full border-b border-brand-gold/20">
                    <img alt={`${data.name} Interior`} className="w-full h-full object-cover object-center shadow-2xl drop-shadow-2xl" src={data.heroImage} />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-6 sm:mt-12 md:mt-8">
                    {data.isComingSoon && (
                        <div className="mb-4 sm:mb-6 inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-brand-gold/20 border border-brand-gold/50 rounded-full backdrop-blur-md shadow-2xl">
                            <span className="text-brand-gold text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">COMING SOON</span>
                        </div>
                    )}
                    <span className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2 sm:mb-4 block">{data.tagline}</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-4 sm:mb-6 tracking-wide break-words max-w-full">{data.name}</h1>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-200 max-w-2xl mx-auto font-light leading-relaxed">
                        {data.description}
                    </p>
                    {data.locationUrl && (
                        <a
                            href={data.locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 sm:mt-6 inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 bg-black/50 backdrop-blur-md border border-brand-gold/40 hover:border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 rounded-full text-xs font-medium tracking-widest uppercase shadow-xl group hover:scale-105"
                        >
                            <svg className="w-4 h-4 text-brand-gold group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>View Location</span>
                        </a>
                    )}
                </div>

                <div className="absolute bottom-4 sm:bottom-6 z-10 flex flex-col items-center space-y-2">
                    <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-serif">Scroll to Discover</span>
                    <div className="w-px h-6 sm:h-8 bg-zinc-600"></div>
                </div>
            </header>

            {/* Concept Section */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-brand-dark dark:bg-[#0b0c0d] border-b border-brand-gold/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 md:gap-16">
                    <div className="md:col-span-3">
                        <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium">Concept</span>
                    </div>
                    <div className="md:col-span-8 md:col-start-5">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-brand-text dark:text-white leading-tight mb-6 sm:mb-12">
                            {data.conceptTitle}<br />
                            {data.conceptSubtitle}
                        </h2>
                        <p className="text-brand-muted dark:text-zinc-300 leading-relaxed text-base sm:text-lg max-w-3xl font-light">
                            {data.conceptDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery/Atmosphere Section */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-brand-dark dark:bg-[#0b0c0d] mb-12 sm:mb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
                    {data.gallery.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-xl [content-visibility:auto] [contain-intrinsic-size:1px_600px] ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                        >
                            <img
                                alt={`${data.name} Atmosphere ${index + 1}`}
                                className="w-full h-[300px] sm:h-[400px] md:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu rounded-xl"
                                src={typeof item === 'string' ? item : item.src}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails;
