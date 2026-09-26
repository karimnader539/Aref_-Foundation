import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const searchData = [
  { id: 'tenaya', name: 'TENAYA', tagline: 'The Art of the Riverside Brunch', type: 'Restaurant', category: 'Restaurants', image: '/tenaya.jpg', link: '/restaurants/tenaya', description: 'Nile-side dining destination serving Egyptian, Mediterranean, seafood and sushi.' },
  { id: 'estro', name: 'ESTRO', tagline: 'The Poetry of Italian Modernity', type: 'Restaurant', category: 'Restaurants', image: '/estro.jpg', link: '/restaurants/estro', description: 'Rooftop Italian restaurant with panoramic skyline views, antipasti and pasta.' },
  { id: 'ovio', name: 'OVIO', tagline: 'Artisanal European Gastronomy', type: 'Restaurant', category: 'Restaurants', image: '/ovio.jpg', link: '/restaurants/ovio', description: 'All-day European café, artisan baking, handcrafted pasta and brunch.' },
  { id: 'tipsy-camel', name: 'TIPSY CAMEL', tagline: 'Pub & Social Lounge', type: 'Restaurant', category: 'Restaurants', image: '/tipsy-camel.jpg', link: '/restaurants/tipsy-camel', description: 'Maadi sports bar, live matches, pool table, burgers, wings and cocktails.' },
  { id: 'tawlet-yvonne', name: 'TAWLET YVONNE', tagline: 'Lebanese Food Court & Grill', type: 'Restaurant', category: 'Restaurants', image: '/tawlet-yvonne.jpg', link: '/restaurants/tawlet-yvonne', description: 'Maadi table serving home-style Lebanese cooking, manakish, mezze and grills.' },
  { id: 'asian-corner', name: 'ASIAN CORNER', tagline: 'Zen & Pan-Asian Culinary Art', type: 'Restaurant', category: 'Restaurants', image: '/asian-corner.jpg', link: '/restaurants/asian-corner', description: 'Cairo favourite for Japanese, Chinese and Thai dishes, sushi and dim sum.' },
  { id: 'leclipse', name: 'CARMEL', tagline: 'California-Inspired Café', type: 'Restaurant', category: 'Restaurants', image: '/carmel-restaurants.jpg', link: '/restaurants/leclipse', description: 'California-inspired café known for breakfasts, bagels, pastries and coffee.' },
  { id: 'bistro-paris', name: 'BISTRO PARIS', tagline: 'Authentic French Gastronomy', type: 'Restaurant', category: 'Restaurants', image: '/bistro-paris.jpg', link: '/restaurants/bistro-paris', description: 'Parisian-inspired bistro serving French delicacies, brunch and live entertainment.' },
  { id: 'frank-co', name: 'FRANK & CO', tagline: 'Casual Gourmet & Social Dining', type: 'Restaurant', category: 'Restaurants', image: '/frank-co.jpg', link: '/restaurants/frank-co', description: 'Maadi tapas bar serving sharing small plates, breakfast, salads and drinks.' },
  { id: 'ceryle', name: 'CERYLE', tagline: 'Riverside Elegance & Modern Gastronomy', type: 'Restaurant', category: 'Restaurants', image: '/ceryle.jpg', link: '/restaurants/ceryle', description: 'High-end resto bar on the Nile with live music, drinks and late-night atmosphere.' },
  { id: 'koupa', name: 'KOUPA', tagline: 'Organic Juice Bar & Artisanal Coffee', type: 'Restaurant', category: 'Restaurants', image: '/koupa.jpg', link: '/restaurants/koupa', description: 'Organic juice bar, smoothies, coffee and healthy snacks in a garden oasis.' },
  { id: 'moshi', name: 'MOISHI', tagline: 'Japanese Desserts & Mochi', type: 'Restaurant', category: 'Restaurants', image: '/moshi.jpg', link: '/restaurants/moshi', description: 'Japanese-inspired dessert concept for mochi ice cream and sweet treats.' },
  { id: 'caribou', name: 'CARIBOU', tagline: 'Artisanal Coffee & Garden Sanctuary', type: 'Restaurant', category: 'Restaurants', image: '/caribou.jpg', link: '/restaurants/caribou', description: 'International coffeehouse serving espresso, coffee, blended drinks and bakery.' },
  { id: 'fat-lemon', name: 'FAT LEMON', tagline: 'Modern Culinary Art', type: 'Restaurant (Coming Soon)', category: 'Restaurants', image: '/fat-lemon.png', link: '/restaurants/fat-lemon', description: 'An upcoming sanctuary of modern culinary art, Mediterranean flavors, and artisanal dining.' },
  { id: 'royal', name: 'ROYAL RESIDENCE', tagline: 'Coastal Sanctuary & Platinum Luxury', type: 'Hotel', category: 'Hotels', image: '/royal-hotel.jpg', link: '/hotels/royal', description: 'Platinum collection coastal luxury sanctuary and architectural elegance.' },
  { id: 'elphistone', name: 'ELPHISTONE', tagline: 'Red Sea Resort & Golden Sanctuary', type: 'Hotel', category: 'Hotels', image: '/elphistone.jpg', link: '/hotels/elphistone', description: 'Red Sea beachfront resort with outdoor pools, sandy beaches and coral reefs.' }
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const activeClass = "text-brand-gold border-b border-brand-gold pb-1 hover:opacity-70 transition-all duration-700 ease-in-out";
  const inactiveClass = "text-zinc-600 dark:text-zinc-400 hover:text-brand-gold hover:opacity-70 transition-all duration-700 ease-in-out";

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredResults = query.trim() === '' ? [] : searchData.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
  });

  const handleSelectResult = (link) => {
    setIsSearchOpen(false);
    setQuery('');
    navigate(link);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b-[0.5px] border-[#C5A059]/40 dark:border-brand-gold/30 flex justify-between items-center px-6 md:px-16 py-2.5 md:py-3.5 transition-all duration-300">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-[0.4em] text-brand-gold flex items-center hover:opacity-70 transition-all duration-700 ease-in-out">
          <img alt="A.F Logo" className="h-11 md:h-14 w-auto object-contain drop-shadow-md" src="/logo.png" />
        </Link>

        <nav className="hidden md:flex gap-12 font-serif tracking-[0.2em] text-[11px] uppercase">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Home</NavLink>
          <NavLink to="/restaurants" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Restaurants</NavLink>
          <NavLink to="/hotels" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Hotels</NavLink>
          <NavLink to="/story" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Story</NavLink>
        </nav>

        <div className="flex items-center gap-3 md:gap-5 text-brand-gold">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            className="p-2 rounded-full border border-brand-gold/30 dark:border-brand-gold/50 bg-brand-gold/5 dark:bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:scale-105"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl transition-transform duration-500 transform rotate-0 hover:rotate-180">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Search Button */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="p-2 hover:bg-brand-gold/10 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl">search</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 hover:bg-brand-gold/10 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl md:hidden pt-24 pb-12 px-8 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-6 font-serif tracking-[0.2em] text-xl uppercase text-white">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand-gold transition-colors border-b border-white/10">Home</NavLink>
            <NavLink to="/restaurants" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand-gold transition-colors border-b border-white/10">Restaurants</NavLink>
            <NavLink to="/hotels" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand-gold transition-colors border-b border-white/10">Hotels</NavLink>
            <NavLink to="/story" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand-gold transition-colors border-b border-white/10">Story</NavLink>
          </nav>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-zinc-400 text-xs font-serif tracking-widest uppercase">Theme Display</span>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-full border border-brand-gold/50 bg-brand-gold/10 text-brand-gold text-xs font-serif uppercase tracking-widest flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
              </span>
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col items-center pt-20 px-4 md:px-8 overflow-y-auto">
          <div className="w-full max-w-3xl flex flex-col gap-8 relative">
            {/* Header & Close Button */}
            <div className="flex justify-between items-center border-b border-brand-gold/30 pb-4">
              <span className="text-brand-gold text-xs font-serif tracking-[0.3em] uppercase">Search Portfolio</span>
              <button 
                onClick={() => { setIsSearchOpen(false); setQuery(''); }}
                className="text-zinc-400 hover:text-white p-2 transition-colors flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Input Bar */}
            <div className="relative w-full flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-brand-gold text-2xl">search</span>
              <input 
                ref={searchInputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search restaurants, cafes, hotels, cuisines..."
                className="w-full bg-zinc-900/90 border border-brand-gold/40 focus:border-brand-gold rounded-xl py-4 pl-14 pr-12 text-white placeholder-zinc-500 font-sans text-base md:text-lg focus:outline-none shadow-2xl transition-all"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="absolute right-4 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">backspace</span>
                </button>
              )}
            </div>

            {/* Quick Suggested Tags if empty */}
            {!query.trim() && (
              <div className="flex flex-col gap-4 mt-2">
                <span className="text-zinc-500 text-xs tracking-widest uppercase">Popular Destinations & Categories:</span>
                <div className="flex flex-wrap gap-2.5">
                  {['ONE 8 Food Court', 'Lebanese', 'Italian', 'French', 'Sushi', 'Café & Bakery', 'Sports Lounge', 'Juice Bar', 'Red Sea Hotel'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-4 py-2 bg-zinc-900 border border-brand-gold/20 hover:border-brand-gold text-brand-gold text-xs rounded-full transition-all duration-300 hover:bg-brand-gold/10 cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Search Results */}
            {query.trim() !== '' && (
              <div className="flex flex-col gap-4 pb-16">
                <span className="text-zinc-400 text-xs tracking-wider uppercase">
                  {filteredResults.length} Result{filteredResults.length !== 1 ? 's' : ''} Found
                </span>

                {filteredResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredResults.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleSelectResult(item.link)}
                        className="group flex gap-4 p-3 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-brand-gold/50 rounded-xl cursor-pointer transition-all duration-300"
                      >
                        <img 
                          alt={item.name} 
                          src={item.image} 
                          className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="flex flex-col justify-center gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                              {item.type}
                            </span>
                          </div>
                          <h4 className="text-white font-serif text-lg group-hover:text-brand-gold transition-colors">{item.name}</h4>
                          <p className="text-zinc-400 text-xs line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-zinc-500 font-sans">
                    No establishments found matching "{query}".
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
