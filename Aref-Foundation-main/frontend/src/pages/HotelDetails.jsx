import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const hotelData = {
    'royal': {
        name: 'ROYAL RESIDENCE',
        tagline: 'Coastal Sanctuary & Platinum Luxury',
        heroImage: '/royal-hotel.jpg',
        description: 'A masterclass in architectural elegance, blending seamlessly with the rugged coastline to provide an unparalleled sense of peace and privacy.',
        conceptSubtitle: 'An uncompromising vision of modern sanctuary and refined luxury.',
        conceptDescription: 'The Royal Residence is designed as a peaceful retreat from the modern world. Nestled on the water\'s edge, it harmonizes organic textures, warm ambient lighting, and elegant architectural design. Guests can enjoy sweeping views of the shoreline, stroll through beautifully manicured gardens, or relax in curated luxury lounges. Every room and suite is meticulously crafted to be a private haven of comfort and style.',
        contact: {
            email: 'hotel@royalmaadi.com',
            phones: ['0223587276', '0223781222']
        },
        categorizedGallery: {
            rooms: [
                '/royal-gallery-1.jpeg',
                '/royal-gallery-2.jpeg',
                '/royal-gallery-3.jpeg',
                '/royal-gallery-4.jpeg',
                '/royal-gallery-5.jpeg',
                '/royal-gallery-6.jpeg',
                '/royal-gallery-7.jpeg',
                '/royal-gallery-9.jpeg',
                '/royal-gallery-12.jpeg',
                '/royal-gallery-13.jpeg',
                '/royal-gallery-14.jpeg',
                '/royal-gallery-15.jpeg',
                '/royal-gallery-19.jpeg',
                '/royal-gallery-20.jpeg',
                '/royal-gallery-22.jpeg',
                '/royal-gallery-23.jpeg',
                '/royal-gallery-24.jpeg',
                '/royal-gallery-25.jpeg'
            ],
            foodDining: [],
            beach: [],
            pool: [],
            hotelExterior: [
                '/royal-gallery-8.jpeg',
                '/royal-gallery-10.jpeg',
                '/royal-gallery-16.jpeg',
                '/royal-gallery-17.jpeg',
                '/royal-gallery-18.jpeg',
                '/royal-gallery-21.jpeg'
            ],
            activities: [],
            facilities: [
                '/royal-gallery-11.jpeg'
            ],
            other: []
        },
        gallery: [
            '/royal-gallery-1.jpeg',
            '/royal-gallery-2.jpeg',
            '/royal-gallery-3.jpeg',
            '/royal-gallery-4.jpeg',
            '/royal-gallery-5.jpeg',
            '/royal-gallery-6.jpeg',
            '/royal-gallery-7.jpeg',
            '/royal-gallery-8.jpeg',
            '/royal-gallery-9.jpeg',
            '/royal-gallery-10.jpeg',
            '/royal-gallery-11.jpeg',
            '/royal-gallery-12.jpeg',
            '/royal-gallery-13.jpeg',
            '/royal-gallery-14.jpeg',
            '/royal-gallery-15.jpeg',
            '/royal-gallery-16.jpeg',
            '/royal-gallery-17.jpeg',
            '/royal-gallery-18.jpeg',
            '/royal-gallery-19.jpeg',
            '/royal-gallery-20.jpeg',
            '/royal-gallery-21.jpeg',
            '/royal-gallery-22.jpeg',
            '/royal-gallery-23.jpeg',
            '/royal-gallery-24.jpeg',
            '/royal-gallery-25.jpeg'
        ]
    },
    'elphistone': {
        name: 'ELPHISTONE',
        tagline: 'Red Sea Resort & Golden Sanctuary',
        heroImage: '/elphistone.jpg',
        description: 'A breathtaking beachfront resort where the golden sands meet the crystal waters of the Red Sea, offering an oasis of relaxation and adventure.',
        conceptTitle: 'Paradise on the shore.',
        conceptSubtitle: 'A pristine vision of coastal paradise and ultimate seaside relaxation.',
        conceptDescription: 'Elphistone Resort is a luxurious escape nestled along the pristine Red Sea coast. Combining stunning modern comfort with authentic seaside charm, the resort features private cabanas, multiple outdoor pools, and extensive sandy beaches. Savor international cuisines, explore vibrant coral reefs, or simply bask under the warm sun. Every detail is curated to deliver an unforgettable coastal getaway.',
        extension: {
            title: 'ELPHISTONE HOTEL AND SUITE APTS.',
            subtitle: 'NOW WELCOMING GUESTS',
            badge: 'DELIVERING NOW',
            description: 'We are delighted to announce that ELPHISTONE HOTEL AND SUITE APTS is now open and welcoming guests. Experience the ultimate in Red Sea luxury with contemporary suite apartments, private resort-view balconies, and exclusive resort privileges.'
        },
        categorizedGallery: {
            rooms: [
                '/elphistone-gallery-9.jpg',
                '/elphistone-gallery-10.jpg',
                '/elphistone-gallery-11.jpg',
                '/elphistone-gallery-12.jpg',
                '/elphistone-gallery-13.jpg',
                '/elphistone-gallery-14.jpg',
                '/elphistone-gallery-15.jpg',
                '/elphistone-gallery-16.jpg',
                '/elphistone-gallery-17.jpg',
                '/elphistone-gallery-18.jpg',
                '/elphistone-gallery-19.jpg',
                '/elphistone-gallery-27.jpg',
                '/elphistone-gallery-28.jpg',
                '/elphistone-gallery-46.jpg'
            ],
            foodDining: [
                '/elphistone-gallery-2.jpg',
                '/elphistone-gallery-4.jpg',
                '/elphistone-gallery-7.jpg',
                '/elphistone-gallery-8.jpg',
                '/elphistone-gallery-36.jpg',
                '/elphistone-gallery-37.jpg',
                '/elphistone-gallery-38.jpg',
                '/elphistone-gallery-39.jpg',
                '/elphistone-gallery-40.jpg',
                '/elphistone-gallery-41.jpg',
                '/elphistone-gallery-42.jpg',
                '/elphistone-gallery-43.jpg',
                '/elphistone-gallery-44.jpg',
                '/elphistone-gallery-45.jpg'
            ],
            beach: [
                '/elphistone-gallery-1.jpg',
                '/elphistone-gallery-3.jpg',
                '/elphistone-gallery-5.jpg',
                '/elphistone-gallery-23.jpg',
                '/elphistone-gallery-24.jpg',
                '/elphistone-gallery-30.jpg',
                '/elphistone-gallery-31.jpg',
                '/elphistone-gallery-32.jpg',
                '/elphistone-gallery-33.jpg',
                '/elphistone-gallery-34.jpg',
                '/elphistone-gallery-35.jpg'
            ],
            pool: [
                '/elphistone-gallery-29.jpg'
            ],
            hotelExterior: [
                '/elphistone-gallery-6.jpg',
                '/elphistone-gallery-26.jpg',
                '/elphistone-gallery-47.jpg'
            ],
            activities: [
                '/elphistone-gallery-25.jpg'
            ],
            facilities: [
                '/elphistone-gallery-20.jpg',
                '/elphistone-gallery-21.jpg',
                '/elphistone-gallery-22.jpg'
            ],
            other: []
        },
        gallery: [
            '/elphistone-gallery-1.jpg',
            '/elphistone-gallery-2.jpg',
            '/elphistone-gallery-3.jpg',
            '/elphistone-gallery-4.jpg',
            '/elphistone-gallery-5.jpg',
            '/elphistone-gallery-6.jpg',
            '/elphistone-gallery-7.jpg',
            '/elphistone-gallery-8.jpg',
            '/elphistone-gallery-9.jpg',
            '/elphistone-gallery-10.jpg',
            '/elphistone-gallery-11.jpg',
            '/elphistone-gallery-12.jpg',
            '/elphistone-gallery-13.jpg',
            '/elphistone-gallery-14.jpg',
            '/elphistone-gallery-15.jpg',
            '/elphistone-gallery-16.jpg',
            '/elphistone-gallery-17.jpg',
            '/elphistone-gallery-18.jpg',
            '/elphistone-gallery-19.jpg',
            '/elphistone-gallery-20.jpg',
            '/elphistone-gallery-21.jpg',
            '/elphistone-gallery-22.jpg',
            '/elphistone-gallery-23.jpg',
            '/elphistone-gallery-24.jpg',
            '/elphistone-gallery-25.jpg',
            '/elphistone-gallery-26.jpg',
            '/elphistone-gallery-27.jpg',
            '/elphistone-gallery-28.jpg',
            '/elphistone-gallery-29.jpg',
            '/elphistone-gallery-30.jpg',
            '/elphistone-gallery-31.jpg',
            '/elphistone-gallery-32.jpg',
            '/elphistone-gallery-33.jpg',
            '/elphistone-gallery-34.jpg',
            '/elphistone-gallery-35.jpg',
            '/elphistone-gallery-36.jpg',
            '/elphistone-gallery-37.jpg',
            '/elphistone-gallery-38.jpg',
            '/elphistone-gallery-39.jpg',
            '/elphistone-gallery-40.jpg',
            '/elphistone-gallery-41.jpg',
            '/elphistone-gallery-42.jpg',
            '/elphistone-gallery-43.jpg',
            '/elphistone-gallery-44.jpg',
            '/elphistone-gallery-45.jpg',
            '/elphistone-gallery-46.jpg',
            '/elphistone-gallery-47.jpg'
        ]
    }
};

