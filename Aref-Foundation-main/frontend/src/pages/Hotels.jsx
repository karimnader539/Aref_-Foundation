import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = () => {
    return (
        <div className="pt-20 sm:pt-24 px-4 sm:px-8 md:px-16 lg:px-32 max-w-[1920px] mx-auto pb-16 sm:pb-24 md:pb-section-gap w-full flex flex-col flex-grow">
            {/* Header Section */}
            <header className="mb-12 sm:mb-20 mt-6 sm:mt-12 text-center max-w-4xl mx-auto flex flex-col items-center">
                <h1 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-background mb-stack-md">Curated Escapes</h1>
                <div className="w-12 h-[1px] bg-primary mb-stack-md"></div>
                <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-2xl">
                    Experience the pinnacle of hospitality. Our collection of hotels and resorts offers a sanctuary of refined elegance, where every detail is orchestrated to perfection.
                </p>
            </header>


            {/* Hotel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-24 gap-x-8 md:gap-x-12">
                {/* Card 1 Featured */}
                <Link to="/hotels/royal" className="col-span-1 md:col-span-2 lg:col-span-3 group cursor-pointer card-hover-effect flex flex-col p-3 sm:p-4 bg-surface-dim rounded-xl block">
                    <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[21/9] mb-stack-md bg-surface-container-highest rounded-lg">
                        <img alt="Royal Residence" className="w-full h-full object-cover image-zoom opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="/royal-hotel.jpg" />
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md px-3 py-1 font-label-caps text-[10px] sm:text-label-caps text-primary border border-primary/30 rounded-sm">
                            PLATINUM COLLECTION
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex flex-col">
                            <span className="font-label-caps text-[10px] sm:text-label-caps text-primary mb-1 sm:mb-2 uppercase tracking-widest">Coastal Sanctuary</span>
                            <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-background mb-2 sm:mb-4">ROYAL RESIDENCE</h2>
                            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant max-w-md line-clamp-2">
                                A masterclass in architectural elegance, blending seamlessly with the rugged coastline to provide an unparalleled sense of peace and privacy.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-outline-variant rounded-full group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-500 shrink-0 self-end sm:self-start">
                            <span className="material-symbols-outlined text-primary font-light">arrow_forward</span>
                        </div>
                    </div>
                </Link>

                {/* Card 2 Featured */}
                <Link to="/hotels/elphistone" className="col-span-1 md:col-span-2 lg:col-span-3 group cursor-pointer card-hover-effect flex flex-col p-3 sm:p-4 bg-surface-dim rounded-xl block">
                    <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[21/9] mb-stack-md bg-surface-container-highest rounded-lg">
                        <img alt="Elphistone Hotel" className="w-full h-full object-cover image-zoom opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="/elphistone.jpg" />
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md px-3 py-1 font-label-caps text-[10px] sm:text-label-caps text-primary border border-primary/30 rounded-sm">
                            GOLDEN ESCAPE
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex flex-col">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="font-label-caps text-[10px] sm:text-label-caps text-primary uppercase tracking-widest">Red Sea Resort</span>
                                <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[9px] sm:text-[10px] font-semibold tracking-wider rounded-full uppercase">
                                    OPENING SOON: ELPHISTONE HOTEL AND SUITE APTS
                                </span>
                            </div>
                            <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-background mb-2 sm:mb-4">ELPHISTONE</h2>
                            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant max-w-md line-clamp-2">
                                A breathtaking beachfront resort where the golden sands meet the crystal waters of the Red Sea, offering an oasis of relaxation and adventure.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-outline-variant rounded-full group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-500 shrink-0 self-end sm:self-start">
                            <span className="material-symbols-outlined text-primary font-light">arrow_forward</span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Hotels;