const CATEGORY_FOLDERS_DEF = [
    { key: 'rooms', name: 'Rooms', icon: '🛏️', desc: 'Bedrooms, luxury suites & bathrooms' },
    { key: 'foodDining', name: 'Food & Restaurants', icon: '🍽️', desc: 'Dining, buffets, BBQ & culinary delights' },
    { key: 'beach', name: 'Beach', icon: '🏖️', desc: 'Shoreline, cabanas, Red Sea & pier' },
    { key: 'pool', name: 'Pool', icon: '🏊', desc: 'Swimming pools & aquatic relaxation' },
    { key: 'hotelExterior', name: 'Hotel & Exterior', icon: '🏢', desc: 'Resort architecture, grounds & views' },
    { key: 'activities', name: 'Activities', icon: '🚴', desc: 'Sports, tennis courts & entertainment' },
    { key: 'facilities', name: 'Facilities', icon: '💆', desc: 'Lobby, reception, shops & services' },
    { key: 'other', name: 'Other', icon: '📁', desc: 'Additional resort highlights' }
];

const HotelDetails = () => {
    const { id } = useParams();
    const data = hotelData[id] || hotelData['royal']; // Fallback to Royal if not found
    const [selectedCategoryFolder, setSelectedCategoryFolder] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedCategoryFolder(null);
    }, [id]);

    return (
        <div className="font-sans bg-brand-dark overflow-x-hidden">
            {/* Header / Hero */}
            <header className="relative min-h-[80vh] md:h-screen w-full flex flex-col items-center justify-center pt-20 md:pt-24 overflow-hidden">
                <div className="absolute inset-0 w-full h-full border-b border-brand-gold/20">
                    <img alt={`${data.name} Interior`} className="w-full h-full object-cover object-center shadow-2xl drop-shadow-2xl transform-gpu" src={data.heroImage} decoding="async" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-6 sm:mt-12 md:mt-16">
                    <span className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 sm:mb-6 block">{data.tagline}</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-4 sm:mb-8 tracking-wide break-words max-w-full">{data.name}</h1>
                    <p className="text-sm sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-light leading-relaxed">
                        {data.description}
                    </p>
                    {data.contact && (
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href={`mailto:${data.contact.email}`}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/60 backdrop-blur-md border border-brand-gold/50 hover:border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 rounded-full text-xs font-medium tracking-widest uppercase shadow-xl hover:scale-105"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{data.contact.email}</span>
                            </a>
                            {data.contact.phones.map((phone, idx) => (
                                <a
                                    key={idx}
                                    href={`tel:${phone}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/60 backdrop-blur-md border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold transition-all duration-300 rounded-full text-xs font-medium tracking-widest uppercase shadow-xl hover:scale-105"
                                >
                                    <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>{phone}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div className="absolute bottom-6 sm:bottom-12 z-10 flex flex-col items-center space-y-2 sm:space-y-4">
                    <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-serif">Scroll to Discover</span>
                    <div className="w-px h-6 sm:h-12 bg-zinc-600"></div>
                </div>
            </header>

            {/* Concept Section */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-brand-dark border-b border-brand-gold/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 md:gap-16">
                    <div className="md:col-span-3">
                        <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium">Concept</span>
                    </div>
                    <div className="md:col-span-8 md:col-start-5">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-brand-text leading-tight mb-6 sm:mb-12">
                            {data.conceptTitle}<br />
                            {data.conceptSubtitle}
                        </h2>
                        <p className="text-brand-muted leading-relaxed text-base sm:text-lg max-w-3xl font-light">
                            {data.conceptDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Direct Contact & Reservations Section */}
            {data.contact && (
                <section className="py-12 sm:py-20 px-4 sm:px-6 bg-zinc-950/90 border-b border-brand-gold/15 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
                        <span className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2 block font-semibold">Direct Reservations & Concierge</span>
                        <h3 className="text-3xl sm:text-5xl font-serif text-white mb-4">Contact {data.name}</h3>
                        <p className="text-zinc-300 font-light text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
                            For private bookings, suite availability, and concierge assistance, reach out directly to our reservations desk.
                        </p>
                        <div className="w-16 h-px bg-brand-gold/40 mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                            {/* Email Card */}
                            <a
                                href={`mailto:${data.contact.email}`}
                                className="group p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 flex flex-col items-center text-center shadow-2xl hover:scale-[1.02]"
                            >
                                <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/40 text-brand-gold flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-black transition-colors duration-300 shadow-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-brand-gold text-[11px] font-serif uppercase tracking-[0.2em] mb-1 font-semibold">Email Inquiries</span>
                                <span className="text-white font-medium text-base sm:text-lg group-hover:text-brand-gold transition-colors">{data.contact.email}</span>
                            </a>

                            {/* Phone Lines Card */}
                            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-brand-gold/30 flex flex-col items-center text-center shadow-2xl">
                                <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/40 text-brand-gold flex items-center justify-center mb-4 shadow-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-brand-gold text-[11px] font-serif uppercase tracking-[0.2em] mb-1 font-semibold">Telephone Lines</span>
                                <div className="flex flex-col gap-1.5 mt-1">
                                    {data.contact.phones.map((phone, idx) => (
                                        <a
                                            key={idx}
                                            href={`tel:${phone}`}
                                            className="text-white font-medium text-base sm:text-lg hover:text-brand-gold transition-colors tracking-wider"
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ELPHISTONE HOTEL AND SUITE APTS Section */}
            {data.extension && (
                <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 bg-zinc-950 border-b border-brand-gold/15 my-6 sm:my-8 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
                        {/* Left Side Content */}
                        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 items-start">
                            {/* Badges */}
                            <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
                                <span className="px-3 sm:px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase rounded-full flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    {data.extension.badge || 'DELIVERING NOW'}
                                </span>
                                <span className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium">
                                    {data.extension.subtitle || 'NOW WELCOMING GUESTS'}
                                </span>
                            </div>

                            {/* Section Heading */}
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight my-1 sm:my-2">
                                {data.extension.title || 'ELPHISTONE HOTEL AND SUITE APTS.'}
                            </h2>

                            {/* Description */}
                            <p className="text-zinc-200 leading-relaxed text-sm sm:text-lg font-light max-w-xl">
                                {data.extension.description}
                            </p>

                            {/* Amenities Showcase */}
                            <div className="space-y-4 pt-4 sm:pt-6 border-t border-brand-gold/20 w-full max-w-xl">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <span className="w-7 h-7 rounded-full bg-brand-gold/10 border border-brand-gold/40 text-brand-gold flex items-center justify-center text-xs font-serif font-bold shrink-0 mt-0.5">
                                        01
                                    </span>
                                    <div>
                                        <h4 className="text-white text-sm sm:text-base font-medium font-serif">Luxury Suite Apartments</h4>
                                        <p className="text-zinc-300 text-xs font-light mt-0.5">Elegantly appointed suites with contemporary furnishings and refined comforts.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <span className="w-7 h-7 rounded-full bg-brand-gold/10 border border-brand-gold/40 text-brand-gold flex items-center justify-center text-xs font-serif font-bold shrink-0 mt-0.5">
                                        02
                                    </span>
                                    <div>
                                        <h4 className="text-white text-sm sm:text-base font-medium font-serif">Private Terrace & Resort Balconies</h4>
                                        <p className="text-zinc-300 text-xs font-light mt-0.5">Serene outdoor living spaces overlooking manicured gardens, poolside lounges, and architectural courtyards.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <span className="w-7 h-7 rounded-full bg-brand-gold/10 border border-brand-gold/40 text-brand-gold flex items-center justify-center text-xs font-serif font-bold shrink-0 mt-0.5">
                                        03
                                    </span>
                                    <div>
                                        <h4 className="text-white text-sm sm:text-base font-medium font-serif">Exclusive Resort Privileges</h4>
                                        <p className="text-zinc-300 text-xs font-light mt-0.5">Full access to pristine sandy beaches, pools, fine dining, and concierge services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Image Showcase */}
                        <div className="lg:col-span-6 w-full">
                            <div className="relative group overflow-hidden rounded-3xl border border-brand-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-zinc-950 transition-all duration-500 hover:border-brand-gold/60 h-[300px] sm:h-[420px] lg:h-[500px]">
                                <img
                                    src="/elphistone-gallery-1.jpg"
                                    alt="Elphistone Hotel & Suite Apts"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                                <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-[11px] tracking-[0.2em] font-semibold uppercase shadow-xl">
                                    SUITE EXTENSION SHOWCASE
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                                    <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide font-medium drop-shadow-lg">Elphistone Hotel & Suite Apts</h3>
                                    <p className="text-zinc-300 text-xs md:text-sm font-light mt-1 leading-relaxed drop-shadow">Luxury coastal living with resort views and private balconies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Categorized Gallery Section */}
            <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-brand-dark mb-12 sm:mb-16 border-t border-brand-gold/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-16">
                        <span className="text-brand-gold text-xs tracking-[0.3em] uppercase font-medium block">Curated Photography</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-2 mb-4 tracking-tight">Categorized Gallery</h2>
                        <div className="w-12 h-px bg-brand-gold/50 mx-auto my-4" />
                    </div>

                    {/* Category 1: Rooms Section */}
                    {data.categorizedGallery?.rooms && data.categorizedGallery.rooms.length > 0 && (
                        <div className="mb-14 sm:mb-24">
                            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-brand-gold/20">
                                <div>
                                    <span className="text-brand-gold text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1">CATEGORY 1</span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">Rooms & Suites</h3>
                                </div>
                                <span className="text-xs text-zinc-400 font-mono tracking-widest">{data.categorizedGallery.rooms.length} Photos</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {data.categorizedGallery.rooms.map((item, index) => (
                                    <div key={index} className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-brand-gold/40 transition-all duration-500">
                                        <img
                                            alt={`${data.name} Room ${index + 1}`}
                                            className="w-full h-[240px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                                            src={item}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-brand-gold text-xs font-serif tracking-wide">Room Detail #{index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Category 2: Beach Section */}
                    {data.categorizedGallery?.beach && data.categorizedGallery.beach.length > 0 && (
                        <div className="mb-14 sm:mb-24">
                            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-brand-gold/20">
                                <div>
                                    <span className="text-brand-gold text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1">CATEGORY 2</span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">Beach & Coastline</h3>
                                </div>
                                <span className="text-xs text-zinc-400 font-mono tracking-widest">{data.categorizedGallery.beach.length} Photos</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {data.categorizedGallery.beach.map((item, index) => (
                                    <div key={index} className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-brand-gold/40 transition-all duration-500">
                                        <img
                                            alt={`${data.name} Beach ${index + 1}`}
                                            className="w-full h-[240px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                                            src={item}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-brand-gold text-xs font-serif tracking-wide">Beach & Shoreline #{index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Category 3: Pools & Grounds Section */}
                    {data.categorizedGallery?.poolsGrounds && data.categorizedGallery.poolsGrounds.length > 0 && (
                        <div className="mb-14 sm:mb-24">
                            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-brand-gold/20">
                                <div>
                                    <span className="text-brand-gold text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1">CATEGORY 3</span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">Pools & Resort Grounds</h3>
                                </div>
                                <span className="text-xs text-zinc-400 font-mono tracking-widest">{data.categorizedGallery.poolsGrounds.length} Photos</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {data.categorizedGallery.poolsGrounds.map((item, index) => (
                                    <div key={index} className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-brand-gold/40 transition-all duration-500">
                                        <img
                                            alt={`${data.name} Pool ${index + 1}`}
                                            className="w-full h-[240px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                                            src={item}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-brand-gold text-xs font-serif tracking-wide">Resort Grounds #{index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Category 4: Dining & Amenities Section */}
                    {data.categorizedGallery?.dining && data.categorizedGallery.dining.length > 0 && (
                        <div className="mb-8 sm:mb-12">
                            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-brand-gold/20">
                                <div>
                                    <span className="text-brand-gold text-[10px] tracking-[0.25em] uppercase font-semibold block mb-1">CATEGORY 4</span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">Dining & Amenities</h3>
                                </div>
                                <span className="text-xs text-zinc-400 font-mono tracking-widest">{data.categorizedGallery.dining.length} Photos</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {data.categorizedGallery.dining.map((item, index) => (
                                    <div key={index} className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-brand-gold/40 transition-all duration-500">
                                        <img
                                            alt={`${data.name} Dining ${index + 1}`}
                                            className="w-full h-[240px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                                            src={item}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-brand-gold text-xs font-serif tracking-wide">Dining & Atmosphere #{index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default HotelDetails;
